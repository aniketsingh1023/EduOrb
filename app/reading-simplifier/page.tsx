"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, ArrowLeft, Copy, Download } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function ReadingSimplifierPage() {
  const [inputText, setInputText] = useState("")
  const [simplificationLevel, setSimplificationLevel] = useState("intermediate")
  const [isSimplifying, setIsSimplifying] = useState(false)
  const [simplifiedText, setSimplifiedText] = useState("")
  const { toast } = useToast()

  const handleSimplify = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to simplify.",
        variant: "destructive",
      })
      return
    }

    setIsSimplifying(true)
    try {
      const response = await fetch("/api/reading-simplifier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          level: simplificationLevel,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setSimplifiedText(data.simplifiedText)
        toast({
          title: "Success",
          description: "Text simplified successfully!",
        })
      } else {
        throw new Error("Failed to simplify text")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to simplify text. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSimplifying(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(simplifiedText)
    toast({
      title: "Copied",
      description: "Simplified text copied to clipboard!",
    })
  }

  const downloadText = () => {
    const blob = new Blob([simplifiedText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "simplified_text.txt"
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
          <Brain className="h-6 w-6 text-orange-600" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Reading Simplifier</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Original Text</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste your complex text here to simplify it..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={12}
                className="resize-none"
              />

              <div className="space-y-2">
                <label className="text-sm font-medium">Simplification Level</label>
                <Select value={simplificationLevel} onValueChange={setSimplificationLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elementary">Elementary (Grade 3-5)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (Grade 6-8)</SelectItem>
                    <SelectItem value="high-school">High School (Grade 9-12)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleSimplify} className="w-full" disabled={isSimplifying}>
                {isSimplifying ? "Simplifying..." : "Simplify Text"}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Simplified Text</CardTitle>
              {simplifiedText && (
                <div className="flex space-x-2">
                  <Button onClick={copyToClipboard} size="sm" variant="outline">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button onClick={downloadText} size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {!simplifiedText ? (
                <div className="text-center text-gray-500 py-12">
                  <Brain className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Your simplified text will appear here</p>
                  <p className="text-sm mt-2">Enter text and click simplify to get started</p>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="whitespace-pre-wrap text-gray-900 dark:text-white">{simplifiedText}</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Tips for Better Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Choose the Right Level</h4>
                <p className="text-blue-700 dark:text-blue-300">
                  Select the appropriate reading level based on your target audience or personal preference.
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Provide Context</h4>
                <p className="text-green-700 dark:text-green-300">
                  Include complete sentences and paragraphs for better context understanding.
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Review Output</h4>
                <p className="text-purple-700 dark:text-purple-300">
                  Always review the simplified text to ensure it maintains the original meaning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
