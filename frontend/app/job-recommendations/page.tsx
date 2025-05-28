import type { Metadata } from "next"
import FeaturePlaceholder from "@/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "Smart Job Recommendations | EduOrb",
  description: "Get personalized job recommendations based on your skills",
}

export default function JobRecommendations() {
  return (
    <FeaturePlaceholder
      title="Smart Job Recommendations"
      description="Get personalized job recommendations based on your skills, experience, and career goals."
      icon="briefcase"
      comingSoon={true}
    />
  )
}
