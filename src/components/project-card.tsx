import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "../types/project"
import { useLanguage } from "../lib/language-context"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { translations, language } = useLanguage()

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">{project.title}</CardTitle>
        <CardDescription className="text-gray-600 text-base leading-relaxed">
          {project.description[language]}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {(project.links.live || project.id === "napi") && (
            <a
              href={project.id === "napi" ? "https://nove.team" : project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                {translations.projects.visitWebsite}
              </Button>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                {translations.projects.sourceCode}
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 