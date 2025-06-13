import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    id: "expense-manager",
    title: "Expense Manager",
    description: {
      en: "A simple fullstack Expense Manager application that allows users to manage their incomes and expenses, organize them by categories, and generate summary reports.",
      pl: "Prosta aplikacja zarządzania wydatkami, która pozwala użytkownikom zarządzać ich dochodami i wydatkami, organizować je według kategorii i generować podsumowania raportów."
    },
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "JWT Auth", "RESTful API"],
    links: {
      github: "https://github.com/Dawid-03/Expense-Manager/",
    },
    featured: true,
  },
  {
    id: "resevi",
    title: "Resevi",
    description: {
      en: "Backend system for a booking service platform designed for service salons. Handles complex scheduling algorithms, real-time availability management, and multi-tenant architecture for salon management.",
      pl: "System backendowy do rezerwacji usług dla salonów. Obsługuje algorytmy złożonego planowania, zarządzanie dostępnością w czasie rzeczywistym i architekturę wielodostępną dla salonów."
    },
    technologies: ["Golang", "fiber", "PostgreSQL", "RESTful API", "Docker", "Prisma"],
    links: {
      live: "https://resevi.com",
    },
    featured: true,
  },
  {
    id: "procurel",
    title: "Procurel",
    description: {
      en: "Designed and developed a cutting-edge CRM system from the ground up using TypeScript and NodeJS. Engineered the backend infrastructure with a focus on performance and scalability, implementing dynamic form creation, automated data entry, and real-time reporting systems.",
      pl: "Projektowanie i tworzenie zaawansowanego systemu CRM od podstaw za pomocą TypeScript i NodeJS. Inżynierowanie infrastruktury backendowej z naciskiem na wydajność i skalowalność, implementacja tworzenia dynamicznych formularzy, wpisywania danych automatycznych i systemów raportowania w czasie rzeczywistym."
    },
    technologies: ["Node.js", "Express", "PostgreSQL", "RESTful API", "Docker", "Prisma"],
    links: {
      live: "https://procurel.com",
    },
    featured: true,
  },
  {
    id: "napi",
    title: "NAPI",
    description: {
      en: "Core API platform serving as the foundation for all Nove products. Implements OAuth2 authentication, version management, feature flags, and centralized authorization. Built with scalability and performance in mind, featuring comprehensive documentation, rate limiting, caching strategies, and modern API design principles.",
      pl: "Platforma API Core służąca jako podstawa dla wszystkich produktów Nove. Implementuje uwierzytelnianie OAuth2, zarządzanie wersjami, flagi funkcji i autoryzację centralną. Zbudowane z myślą o skalowalności i wydajności, zawierające kompleksowe dokumentacje, strategie ograniczania szybkości i zmodernizowane zasady projektowania API."
    },
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "RESTful API", "Docker"],
    links: {
      github: "https://git.nove.team/nove-org/NAPI",
    },
    featured: true,
  },
    {
    id: "tasks",
    title: "Tasks",
    description: {
      en: "simple and clean to-do list app for managing your daily tasks. Create tasks, organize them into lists, mark them as completed, and set optional deadlines. All content – including tasks, lists, and dates – is fully encrypted, ensuring your data stays private and secure.",
      pl: "Prosta i przejrzysta aplikacja do zarządzania zadaniami (to-do). Pozwala tworzyć zadania, grupować je w listy, oznaczać jako wykonane oraz ustawiać terminy wykonania (deadline’y). Minimalistyczny interfejs i szyfrowanie danych zapewniają wygodę i prywatność."
    },
    technologies: ["Golang", "Gorm", "PostgreSQL", "RESTful API"],
    links: {
      github: "https://git.nove.team/tasks/backend",
    },
    featured: true,
  },
      {
    id: "gohsms",
    title: "Go HSMS",
    description: {
      en: "Go HostedSMS – a Go client for the full hostedsms.pl API. Supports message sending, status checks, sender management, and all other available endpoints.",
      pl: "Go HostedSMS – klient w języku Go dla pełnego API hostedsms.pl. Obsługuje wysyłkę wiadomości, sprawdzanie statusu, zarządzanie nadawcami i inne funkcje API."
    },
    technologies: ["Golang"],
    links: {
      github: "https://git.nove.team/nove-org/go-hsms/",
    },
    featured: true,
  },
]
