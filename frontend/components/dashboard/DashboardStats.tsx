"use client"

import { motion } from "framer-motion"
import { Clock, Award, BookOpen, BarChart } from "lucide-react"

const stats = [
  {
    label: "Learning Hours",
    value: "24",
    icon: Clock,
    color: "bg-blue-500",
  },
  {
    label: "Courses Completed",
    value: "5",
    icon: Award,
    color: "bg-purple-500",
  },
  {
    label: "Skills Acquired",
    value: "12",
    icon: BookOpen,
    color: "bg-emerald-500",
  },
  {
    label: "Progress This Week",
    value: "+15%",
    icon: BarChart,
    color: "bg-amber-500",
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon

        return (
          <motion.div
            key={index}
            className="bg-card border rounded-lg p-4 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className={`${stat.color} rounded-full p-2 text-white`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
