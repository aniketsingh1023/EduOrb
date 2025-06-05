"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, User, GraduationCap, Target, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface OnboardingData {
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

export default function OnboardingPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState<OnboardingData>({
    personalInfo: { age: "", location: "", occupation: "" },
    education: { level: "", field: "", institution: "", gpa: "" },
    goals: { primaryGoal: "", subjects: [], timeline: "", description: "" },
    preferences: { learningStyle: "", difficulty: "", timeCommitment: "", features: [] },
  })

  const steps = [
    { title: "Personal Info", icon: User, description: "Tell us about yourself" },
    { title: "Education", icon: GraduationCap, description: "Your academic background" },
    { title: "Goals", icon: Target, description: "What you want to achieve" },
    { title: "Preferences", icon: Sparkles, description: "How you like to learn" },
  ]

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "English",
    "History",
    "Geography",
    "Economics",
    "Psychology",
    "Art",
    "Music",
    "Languages",
    "Philosophy",
    "Engineering",
  ]

  const features = [
    "Doubt Solver Chat",
    "Exam Generator",
    "Mind Map Creator",
    "Reading Simplifier",
    "Mock Interview",
    "Career Advisor",
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Welcome to Eduorb!",
          description: "Your profile has been set up successfully.",
        })
        router.push("/student-dashboard")
      } else {
        throw new Error("Failed to save onboarding data")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const updateData = (section: keyof OnboardingData, field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  const currentStepIcon = steps[currentStep].icon
  const currentStepTitle = steps[currentStep].title
  const currentStepDescription = steps[currentStep].description

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Welcome to Eduorb, {session?.user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Let's personalize your learning experience</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index <= currentStep
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  }`}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                      index < currentStep
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </motion.div>

        {/* Step Content */}
        <Card className="glass-effect border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <currentStepIcon className="h-6 w-6 text-blue-600" />
              <span>{currentStepTitle}</span>
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">{currentStepDescription}</p>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 0: Personal Info */}
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Your age"
                          value={data.personalInfo.age}
                          onChange={(e) => updateData("personalInfo", "age", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="City, Country"
                          value={data.personalInfo.location}
                          onChange={(e) => updateData("personalInfo", "location", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Current Occupation/Status</Label>
                      <Select
                        value={data.personalInfo.occupation}
                        onValueChange={(value) => updateData("personalInfo", "occupation", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="working">Working Professional</SelectItem>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                          <SelectItem value="freelancer">Freelancer</SelectItem>
                          <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 1: Education */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="level">Education Level</Label>
                        <Select
                          value={data.education.level}
                          onValueChange={(value) => updateData("education", "level", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="postgraduate">Postgraduate</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="field">Field of Study</Label>
                        <Input
                          id="field"
                          placeholder="e.g., Computer Science, Biology"
                          value={data.education.field}
                          onChange={(e) => updateData("education", "field", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution</Label>
                        <Input
                          id="institution"
                          placeholder="School/University name"
                          value={data.education.institution}
                          onChange={(e) => updateData("education", "institution", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gpa">GPA/Grade (Optional)</Label>
                        <Input
                          id="gpa"
                          placeholder="e.g., 3.8, A, 85%"
                          value={data.education.gpa}
                          onChange={(e) => updateData("education", "gpa", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Goals */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryGoal">Primary Learning Goal</Label>
                      <Select
                        value={data.goals.primaryGoal}
                        onValueChange={(value) => updateData("goals", "primaryGoal", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="What's your main goal?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exam-prep">Exam Preparation</SelectItem>
                          <SelectItem value="skill-development">Skill Development</SelectItem>
                          <SelectItem value="career-change">Career Change</SelectItem>
                          <SelectItem value="academic-improvement">Academic Improvement</SelectItem>
                          <SelectItem value="personal-interest">Personal Interest</SelectItem>
                          <SelectItem value="certification">Certification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Subjects of Interest</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                        {subjects.map((subject) => (
                          <div key={subject} className="flex items-center space-x-2">
                            <Checkbox
                              id={subject}
                              checked={data.goals.subjects.includes(subject)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  updateData("goals", "subjects", [...data.goals.subjects, subject])
                                } else {
                                  updateData(
                                    "goals",
                                    "subjects",
                                    data.goals.subjects.filter((s) => s !== subject),
                                  )
                                }
                              }}
                            />
                            <Label htmlFor={subject} className="text-sm">
                              {subject}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select
                          value={data.goals.timeline}
                          onValueChange={(value) => updateData("goals", "timeline", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="When do you want to achieve this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="3-months">3 Months</SelectItem>
                            <SelectItem value="6-months">6 Months</SelectItem>
                            <SelectItem value="1-year">1 Year</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Additional Details (Optional)</Label>
                      <Textarea
                        id="description"
                        placeholder="Tell us more about your goals..."
                        value={data.goals.description}
                        onChange={(e) => updateData("goals", "description", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="learningStyle">Learning Style</Label>
                        <Select
                          value={data.preferences.learningStyle}
                          onValueChange={(value) => updateData("preferences", "learningStyle", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="How do you learn best?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="visual">Visual (diagrams, charts)</SelectItem>
                            <SelectItem value="auditory">Auditory (listening, discussion)</SelectItem>
                            <SelectItem value="kinesthetic">Kinesthetic (hands-on)</SelectItem>
                            <SelectItem value="reading">Reading/Writing</SelectItem>
                            <SelectItem value="mixed">Mixed Approach</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="difficulty">Preferred Difficulty</Label>
                        <Select
                          value={data.preferences.difficulty}
                          onValueChange={(value) => updateData("preferences", "difficulty", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose difficulty level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="adaptive">Adaptive (AI decides)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeCommitment">Time Commitment</Label>
                      <Select
                        value={data.preferences.timeCommitment}
                        onValueChange={(value) => updateData("preferences", "timeCommitment", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How much time can you dedicate?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15-30min">15-30 minutes/day</SelectItem>
                          <SelectItem value="30-60min">30-60 minutes/day</SelectItem>
                          <SelectItem value="1-2hours">1-2 hours/day</SelectItem>
                          <SelectItem value="2plus-hours">2+ hours/day</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Features</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={data.preferences.features.includes(feature)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  updateData("preferences", "features", [...data.preferences.features, feature])
                                } else {
                                  updateData(
                                    "preferences",
                                    "features",
                                    data.preferences.features.filter((f) => f !== feature),
                                  )
                                }
                              }}
                            />
                            <Label htmlFor={feature} className="text-sm">
                              {feature}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Setting up...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Setup</span>
                      <Sparkles className="h-4 w-4" />
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
