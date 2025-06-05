import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

const examSchema = z.object({
  title: z.string().describe("Title of the exam"),
  questions: z.array(
    z.object({
      question: z.string().describe("The question text"),
      options: z.array(z.string()).length(4).describe("Four multiple choice options"),
      correctAnswer: z.number().min(0).max(3).describe("Index of the correct answer (0-3)"),
      explanation: z.string().describe("Detailed explanation of why the answer is correct"),
    }),
  ),
})

export async function POST(req: Request) {
  try {
    const { subject, topic, difficulty, questionCount } = await req.json()

    const result = await generateObject({
      model: openai("gpt-4-turbo"),
      schema: examSchema,
      prompt: `Generate a ${difficulty} level exam for ${subject} on the topic: "${topic}". 
      
      Create exactly ${questionCount} multiple-choice questions. Each question should:
      - Be relevant to the specified topic and subject
      - Match the ${difficulty} difficulty level
      - Have 4 clear, distinct options
      - Include a detailed explanation for the correct answer
      - Test understanding, not just memorization
      
      Make sure the questions cover different aspects of the topic and progressively build understanding.`,
    })

    return Response.json(result.object)
  } catch (error) {
    console.error("Exam generation error:", error)
    return Response.json({ error: "Failed to generate exam" }, { status: 500 })
  }
}
