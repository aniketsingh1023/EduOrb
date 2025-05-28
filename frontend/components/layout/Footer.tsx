import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="font-bold text-xl">EduOrb</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-Powered LMS for Career & Skill Development. Accelerate your learning journey with cutting-edge AI
              tools.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mock-interview" className="text-muted-foreground hover:text-primary">
                  AI Interview Practice
                </Link>
              </li>
              <li>
                <Link href="/resume-analyzer" className="text-muted-foreground hover:text-primary">
                  Resume Analyzer
                </Link>
              </li>
              <li>
                <Link href="/job-recommendations" className="text-muted-foreground hover:text-primary">
                  Job Recommendations
                </Link>
              </li>
              <li>
                <Link href="/career-advisor" className="text-muted-foreground hover:text-primary">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link href="/doubt-solver" className="text-muted-foreground hover:text-primary">
                  Doubt Solver
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EduOrb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
