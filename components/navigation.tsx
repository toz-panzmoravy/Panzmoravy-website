"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    // Only scroll if we're on the home page
    if (pathname === "/") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      window.location.href = `/#${id}`
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 flex-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg border border-accent/30 bg-background/10 backdrop-blur-sm shadow-md shadow-accent/10 overflow-hidden hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover mix-blend-screen"
                  style={{ mixBlendMode: "screen" }}
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_Panzmoravy_N_logo_logodesign_modern_creative_--ar_11_--motion_70a82442-2d3b-49ce-b6c2-b3f367ad3f58_2-BuOgXs6dhRUACgyImf1nShuwkjUVGC.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="text-lg font-bold text-primary hover:text-accent transition-all duration-300 hover:scale-105">
                Panzmoravy
              </span>
            </Link>

            {/* Services button - prominently placed with spacing */}
            <div className="ml-auto mr-4">
              <Button
                variant="default"
                asChild
                className={`bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-transform font-semibold shadow-lg shadow-accent/20 px-6 ${
                  pathname === "/services" ? "ring-2 ring-accent ring-offset-2" : ""
                }`}
              >
                <Link href="/services">{t("nav.services")}</Link>
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="hover:scale-105 transition-transform"
            >
              {t("nav.about")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="hover:scale-105 transition-transform"
            >
              {t("nav.skills")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="hover:scale-105 transition-transform"
            >
              {t("nav.projects")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("timeline")}
              className="hover:scale-105 transition-transform"
            >
              {t("nav.timeline")}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-2 hover:rotate-180 transition-transform duration-500"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <div className="ml-2 flex items-center gap-1 bg-secondary rounded-md p-1">
              <Button
                variant={language === "cs" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("cs")}
                className="h-8 px-3 text-xs transition-all duration-300"
              >
                CZ
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="h-8 px-3 text-xs transition-all duration-300"
              >
                EN
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:rotate-180 transition-transform duration-500"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <div className="flex items-center gap-0.5 bg-secondary rounded-md p-0.5">
              <Button
                variant={language === "cs" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("cs")}
                className="h-7 px-2 text-xs transition-all duration-300"
              >
                CZ
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="h-7 px-2 text-xs transition-all duration-300"
              >
                EN
              </Button>
            </div>

            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {/* Services button - prominently placed first in mobile menu */}
              <Button
                variant="default"
                asChild
                className={`justify-start bg-accent hover:bg-accent/90 text-accent-foreground hover:translate-x-2 transition-transform font-semibold shadow-lg shadow-accent/20 ${
                  pathname === "/services" ? "ring-2 ring-accent ring-offset-2" : ""
                }`}
              >
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("nav.services")}
                </Link>
              </Button>
              
              {/* Visual separator */}
              <div className="h-px w-full bg-border my-2" />
              
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="justify-start hover:translate-x-2 transition-transform"
              >
                {t("nav.about")}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("skills")}
                className="justify-start hover:translate-x-2 transition-transform"
              >
                {t("nav.skills")}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="justify-start hover:translate-x-2 transition-transform"
              >
                {t("nav.projects")}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("timeline")}
                className="justify-start hover:translate-x-2 transition-transform"
              >
                {t("nav.timeline")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
