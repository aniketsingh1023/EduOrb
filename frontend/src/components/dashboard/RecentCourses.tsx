"use client"

import { motion } from "framer-motion"
import { Progress } from "@/src/components/ui/progress"

const courses = [
  {
    title: "Advanced JavaScript Concepts",
    category: "Programming",
    progress: 75,
    lastAccessed: "2 days ago",
  },
  {
    title: "Data Science Fundamentals",
    category: "Data Science",
    progress: 45,
    lastAccessed: "Yesterday",
  },
  {
    title: "UI/UX Design Principles",
    category: "Design",
    progress: 90,
    lastAccessed: "Today",
  },
]

export default function RecentCourses() {
  return (
    <motion.div
      className="bg-card border rounded-lg p-6 shadow-sm mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold mb-4">Recent Courses</h2>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.category}</p>
              </div>
              <span className="text-xs text-muted-foreground">{course.lastAccessed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={course.progress} className="h-2" />
              <span className="text-xs font-medium">{course.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
