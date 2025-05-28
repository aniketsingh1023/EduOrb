"use client"

import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Bell, Settings } from "lucide-react"

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Here's an overview of your learning progress and recommendations.</p>
      </motion.div>

      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}
