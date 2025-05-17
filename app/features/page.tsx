import type { Metadata } from "next"
import FeaturesList from "@/components/features/FeaturesList"
import FeatureHero from "@/components/features/FeatureHero"

export const metadata: Metadata = {
  title: "Features | EduOrb",
  description: "Explore all the AI-powered features of EduOrb",
}

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FeatureHero />
      <FeaturesList />
    </div>
  )
}
