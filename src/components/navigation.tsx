"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "../lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { translations } = useLanguage()

  const navItems = [
    { href: "#home", label: translations.nav.home },
    { href: "#about", label: translations.nav.about },
    { href: "#projects", label: translations.nav.projects },
    { href: "#contact", label: translations.nav.contact },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">Dawid Szewczyk</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
