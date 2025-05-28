"use client"

import { motion } from "framer-motion"

export default function FeatureHero() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">AI-Powered Features</h1>
        <p className="text-xl text-muted-foreground">
          Explore all the cutting-edge AI tools that EduOrb offers to accelerate your learning and career development.
        </p>
      </motion.div>
    </div>
  )
}
