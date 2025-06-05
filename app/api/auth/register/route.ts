import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 })
    }

    let db
    try {
      const connection = await connectToDatabase()
      db = connection.db
    } catch (dbError) {
      console.error("Database connection failed:", dbError)
      return NextResponse.json(
        {
          message: "Database connection failed. Please try again later.",
        },
        { status: 503 },
      )
    }

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)

    // Handle specific MongoDB errors
    if (error.name === "MongoNetworkError") {
      return NextResponse.json(
        {
          message: "Database connection error. Please try again.",
        },
        { status: 503 },
      )
    }

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 },
    )
  }
}
