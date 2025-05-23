from flask import Blueprint, render_template, request, session, redirect
from chatbot.interview import generate_questions, score_answer
from supabase_handler.db import supabase

chatbot_bp = Blueprint('chatbot', __name__)

@chatbot_bp.route('/start', methods=['GET', 'POST'])
def start_interview():
    if 'user_email' not in session:
        return redirect('/login')

    if request.method == 'POST':
        skill = request.form['skill']
        questions = generate_questions(skill)
        session['questions'] = questions
        session['answers'] = []
        session['skill'] = skill
        return redirect('/interview')

    return render_template('start_interview.html')


@chatbot_bp.route('/interview', methods=['GET', 'POST'])
def interview():
    if 'user_email' not in session:
        return redirect('/login')

    questions = session.get('questions')
    answers = session.get('answers', [])

    if request.method == 'POST':
        answer = request.form['answer']
        answers.append(answer)
        session['answers'] = answers

        if len(answers) == len(questions):
            evaluations = [score_answer(q, a) for q, a in zip(questions, answers)]
            final_score = sum(item["score"] for item in evaluations)

            email = session.get('user_email')
            try:
                supabase.table('interview_scores').insert({
                    "email": email,
                    "skill": session['skill'],
                    "questions": questions,
                    "answers": answers,
                    "evaluations": evaluations,  # optional
                    "score": final_score
                }).execute()
            except Exception as e:
                return f"❌ Error saving to Supabase: {e}"

            return render_template('result.html', score=final_score, evaluations=evaluations)

    current_question = questions[len(answers)]
    return render_template('interview.html', question=current_question)
