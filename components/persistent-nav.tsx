"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, GraduationCap, Mail } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { href: "#hero", icon: Home, label: "Home" },
  { href: "#skills", icon: User, label: "Skills" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#education", icon: GraduationCap, label: "Education" },
  { href: "#contact", icon: Mail, label: "Contact" },
]

export function PersistentNav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 z-50">
      <ul className="flex items-center space-x-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Button variant={activeSection === item.href.slice(1) ? "default" : "ghost"} size="icon" asChild>
              <a href={item.href} aria-label={item.label}>
                <item.icon className="h-5 w-5" />
              </a>
            </Button>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}

