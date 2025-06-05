import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

const mindMapNodeSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.string(),
    text: z.string(),
    level: z.number(),
    children: z.array(mindMapNodeSchema),
  }),
)

const mindMapSchema = z.object({
  title: z.string(),
  rootNode: mindMapNodeSchema,
})

export async function POST(req: Request) {
  try {
    const { topic, context } = await req.json()

    const result = await generateObject({
      model: openai("gpt-4-turbo"),
      schema: mindMapSchema,
      prompt: `Create a comprehensive mind map for the topic: "${topic}".
      ${context ? `Additional context: ${context}` : ""}
      
      Structure the mind map with:
      - A central root node with the main topic
      - 3-5 main branches (level 1) covering key aspects
      - 2-4 sub-branches (level 2) for each main branch
      - Keep text concise (2-5 words per node)
      - Use clear, logical organization
      - Include relevant subtopics and concepts
      
      Generate unique IDs for each node and set appropriate levels (0 for root, 1 for main branches, 2 for sub-branches).`,
    })

    return Response.json(result.object)
  } catch (error) {
    console.error("Mind map generation error:", error)
    return Response.json({ error: "Failed to generate mind map" }, { status: 500 })
  }
}
