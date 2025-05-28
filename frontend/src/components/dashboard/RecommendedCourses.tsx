"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"

const courses = [
  {
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Sarah Chen",
    level: "Intermediate",
    duration: "8 weeks",
    image: "/machine-learning-course-thumbnail.png",
  },
  {
    title: "React Advanced Patterns",
    instructor: "Michael Johnson",
    level: "Advanced",
    duration: "6 weeks",
    image: "/placeholder-wmetl.png",
  },
  {
    title: "Product Management Essentials",
    instructor: "Emily Rodriguez",
    level: "Beginner",
    duration: "4 weeks",
    image: "/placeholder.svg?height=100&width=180&query=product management course thumbnail",
  },
]

export default function RecommendedCourses() {
  return (
    <motion.div
      className="bg-card border rounded-lg p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recommended For You</h2>
        <Button variant="link" size="sm" className="text-primary">
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
            <div className="relative h-[80px] w-[120px] rounded-md overflow-hidden flex-shrink-0">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{course.title}</h3>
              <p className="text-sm text-muted-foreground">{course.instructor}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{course.level}</span>
                <span className="text-xs text-muted-foreground">{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
