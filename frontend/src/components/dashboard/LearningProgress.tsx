"use client"

import { motion } from "framer-motion"
import { Progress } from "@/src/components/ui/progress"

const skills = [
  {
    name: "JavaScript",
    progress: 85,
    level: "Advanced",
  },
  {
    name: "React",
    progress: 70,
    level: "Intermediate",
  },
  {
    name: "Data Analysis",
    progress: 60,
    level: "Intermediate",
  },
  {
    name: "UI/UX Design",
    progress: 40,
    level: "Beginner",
  },
]

export default function LearningProgress() {
  return (
    <motion.div
      className="bg-card border rounded-lg p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Skill Progress</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}</span>
            </div>
            <Progress value={skill.progress} className="h-2" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
