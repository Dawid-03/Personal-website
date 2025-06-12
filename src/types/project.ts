export interface Project {
  id: string
  title: string
  description: {
    en: string
    pl: string
  }
  technologies: string[]
  links: {
    live?: string
    github?: string
    demo?: string
  }
  featured: boolean
}
