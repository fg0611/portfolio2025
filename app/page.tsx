import { ProfessionalExperience } from "@/components/professional-experience"
import { AcademicSummary } from "@/components/academic-summary"
import { ContactForm } from "@/components/contact-form"
import { Toaster } from "@/components/ui/toaster"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { PersistentNav } from "@/components/persistent-nav"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <PersistentNav />

      <Hero />
      <Skills />
      <ProfessionalExperience />
      <AcademicSummary />

      <section
        id="contact"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-16 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        <ContactForm />
      </section>

      <Toaster />
    </main>
  )
}

