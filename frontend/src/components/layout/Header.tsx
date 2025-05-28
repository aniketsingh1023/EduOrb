"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { ThemeToggle } from "@/src/components/ThemeToggle"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Dashboard", path: "/dashboard" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="font-bold text-xl">EduOrb</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex gap-3">
            <Link href="http://localhost:5000/login">
              <Button variant="outline" size="sm">Log in with Google</Button>
            </Link>
            <Link href="http://localhost:5000/login">
              <Button size="sm">Sign up with Google</Button>
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t py-4"
        >
          <div className="container flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link href="http://localhost:5000/login">
                <Button variant="outline" size="sm" className="w-full">Log in with Google</Button>
              </Link>
              <Link href="http://localhost:5000/login">
                <Button size="sm" className="w-full">Sign up with Google</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
