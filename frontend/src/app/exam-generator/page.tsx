import type { Metadata } from "next"
import FeaturePlaceholder from "@/src/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "AI Exam Generator | EduOrb",
  description: "Generate custom exams based on your learning goals",
}

export default function ExamGenerator() {
  return (
    <FeaturePlaceholder
      title="AI Exam Generator"
      description="Generate custom exams and quizzes based on your learning materials and goals."
      icon="file-text"
      comingSoon={false}
    />
  )
}
