import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Testimonials from "@/components/sections/Testimonials"
import CTASection from "@/components/sections/CTASection"

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
