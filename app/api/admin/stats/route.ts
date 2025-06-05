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

    // Get actual user count
    const totalUsers = await db.collection("users").countDocuments()

    // Mock stats for demo - in production, you'd calculate these from actual data
    const stats = {
      totalUsers,
      activeUsers: Math.floor(totalUsers * 0.7),
      totalSessions: Math.floor(totalUsers * 25),
      totalQuestions: Math.floor(totalUsers * 150),
      totalExams: Math.floor(totalUsers * 8),
      avgSessionTime: Math.floor(Math.random() * 30) + 15,
    }

    return NextResponse.json({ stats })
  } catch (error) {
    console.error("Admin stats fetch error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
