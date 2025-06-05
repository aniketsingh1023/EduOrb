import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const onboardingData = await request.json()
    const { db } = await connectToDatabase()

    // Update user with onboarding data
    const result = await db.collection("users").updateOne(
      { email: session.user.email },
      {
        $set: {
          profile: onboardingData,
          onboardingCompleted: true,
          updatedAt: new Date(),
        },
      },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Onboarding completed successfully" }, { status: 200 })
  } catch (error) {
    console.error("Onboarding error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
