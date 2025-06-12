import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Dawid Szewczyk</h3>
            <p className="text-gray-400 mt-2">Backend Developer | Building scalable server-side solutions</p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Dawid-03" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/dawid-szewczyk" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:dawid.szewczyk678@gmail.com">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dawid Szewczyk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
