import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Cloud, PenToolIcon as Tool, Brain } from "lucide-react"
import type React from "react"
import { Button } from "@/components/ui/button"

export function Skills() {
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
          <TechCard title="Frontend" icon={Code} technologies={["Next.js", "React", "TailwindCSS", "Qwik"]} />
          <TechCard title="Backend" icon={Server} technologies={["Node.js", "TypeScript", "Fastify", "NestJS"]} />
          <TechCard
            title="Database & Cloud"
            icon={Cloud}
            technologies={["PostgreSQL", "Firebase", "AWS", "Cloudflare", "GCP"]}
          />
          <TechCard
            title="DevOps & Tools"
            icon={Tool}
            technologies={["Git", "GitHub", "GitLab CI/CD", "Kubernetes", "Docker"]}
          />
          <TechCard title="AI & Data" icon={Brain} technologies={["Machine Learning", "Python", "Data Analysis"]} />
        </div>
      </div>
    </section>
  )
}

function TechCard({
  title,
  icon: Icon,
  technologies,
}: { title: string; icon: React.ElementType; technologies: string[] }) {
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
            >
              {tech}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

