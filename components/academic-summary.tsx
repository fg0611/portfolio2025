import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "Data Analysis & Data Science",
    institution: "Coderhouse",
    location: "Argentina",
    period: "November 2021 – October 2022",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Henry Bootcamp",
    location: "",
    period: "November 2020 - July 2021",
  },
  {
    degree: "Environmental Engineering Specialist",
    institution: "UTN-frc",
    location: "Cordoba, Argentina",
    period: "January 2018 - December 2019",
  },
  {
    degree: "Civil Engineer",
    institution: "UNE",
    location: "Caracas, Venezuela",
    period: "January 2008 - November 2013",
  },
]

export function AcademicSummary() {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Academic Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <School className="h-6 w-6 mr-2 text-primary" />
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <School className="h-4 w-4 text-secondary" />
                    <span>{edu.institution}</span>
                    {edu.location && <span>- {edu.location}</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

