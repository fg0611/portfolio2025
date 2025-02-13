"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Briefcase, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    company: "Flux QR",
    location: "Remote - Mexico City, Mexico",
    period: "Oct 2021 - Present",
    title: "Full Stack Developer",
    responsibilities: [
      "Development of features and fixes to the company's API using node.js, fastify, 3rd party SDKs, APIs and other techs.",
      "Development and maintenance of several services based on Gatsby, Next and their newest versions using Qwik framework.",
      "Development, maintenance and continuous addition of new features to a payments terminal using google's Flutter framework and related pub libraries.",
      "Implementation and customization of cloud services such as AWS (cloudfront, cloud formation, s3, lambda, sns, ses and others), Cloudflare (workers, hono, d1 and others), Firebase (storage, analytics, crashlytics, hosting).",
      "For version control git, repository handling & CI/CD on gitlab, cloudflare and kubernetes.",
    ],
  },
  {
    company: "Jemersoft",
    location: "Córdoba City, Argentina",
    period: "Dec 2021 - Nov 2022",
    title: "Full Stack Developer",
    responsibilities: [
      "Development, Deployment and Maintenance of two CMS for recruitment and monitoring of personnel and their two related PWAs using.",
      "UX/UI and Frontend: Figma, Jhipster (React), Redux, others. For backend: Jhipster (NodeJS, Typeorm, PostgreSql, Nest), other techs & libs.",
      "Versioning, deployments and storage: Bitbucket, Kubernetes, Azure.",
    ],
  },
  {
    company: "Spark Solutions",
    location: "Buenos Aires, Arg.",
    period: "Jun 2021 - Sept 2021",
    title: "Javascript Developer",
    responsibilities: [
      "Web Development of two Custom CMS platforms using React, Hooks, Redux, Firebase (storage, functions, auth, hosting), Google Maps API (services).",
    ],
  },
  {
    company: "Public Services Ministry",
    location: "Córdoba, Arg.",
    period: "Apr 2019 - May 2021",
    title: "Data and Budget Analyst",
    responsibilities: [
      "Tracked progress and variations of water works.",
      "Executed ETL jobs, custom reports & dashboards.",
      "The stack: MS Excel, MS Power BI, MS Project, SQL, Pentaho.",
    ],
  },
]

export function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: (typeof experiences)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          <Briefcase className="h-6 w-6 mr-2 text-primary" />
          {experience.company}
        </CardTitle>
        <div className="space-y-2 mt-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-secondary" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-secondary" />
            <span>{experience.title}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="md:hidden">
          <Button variant="outline" size="sm" className="w-full mb-4" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <>
                Hide Responsibilities <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show Responsibilities <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
        <ul className={`space-y-2 mt-4 ${isExpanded ? "block" : "hidden md:block"}`}>
          {experience.responsibilities.map((responsibility, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

