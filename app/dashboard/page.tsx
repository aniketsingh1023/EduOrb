"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    } else if (status === "authenticated") {
      // Check if user has completed onboarding
      checkOnboardingStatus()
    }
  }, [status, router])

  const checkOnboardingStatus = async () => {
    try {
      const response = await fetch("/api/user/profile")
      if (response.status === 404) {
        // User hasn't completed onboarding
        router.push("/onboarding")
      } else if (response.ok) {
        // User has completed onboarding, redirect to student dashboard
        router.push("/student-dashboard")
      }
    } catch (error) {
      console.error("Failed to check onboarding status:", error)
      // Default to onboarding if there's an error
      router.push("/onboarding")
    }
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return null
}
