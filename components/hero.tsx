'use client'; // This line ensures the component is a Client Component

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 pt-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Francisco Garrido</h1>
      <h2 className="text-2xl md:text-3xl mb-6">Software Engineer</h2>
      <p className="text-center max-w-2xl mb-8 px-4">
        Passionate about engineering, creating solutions, UI/UX, data analysis, machine learning, AI, testing stuff. I
        like to be committed, responsible, respectful, serious & also have some fun while working on every project,
        every challenge. I'm always moved by love, thoughts, compassion, and music.
      </p>
      <div className="flex space-x-4 mb-8 px-2">
        <Button asChild>
          <Link href={process.env.GITHUB ?? ''} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        <Button asChild>
          <Link href={process.env.LKD ?? "https://linkedin.com"} target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
        </Button>
        <Button asChild>
          <Link href={`mailto:${process.env.EMAIL ?? "your.email@example.com"}`}>
            <Mail className="mr-2 h-4 w-4" /> Email
          </Link>
        </Button>
      </div>
      {/* <Button
        variant="outline"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        Learn More <ChevronDown className="ml-2 h-4 w-4" />
      </Button> */}
    </section>
  )
}

