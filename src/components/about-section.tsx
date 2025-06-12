import { Card, CardContent } from "./ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export function AboutSection() {
  const { translations } = useLanguage()

  const skills = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: translations.about.skills.backend.title,
      description: translations.about.skills.backend.description,
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: translations.about.skills.database.title,
      description: translations.about.skills.database.description,
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: translations.about.skills.api.title,
      description: translations.about.skills.api.description,
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-600" />,
      title: translations.about.skills.frontend.title,
      description: translations.about.skills.frontend.description,
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{translations.about.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
