"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Map, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface MindMapNode {
  id: string
  text: string
  children: MindMapNode[]
  level: number
}

interface MindMap {
  title: string
  rootNode: MindMapNode
}

export default function MindMapPage() {
  const [topic, setTopic] = useState("")
  const [context, setContext] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [mindMap, setMindMap] = useState<MindMap | null>(null)
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic for the mind map.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch("/api/mind-map", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, context }),
      })

      if (response.ok) {
        const generatedMindMap = await response.json()
        setMindMap(generatedMindMap)
        toast({
          title: "Success",
          description: "Mind map generated successfully!",
        })
      } else {
        throw new Error("Failed to generate mind map")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate mind map. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const renderNode = (node: MindMapNode, isRoot = false) => {
    const colors = [
      "bg-blue-100 border-blue-300 text-blue-800",
      "bg-green-100 border-green-300 text-green-800",
      "bg-purple-100 border-purple-300 text-purple-800",
      "bg-orange-100 border-orange-300 text-orange-800",
      "bg-pink-100 border-pink-300 text-pink-800",
    ]

    const colorClass = colors[node.level % colors.length]

    return (
      <div key={node.id} className="flex flex-col items-center">
        <div
          className={`p-3 rounded-lg border-2 text-center max-w-xs ${
            isRoot ? "bg-indigo-200 border-indigo-400 text-indigo-900 font-bold text-lg" : colorClass
          }`}
        >
          {node.text}
        </div>
        {node.children.length > 0 && (
          <div className="mt-4">
            <div className="w-px h-4 bg-gray-300 mx-auto"></div>
            <div className="flex justify-center space-x-8">
              {node.children.map((child) => (
                <div key={child.id} className="relative">
                  <div className="w-px h-4 bg-gray-300 mx-auto"></div>
                  {renderNode(child)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
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
          <Map className="h-6 w-6 text-purple-600" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Mind Map Creator</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Create Mind Map</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="topic" className="text-sm font-medium">
                  Topic *
                </label>
                <Input
                  id="topic"
                  placeholder="e.g., Photosynthesis, World War II, Machine Learning"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="context" className="text-sm font-medium">
                  Additional Context (Optional)
                </label>
                <Textarea
                  id="context"
                  placeholder="Provide any specific focus areas or context for the mind map..."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows={4}
                />
              </div>

              <Button onClick={handleGenerate} className="w-full" disabled={isGenerating}>
                {isGenerating ? "Generating..." : "Generate Mind Map"}
              </Button>
            </CardContent>
          </Card>

          {/* Mind Map Display */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Generated Mind Map</CardTitle>
            </CardHeader>
            <CardContent>
              {!mindMap ? (
                <div className="text-center text-gray-500 py-12">
                  <Map className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Your mind map will appear here</p>
                  <p className="text-sm mt-2">Enter a topic and click generate to create a visual mind map</p>
                </div>
              ) : (
                <div className="overflow-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">{mindMap.title}</h3>
                  <div className="flex justify-center">{renderNode(mindMap.rootNode, true)}</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
