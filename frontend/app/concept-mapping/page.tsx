import type { Metadata } from "next"
import FeaturePlaceholder from "@/components/features/FeaturePlaceholder"

export const metadata: Metadata = {
  title: "Concept Mind Mapping | EduOrb",
  description: "Create visual mind maps of complex concepts",
}

export default function ConceptMapping() {
  return (
    <FeaturePlaceholder
      title="Concept Mind Mapping"
      description="Create visual mind maps to better understand and remember complex concepts."
      icon="network"
      comingSoon={true}
    />
  )
}
