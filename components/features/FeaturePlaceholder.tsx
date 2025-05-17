"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface FeaturePlaceholderProps {
  title: string
  description: string
  icon: string
  comingSoon?: boolean
}

export default function FeaturePlaceholder({ title, description, icon, comingSoon = false }: FeaturePlaceholderProps) {
  // Dynamically get the icon from Lucide
  const Icon =
    (LucideIcons as Record<string, LucideIcon>)[icon.charAt(0).toUpperCase() + icon.slice(1)] || LucideIcons.Sparkles

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/features">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Features
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </motion.div>

        {comingSoon ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're working hard to bring this feature to you. Sign up to be notified when it's ready.
            </p>
            <Button size="lg">Get Notified</Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">Feature Preview</h2>
            <p className="text-muted-foreground mb-6">
              This is a placeholder for the {title} feature. In the full implementation, you would see the actual
              feature interface here.
            </p>
            <div className="flex justify-center">
              <Button size="lg">Try Demo</Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
