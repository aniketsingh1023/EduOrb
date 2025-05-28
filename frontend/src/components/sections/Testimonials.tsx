"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "EduOrb's AI interview practice helped me land my dream job. The feedback was incredibly detailed and helped me improve my responses.",
    author: "Sarah Johnson",
    role: "Software Engineer",
    avatar: "/professional-woman-portrait.png",
  },
  {
    quote:
      "The resume analyzer gave me specific suggestions that made my resume stand out. I received more interview calls after making those changes.",
    author: "Michael Chen",
    role: "Marketing Specialist",
    avatar: "/professional-man-portrait.png",
  },
  {
    quote:
      "The concept mind mapping feature helped me understand complex topics that I was struggling with for months. It's like having a personal tutor.",
    author: "Priya Patel",
    role: "Medical Student",
    avatar: "/indian-professional-woman.png",
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thousands of learners have accelerated their careers with EduOrb's AI-powered learning tools.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
