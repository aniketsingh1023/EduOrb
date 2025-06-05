import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { db } = await connectToDatabase()

    const user = await db.collection("users").findOne({ email: session.user.email }, { projection: { password: 0 } })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    if (!user.onboardingCompleted) {
      return NextResponse.json({ message: "Onboarding not completed" }, { status: 404 })
    }

    // Mock stats for demo - in production, you'd calculate these from actual usage data
    const stats = {
      totalSessions: Math.floor(Math.random() * 50) + 10,
      hoursLearned: Math.floor(Math.random() * 100) + 20,
      questionsAsked: Math.floor(Math.random() * 200) + 50,
      examsGenerated: Math.floor(Math.random() * 20) + 5,
      currentStreak: Math.floor(Math.random() * 30) + 1,
      weeklyProgress: Math.floor(Math.random() * 100) + 1,
    }

    return NextResponse.json({
      profile: user.profile,
      stats,
    })
  } catch (error) {
    console.error("Profile fetch error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
