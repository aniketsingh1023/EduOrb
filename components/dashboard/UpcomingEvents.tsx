"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const events = [
  {
    title: "Mock Interview Session",
    date: "May 20, 2025",
    time: "2:00 PM - 3:00 PM",
    type: "Interview Practice",
  },
  {
    title: "Resume Review Workshop",
    date: "May 22, 2025",
    time: "11:00 AM - 12:30 PM",
    type: "Workshop",
  },
  {
    title: "Career Guidance Session",
    date: "May 25, 2025",
    time: "4:00 PM - 5:00 PM",
    type: "Mentoring",
  },
]

export default function UpcomingEvents() {
  return (
    <motion.div
      className="bg-card border rounded-lg p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
            <h3 className="font-medium">{event.title}</h3>
            <p className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full inline-block mt-1">
              {event.type}
            </p>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
