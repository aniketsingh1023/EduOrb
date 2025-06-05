"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageCircle, FileText, Map, Mic, TrendingUp, Sparkles, Users, Award, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const features = [
    {
      icon: MessageCircle,
      title: "Doubt Solver Chat",
      description: "Get instant answers to your academic questions with AI-powered explanations",
      href: "/doubt-solver",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Exam Generator",
      description: "Create personalized practice tests and quizzes for any subject",
      href: "/exam-generator",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Map,
      title: "Mind Map Creator",
      description: "Visualize complex topics with AI-generated mind maps",
      href: "/mind-map",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Brain,
      title: "Reading Simplifier",
      description: "Simplify complex texts and documents for better understanding",
      href: "/reading-simplifier",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Mic,
      title: "Mock Interview",
      description: "Practice interviews with AI-powered simulation and feedback",
      href: "/mock-interview",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Career Path Advisor",
      description: "Get personalized career guidance based on your skills and interests",
      href: "/career-advisor",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const stats = [
    { icon: Users, label: "Active Students", value: "10,000+" },
    { icon: Brain, label: "AI Interactions", value: "1M+" },
    { icon: Award, label: "Success Rate", value: "95%" },
    { icon: Zap, label: "Response Time", value: "<2s" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 glass-effect border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Brain className="h-8 w-8 text-blue-600 animate-pulse-glow" />
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eduorb
            </h1>
          </motion.div>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/auth/signin">
              <Button variant="ghost" className="hover:bg-white/20">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Transform Your Learning
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">with AI</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eduorb combines cutting-edge AI technology with educational expertise to provide personalized learning
            experiences that adapt to your unique needs and accelerate your academic success.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transform transition-all duration-300"
              >
                Start Learning Now
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass-effect rounded-2xl p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI-Powered Learning Tools</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive suite of AI tools designed to enhance every aspect of your learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <CardHeader className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={feature.href}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      Try Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Learning?</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using AI to accelerate their academic success
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl"
              >
                Start Your Journey
                <Brain className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
