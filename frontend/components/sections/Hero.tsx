"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 opacity-10 dark:opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(120,0,198,0.2),transparent_30%)]" />
      </div>

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ y, opacity }}>
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Accelerate Your Career With AI-Powered Learning
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                EduOrb combines cutting-edge AI with personalized learning to help you master new skills, prepare for
                interviews, and advance your career.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">Explore Features</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-medium text-foreground">2,000+</span> learners already using EduOrb
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/ai-student-assistant.png"
              alt="Student with AI assistant"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
