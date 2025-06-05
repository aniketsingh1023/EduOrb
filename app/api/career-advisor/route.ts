import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

const careerAdviceSchema = z.object({
  careerPaths: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      requirements: z.array(z.string()),
      timeline: z.string(),
      salary: z.string(),
    }),
  ),
  skills: z.object({
    current: z.array(z.string()),
    recommended: z.array(z.string()),
    priority: z.array(z.string()),
  }),
  actionPlan: z.array(
    z.object({
      phase: z.string(),
      duration: z.string(),
      actions: z.array(z.string()),
    }),
  ),
  resources: z.array(
    z.object({
      type: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  ),
})

export async function POST(req: Request) {
  try {
    const { currentRole, experience, interests, skills, goals } = await req.json()

    const result = await generateObject({
      model: openai("gpt-4-turbo"),
      schema: careerAdviceSchema,
      prompt: `Provide comprehensive career advice for someone with the following profile:

Current Role: ${currentRole}
Experience Level: ${experience}
Interests & Passions: ${interests}
Current Skills: ${skills || "Not specified"}
Career Goals: ${goals || "Not specified"}

Please provide:

1. 3-4 realistic career paths that align with their interests and experience
2. Skills analysis (current strengths, recommended skills to develop, priority learning areas)
3. A detailed action plan with phases and timelines
4. Relevant learning resources and recommendations

Make the advice practical, actionable, and tailored to their specific situation. Include salary ranges, timelines, and specific steps they can take.`,
    })

    return Response.json(result.object)
  } catch (error) {
    console.error("Career advice generation error:", error)
    return Response.json({ error: "Failed to generate career advice" }, { status: 500 })
  }
}
