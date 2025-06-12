import { Button } from "./ui/button"
import { useLanguage } from "../lib/language-context"
import { useState, useRef, useEffect } from "react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const languages = [
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'pl', flag: '🇵🇱', label: 'Polski' }
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
      >
        {languages.find(lang => lang.code === language)?.flag}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'en' | 'pl')
                  setIsOpen(false)
                }}
                className={`${
                  language === lang.code ? 'bg-gray-100' : ''
                } flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                role="menuitem"
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 