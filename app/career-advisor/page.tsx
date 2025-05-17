import type { Metadata } from "next"
import FeaturePlaceholder from "@/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "AI Career Advisor | EduOrb",
  description: "Get personalized career guidance from our AI advisor",
}

export default function CareerAdvisor() {
  return (
    <FeaturePlaceholder
      title="AI Career Advisor"
      description="Get personalized career guidance and recommendations based on your skills and goals."
      icon="compass"
      comingSoon={false}
    />
  )
}
