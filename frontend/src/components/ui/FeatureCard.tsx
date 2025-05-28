"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color: string
  delay?: number
}

export default function FeatureCard({ title, description, icon: Icon, href, color, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay },
        },
      }}
    >
      <Link href={href}>
        <div className="h-full bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br", color)}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
