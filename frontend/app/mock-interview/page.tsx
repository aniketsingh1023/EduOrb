import type { Metadata } from "next"
import FeaturePlaceholder from "@/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "AI Mock Interview | EduOrb",
  description: "Practice interviews with our AI interviewer",
}

export default function MockInterview() {
  return (
    <FeaturePlaceholder
      title="AI Mock Interview"
      description="Practice interviews with our AI interviewer to improve your skills and confidence."
      icon="video"
      comingSoon={false}
    />
  )
}
