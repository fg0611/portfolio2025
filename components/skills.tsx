"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Cloud, PenToolIcon as Tool, Brain } from "lucide-react"
import type React from "react"
import { Button } from "@/components/ui/button"
import techs from "../public/data/techs.json"
import { useState, useEffect } from "react" // Importa useEffect

// Importa los componentes de Dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type TechName = keyof typeof techs
type TechInfo = (typeof techs)[TechName]

export function Skills() {
  const [selectedTech, setSelectedTech] = useState<TechName | null>(null)
  const [techInfo, setTechInfo] = useState<TechInfo | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false) // Nuevo estado para controlar el modal

  const handleTechClick = (techName: TechName) => {
    setSelectedTech(techName)
    setTechInfo(techs[techName])
    setIsDialogOpen(true) // Abre el modal al hacer clic
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedTech(null) // Opcional: limpiar la selección al cerrar
  }

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>
        <p className="text-center mb-12">
          As a skilled Full-Stack Developer, I specialize in creating robust and scalable web applications using a wide
          range of technologies, including JavaScript, TypeScript, Node.js, Python, and cloud-based solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechCard
            title="Frontend"
            icon={Code}
            technologies={["Next.js", "React", "TailwindCSS", "Qwik"]}
            onTechClick={handleTechClick}
          />
          <TechCard
            title="Backend"
            icon={Server}
            technologies={["Node.js", "TypeScript", "Fastify", "NestJS"]}
            onTechClick={handleTechClick}
          />
          <TechCard
            title="Database & Cloud"
            icon={Cloud}
            technologies={["PostgreSQL", "Firebase", "AWS", "Cloudflare", "GCP"]}
            onTechClick={handleTechClick}
          />
          <TechCard
            title="DevOps & Tools"
            icon={Tool}
            technologies={["Git", "GitHub", "GitLab CI/CD", "Kubernets", "Docker"]}
            onTechClick={handleTechClick}
          />
          <TechCard
            title="AI & Data"
            icon={Brain}
            technologies={["Python", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "LangChain", "LangGraph"]}
            onTechClick={handleTechClick}
          />
        </div>

        {/* El Dialog que ahora mostrará la información */}
        {techInfo && (
          <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader className="text-center">
                <img src={techInfo.imageUrl} alt={`${selectedTech} logo`} className="mx-auto h-16 w-16 mb-2" />
                <DialogTitle className="text-2xl font-bold">{selectedTech}</DialogTitle>
                <DialogDescription className="text-lg mt-2">{techInfo.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}

function TechCard({
  title,
  icon: Icon,
  technologies,
  onTechClick,
}: {
  title: string
  icon: React.ElementType
  technologies: TechName[]
  onTechClick: (techName: TechName) => void
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="h-6 w-6 mr-2 text-primary" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => onTechClick(tech)}
            >
              {tech}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}