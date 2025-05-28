"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Video, FileText, Compass, FileCheck, Network, BookOpen, HelpCircle, Briefcase, Brain } from "lucide-react"
import FeatureCard from "@/components/ui/FeatureCard"

const features = [
  {
    title: "AI Interview Practice",
    description: "Practice interviews with our AI interviewer to improve your skills and confidence.",
    icon: Video,
    href: "/mock-interview",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Resume Analyzer",
    description: "Get detailed feedback and improvement suggestions for your resume.",
    icon: FileCheck,
    href: "/resume-analyzer",
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Smart Job Recommendations",
    description: "Get personalized job recommendations based on your skills and goals.",
    icon: Briefcase,
    href: "/job-recommendations",
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "Career & Skill Guidance",
    description: "Get personalized career guidance and skill development plans.",
    icon: Compass,
    href: "/career-advisor",
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Multilingual Doubt Solver",
    description: "Get answers to your questions in multiple languages, anytime.",
    icon: HelpCircle,
    href: "/doubt-solver",
    color: "from-rose-500 to-red-400",
  },
  {
    title: "Concept Mind Mapping",
    description: "Create visual mind maps to better understand complex concepts.",
    icon: Network,
    href: "/concept-mapping",
    color: "from-indigo-500 to-blue-400",
  },
  {
    title: "Exam Generator",
    description: "Generate custom exams and quizzes based on your learning materials.",
    icon: FileText,
    href: "/exam-generator",
    color: "from-violet-500 to-purple-400",
  },
  {
    title: "Reading Simplifier + Audio",
    description: "Simplify complex texts and convert them to audio explanations.",
    icon: BookOpen,
    href: "/reading-simplifier",
    color: "from-teal-500 to-emerald-400",
  },
  {
    title: "Mock Interview",
    description: "Practice interviews with our AI interviewer to improve your skills.",
    icon: Brain,
    href: "/mock-interview",
    color: "from-fuchsia-500 to-pink-400",
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Features to Accelerate Your Career
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            EduOrb combines cutting-edge AI with personalized learning to help you master new skills and advance your
            career.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
