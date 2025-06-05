"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, ArrowLeft, User, Briefcase, Target, BookOpen } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface CareerAdvice {
  careerPaths: Array<{
    title: string
    description: string
    requirements: string[]
    timeline: string
    salary: string
  }>
  skills: {
    current: string[]
    recommended: string[]
    priority: string[]
  }
  actionPlan: Array<{
    phase: string
    duration: string
    actions: string[]
  }>
  resources: Array<{
    type: string
    title: string
    description: string
  }>
}

export default function CareerAdvisorPage() {
  const [currentRole, setCurrentRole] = useState("")
  const [experience, setExperience] = useState("")
  const [interests, setInterests] = useState("")
  const [skills, setSkills] = useState("")
  const [goals, setGoals] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [advice, setAdvice] = useState<CareerAdvice | null>(null)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!currentRole || !experience || !interests) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch("/api/career-advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentRole,
          experience,
          interests,
          skills,
          goals,
        }),
      })

      if (response.ok) {
        const careerAdvice = await response.json()
        setAdvice(careerAdvice)
        toast({
          title: "Success",
          description: "Career advice generated successfully!",
        })
      } else {
        throw new Error("Failed to generate career advice")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate career advice. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <TrendingUp className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Career Path Advisor</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Career Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="currentRole" className="text-sm font-medium">
                  Current Role/Field *
                </label>
                <Input
                  id="currentRole"
                  placeholder="e.g., Software Developer, Student, Marketing"
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium">
                  Experience Level *
                </label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student/Fresh Graduate</SelectItem>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                    <SelectItem value="executive">Executive/Leadership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="interests" className="text-sm font-medium">
                  Interests & Passions *
                </label>
                <Textarea
                  id="interests"
                  placeholder="Describe what you're passionate about, what motivates you..."
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="skills" className="text-sm font-medium">
                  Current Skills
                </label>
                <Textarea
                  id="skills"
                  placeholder="List your technical and soft skills..."
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="goals" className="text-sm font-medium">
                  Career Goals
                </label>
                <Textarea
                  id="goals"
                  placeholder="What do you want to achieve in your career?"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  rows={3}
                />
              </div>

              <Button onClick={handleGenerate} className="w-full" disabled={isGenerating}>
                {isGenerating ? "Analyzing..." : "Get Career Advice"}
              </Button>
            </CardContent>
          </Card>

          {/* Career Advice Display */}
          <div className="lg:col-span-2 space-y-6">
            {!advice ? (
              <Card>
                <CardContent className="text-center text-gray-500 py-12">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Your personalized career advice will appear here</p>
                  <p className="text-sm mt-2">Fill out the assessment form to get started</p>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Career Paths */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Recommended Career Paths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {advice.careerPaths.map((path, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{path.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">{path.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Timeline:</span> {path.timeline}
                            </div>
                            <div>
                              <span className="font-medium">Salary Range:</span> {path.salary}
                            </div>
                            <div>
                              <span className="font-medium">Requirements:</span>
                              <ul className="list-disc list-inside mt-1">
                                {path.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Skills Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Skills Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-green-600">Current Strengths</h4>
                        <ul className="space-y-1">
                          {advice.skills.current.map((skill, index) => (
                            <li key={index} className="text-sm bg-green-50 dark:bg-green-900/20 p-2 rounded">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-blue-600">Recommended Skills</h4>
                        <ul className="space-y-1">
                          {advice.skills.recommended.map((skill, index) => (
                            <li key={index} className="text-sm bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-orange-600">Priority Learning</h4>
                        <ul className="space-y-1">
                          {advice.skills.priority.map((skill, index) => (
                            <li key={index} className="text-sm bg-orange-50 dark:bg-orange-900/20 p-2 rounded">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Plan */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Action Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {advice.actionPlan.map((phase, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold">{phase.phase}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Duration: {phase.duration}</p>
                          <ul className="list-disc list-inside space-y-1">
                            {phase.actions.map((action, i) => (
                              <li key={i} className="text-sm">
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Learning Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advice.resources.map((resource, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                              {resource.type}
                            </span>
                          </div>
                          <h4 className="font-medium mb-1">{resource.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
