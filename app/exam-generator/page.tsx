"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileText, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface Exam {
  title: string
  questions: Question[]
}

export default function ExamGeneratorPage() {
  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [questionCount, setQuestionCount] = useState("10")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedExam, setGeneratedExam] = useState<Exam | null>(null)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!subject || !topic || !difficulty) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch("/api/exam-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          topic,
          difficulty,
          questionCount: Number.parseInt(questionCount),
        }),
      })

      if (response.ok) {
        const exam = await response.json()
        setGeneratedExam(exam)
        toast({
          title: "Success",
          description: "Exam generated successfully!",
        })
      } else {
        throw new Error("Failed to generate exam")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate exam. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadExam = () => {
    if (!generatedExam) return

    const examText = `${generatedExam.title}\n\n${generatedExam.questions
      .map(
        (q, i) =>
          `${i + 1}. ${q.question}\n${q.options.map((opt, j) => `   ${String.fromCharCode(65 + j)}. ${opt}`).join("\n")}\n\nCorrect Answer: ${String.fromCharCode(65 + q.correctAnswer)}\nExplanation: ${q.explanation}\n`,
      )
      .join("\n")}`

    const blob = new Blob([examText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${generatedExam.title.replace(/\s+/g, "_")}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
          <FileText className="h-6 w-6 text-green-600" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Exam Generator</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Generate Custom Exam</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="e.g., Mathematics, Physics, History"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Topic *</Label>
                <Textarea
                  id="topic"
                  placeholder="Describe the specific topic or chapter you want to focus on..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty Level *</Label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="questionCount">Number of Questions</Label>
                <Select value={questionCount} onValueChange={setQuestionCount}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 Questions</SelectItem>
                    <SelectItem value="10">10 Questions</SelectItem>
                    <SelectItem value="15">15 Questions</SelectItem>
                    <SelectItem value="20">20 Questions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleGenerate} className="w-full" disabled={isGenerating}>
                {isGenerating ? "Generating..." : "Generate Exam"}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Exam */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Generated Exam</CardTitle>
              {generatedExam && (
                <Button onClick={downloadExam} size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {!generatedExam ? (
                <div className="text-center text-gray-500 py-8">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Your generated exam will appear here</p>
                </div>
              ) : (
                <div className="space-y-6 max-h-[600px] overflow-y-auto">
                  <h3 className="text-lg font-semibold">{generatedExam.title}</h3>
                  {generatedExam.questions.map((question, index) => (
                    <div key={index} className="border-b pb-4">
                      <p className="font-medium mb-2">
                        {index + 1}. {question.question}
                      </p>
                      <div className="space-y-1 mb-2">
                        {question.options.map((option, optIndex) => (
                          <p
                            key={optIndex}
                            className={`text-sm pl-4 ${
                              optIndex === question.correctAnswer ? "text-green-600 font-medium" : "text-gray-600"
                            }`}
                          >
                            {String.fromCharCode(65 + optIndex)}. {option}
                          </p>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 italic">Explanation: {question.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
