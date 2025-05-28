import type { Metadata } from "next"
import FeaturePlaceholder from "@/src/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "AI Resume Analyzer | EduOrb",
  description: "Get feedback on your resume from our AI analyzer",
}

export default function ResumeAnalyzer() {
  return (
    <FeaturePlaceholder
      title="AI Resume Analyzer"
      description="Get detailed feedback and improvement suggestions for your resume."
      icon="file-check"
      comingSoon={false}
    />
  )
}
