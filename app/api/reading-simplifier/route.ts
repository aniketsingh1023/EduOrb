import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { text, level } = await req.json()

    const levelInstructions = {
      elementary: "elementary school level (grades 3-5). Use simple words, short sentences, and basic concepts.",
      intermediate: "middle school level (grades 6-8). Use moderately complex vocabulary and sentence structures.",
      "high-school": "high school level (grades 9-12). Use appropriate vocabulary while maintaining clarity.",
    }

    const result = await generateText({
      model: openai("gpt-4-turbo"),
      system: `You are an expert text simplifier. Your task is to rewrite complex text to make it easier to understand while preserving all important information and meaning.

Guidelines:
- Maintain the original meaning and key information
- Break down complex sentences into simpler ones
- Replace difficult vocabulary with simpler alternatives
- Use active voice when possible
- Add explanations for technical terms when necessary
- Organize information clearly with good flow
- Keep the tone appropriate for the target reading level`,
      prompt: `Please simplify the following text for ${levelInstructions[level as keyof typeof levelInstructions]}:

"${text}"

Make sure to:
1. Preserve all important information
2. Use vocabulary appropriate for the target level
3. Maintain logical flow and organization
4. Explain any necessary technical terms
5. Keep the content engaging and readable`,
    })

    return Response.json({ simplifiedText: result.text })
  } catch (error) {
    console.error("Text simplification error:", error)
    return Response.json({ error: "Failed to simplify text" }, { status: 500 })
  }
}
