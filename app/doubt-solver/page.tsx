import type { Metadata } from "next"
import FeaturePlaceholder from "@/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "Multilingual Doubt Solver | EduOrb",
  description: "Get answers to your questions in multiple languages",
}

export default function DoubtSolver() {
  return (
    <FeaturePlaceholder
      title="Multilingual Doubt Solver"
      description="Get answers to your questions in multiple languages, anytime you need help."
      icon="help-circle"
      comingSoon={true}
    />
  )
}
