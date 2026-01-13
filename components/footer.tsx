"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">{t("hero.cta.contact")}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t("footer.built")} Next.js, React & Tailwind CSS
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Button
                size="lg"
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">© 2026 Portfolio. {t("footer.rights")}</p>
              <p className="flex items-center gap-2">
                {t("footer.built")} <Heart className="h-4 w-4 text-accent fill-accent" /> & v0 + Cursor
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
