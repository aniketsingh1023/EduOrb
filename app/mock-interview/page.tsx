"use client"

import { useChat } from "ai/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mic, ArrowLeft, Play, Square } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function MockInterviewPage() {
  const [jobRole, setJobRole] = useState("")
  const [experience, setExperience] = useState("")
  const [company, setCompany] = useState("")
  const [isInterviewStarted, setIsInterviewStarted] = useState(false)
  const { toast } = useToast()

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/mock-interview",
    onFinish: () => {
      // Could add interview completion logic here
    },
  })

  const startInterview = () => {
    if (!jobRole || !experience) {
      toast({
        title: "Error",
        description: "Please fill in the job role and experience level.",
        variant: "destructive",
      })
      return
    }

    setIsInterviewStarted(true)
    setMessages([])

    // Send initial setup message
    const setupMessage = {
      id: "setup",
      role: "user" as const,
      content: `Start mock interview for ${jobRole} position with ${experience} experience level${company ? ` at ${company}` : ""}.`,
    }

    // Trigger the interview start
    fetch("/api/mock-interview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [setupMessage],
      }),
    })

    toast({
      title: "Interview Started",
      description: "Your mock interview session has begun. Good luck!",
    })
  }

  const endInterview = () => {
    setIsInterviewStarted(false)
    setMessages([])
    toast({
      title: "Interview Ended",
      description: "Thank you for practicing! Review your responses to improve.",
    })
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
          <Mic className="h-6 w-6 text-red-600" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Mock Interview Simulator</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {!isInterviewStarted ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Setup Your Mock Interview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="jobRole" className="text-sm font-medium">
                  Job Role *
                </label>
                <Input
                  id="jobRole"
                  placeholder="e.g., Software Engineer, Data Scientist, Product Manager"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium">
                  Experience Level *
                </label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                    <SelectItem value="lead">Lead/Manager Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Target Company (Optional)
                </label>
                <Input
                  id="company"
                  placeholder="e.g., Google, Microsoft, Startup"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <Button onClick={startInterview} className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Start Interview
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="h-[calc(100vh-200px)]">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Mock Interview - {jobRole}</CardTitle>
              <Button onClick={endInterview} variant="destructive" size="sm">
                <Square className="h-4 w-4 mr-2" />
                End Interview
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <ScrollArea className="flex-1 mb-4 p-4 border rounded-lg">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <Mic className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Your interview is starting...</p>
                    <p className="text-sm mt-2">The interviewer will ask you questions shortly.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.role === "user"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{message.content}</div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ScrollArea>

              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your answer here..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
