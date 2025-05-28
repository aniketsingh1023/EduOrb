import Hero from "@/src/components/sections/Hero"
import Features from "@/src/components/sections/Features"
import Testimonials from "@/src/components/sections/Testimonials"
import CTASection from "@/src/components/sections/CTASection"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  )
}
