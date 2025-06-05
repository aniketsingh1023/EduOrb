"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  MessageCircle,
  FileText,
  Map,
  Mic,
  TrendingUp,
  User,
  LogOut,
  Clock,
  Trophy,
  Target,
  Zap,
  BookOpen,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { motion } from "framer-motion"

interface UserProfile {
  personalInfo: {
    age: string
    location: string
    occupation: string
  }
  education: {
    level: string
    field: string
    institution: string
    gpa: string
  }
  goals: {
    primaryGoal: string
    subjects: string[]
    timeline: string
    description: string
  }
  preferences: {
    learningStyle: string
    difficulty: string
    timeCommitment: string
    features: string[]
  }
}

interface DashboardStats {
  totalSessions: number
  hoursLearned: number
  questionsAsked: number
  examsGenerated: number
  currentStreak: number
  weeklyProgress: number
}

export default function StudentDashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalSessions: 0,
    hoursLearned: 0,
    questionsAsked: 0,
    examsGenerated: 0,
    currentStreak: 0,
    weeklyProgress: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    } else if (status === "authenticated") {
      fetchUserProfile()
    }
  }, [status, router])

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("/api/user/profile")
      if (response.ok) {
        const data = await response.json()
        setProfile(data.profile)
        setStats(data.stats || stats)
      } else if (response.status === 404) {
        // User hasn't completed onboarding
        router.push("/onboarding")
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!session || !profile) {
    return null
  }

  const tools = [
    {
      icon: MessageCircle,
      title: "Doubt Solver Chat",
      description: "Get instant answers to your questions",
      href: "/doubt-solver",
      color: "from-blue-500 to-cyan-500",
      usage: stats.questionsAsked,
      usageLabel: "questions asked",
    },
    {
      icon: FileText,
      title: "Exam Generator",
      description: "Create practice tests",
      href: "/exam-generator",
      color: "from-green-500 to-emerald-500",
      usage: stats.examsGenerated,
      usageLabel: "exams generated",
    },
    {
      icon: Map,
      title: "Mind Map Creator",
      description: "Visualize complex topics",
      href: "/mind-map",
      color: "from-purple-500 to-violet-500",
      usage: 12,
      usageLabel: "mind maps created",
    },
    {
      icon: Brain,
      title: "Reading Simplifier",
      description: "Simplify complex texts",
      href: "/reading-simplifier",
      color: "from-orange-500 to-red-500",
      usage: 8,
      usageLabel: "texts simplified",
    },
    {
      icon: Mic,
      title: "Mock Interview",
      description: "Practice interviews",
      href: "/mock-interview",
      color: "from-pink-500 to-rose-500",
      usage: 3,
      usageLabel: "interviews completed",
    },
    {
      icon: TrendingUp,
      title: "Career Advisor",
      description: "Get career guidance",
      href: "/career-advisor",
      color: "from-indigo-500 to-blue-500",
      usage: 1,
      usageLabel: "assessments taken",
    },
  ]

  const quickStats = [
    { icon: Clock, label: "Hours Learned", value: stats.hoursLearned, color: "text-blue-600" },
    { icon: Zap, label: "Current Streak", value: `${stats.currentStreak} days`, color: "text-orange-600" },
    { icon: Trophy, label: "Total Sessions", value: stats.totalSessions, color: "text-purple-600" },
    { icon: Target, label: "Weekly Goal", value: `${stats.weeklyProgress}%`, color: "text-green-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 glass-effect border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Brain className="h-8 w-8 text-blue-600 animate-pulse-glow" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eduorb
            </h1>
          </motion.div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">{session.user?.name}</span>
            </div>
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                Admin Panel
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => signOut({ callbackUrl: "/" })}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back, {session.user?.name?.split(" ")[0]}! 👋
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Ready to continue your learning journey? Here's your personalized dashboard.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <Card className="glass-effect border-0 shadow-lg mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {profile.education.level} in {profile.education.field}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Primary Goal</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {profile.goals.primaryGoal.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Learning Style</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {profile.preferences.learningStyle.charAt(0).toUpperCase() +
                      profile.preferences.learningStyle.slice(1)}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Timeline</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{profile.goals.timeline.replace("-", " ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {quickStats.map((stat, index) => (
            <Card key={index} className="glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Subject Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="glass-effect border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Your Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profile.goals.subjects.slice(0, 3).map((subject, index) => {
                  const progress = Math.floor(Math.random() * 100) // Mock progress
                  return (
                    <div key={subject} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-white">{subject}</span>
                        <Badge variant="secondary">{progress}%</Badge>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your AI Learning Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {tool.title}
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {tool.usage} {tool.usageLabel}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link href={tool.href}>
                      <Button
                        className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                        variant="outline"
                      >
                        Launch Tool
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="glass-effect border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-green-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Asked 3 questions about {profile.goals.subjects[0]}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Generated practice exam for {profile.education.field}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Map className="h-5 w-5 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Created mind map for complex topic
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
