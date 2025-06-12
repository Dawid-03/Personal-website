import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from '../data/translations/en'
import { pl } from '../data/translations/pl'

type Language = 'en' | 'pl'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  translations: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0]
    setLanguage(browserLang === 'pl' ? 'pl' : 'en')
  }, [])

  const translations = language === 'pl' ? pl : en

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 