import { Card, CardContent } from "./ui/card"
import { Mail, MapPin, MessageCircle } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export function ContactSection() {
  const { translations } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{translations.contact.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.contact.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{translations.contact.email}</h3>
                    <a href="mailto:dawid.szewczyk678@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      dawid.szewczyk678@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{translations.contact.signal}</h3>
                    <p className="text-gray-600">dawid.420</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{translations.contact.location}</h3>
                    <p className="text-gray-600">Poland</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
