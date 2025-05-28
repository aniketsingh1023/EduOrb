import type { Metadata } from "next"
import FeaturePlaceholder from "@/src/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "Reading Simplifier | EduOrb",
  description: "Simplify complex texts and convert to audio",
}

export default function ReadingSimplifier() {
  return (
    <FeaturePlaceholder
      title="Reading Simplifier + Audio"
      description="Simplify complex texts and convert them to easy-to-understand audio explanations."
      icon="book-open"
      comingSoon={true}
    />
  )
}
