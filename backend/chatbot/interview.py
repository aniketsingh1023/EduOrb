import os
import google.generativeai as genai
import re

# Configure Gemini
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash")

def generate_questions(skill):
    """Generate 3-5 interview questions using Gemini based on the provided skill."""
    prompt = f"Generate 5 concise and relevant interview questions for a candidate skilled in {skill}."
    response = model.generate_content(prompt)
    questions = response.text.split('\n')
    return [q.strip("-•1234567890. ").strip() for q in questions if q.strip()]

def score_answer(question, answer):
    """Use Gemini to evaluate the quality of the answer and return a score out of 10."""
    prompt = (
        f"You are an AI interview evaluator.\n\n"
        f"Question: {question}\n"
        f"Candidate Answer: {answer}\n\n"
        f"Evaluate the answer and provide a score out of 10 along with a short explanation. "
        f"Example format: 'Score: 7/10 - Reason: Good understanding but lacks depth.'"
    )
    response = model.generate_content(prompt)
    text = response.text.strip()

    match = re.search(r'(\d{1,2})/10', text)
    score = int(match.group(1)) if match else 0

    return {
        'score': score,
        'feedback': text
    }
