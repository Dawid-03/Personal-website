import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/language-context";

import professionalPhoto from "../assets/images/professional-photo.jpg";
import casualPhoto from "../assets/images/casual-photo.jpg";

export function HeroSection() {
  const { translations } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-2">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-1">
                {translations.hero.title}
              </h1>
              <p className="text-base md:text-lg text-gray-500 uppercase tracking-wide mb-6">
                {translations.hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                {translations.hero.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {translations.hero.viewWork}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {translations.hero.contactMe}
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/Dawid-03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/dawidszewczyk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:dawid.szewczyk678@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative">
              <img
                src={professionalPhoto || "/placeholder.svg"}
                alt="Dawid Szewczyk - Professional headshot"
                className="rounded-2xl shadow-2xl object-top object-cover w-[300px] h-[400px]"
              />
            </div>
            <div className="relative sm:mt-12">
              <img
                src={casualPhoto || "/placeholder.svg"}
                alt="Dawid Szewczyk - Casual outdoor photo"
                className="rounded-2xl shadow-2xl object-cover w-[250px] h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
