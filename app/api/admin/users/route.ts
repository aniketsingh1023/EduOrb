import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // In production, you'd check if the user has admin role
    // For demo purposes, we'll allow any authenticated user

    const { db } = await connectToDatabase()

    const users = await db
      .collection("users")
      .find(
        {},
        {
          projection: {
            password: 0,
            name: 1,
            email: 1,
            createdAt: 1,
            onboardingCompleted: 1,
          },
        },
      )
      .toArray()

    // Mock additional data for demo
    const usersWithStats = users.map((user) => ({
      ...user,
      lastActive: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      totalSessions: Math.floor(Math.random() * 50) + 1,
      hoursLearned: Math.floor(Math.random() * 100) + 1,
      status: Math.random() > 0.3 ? "active" : "inactive",
    }))

    return NextResponse.json({ users: usersWithStats })
  } catch (error) {
    console.error("Admin users fetch error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
