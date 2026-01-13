"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, GitBranch, Bot, BarChart3, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function GitHubStats() {
  const { language, t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    {
      label: language === "en" ? "Repositories" : "Repozitáře",
      value: "41",
      icon: GitBranch,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: language === "en" ? "Total projects" : "Celkem projektů",
    },
    {
      label: language === "en" ? "Stars from Community" : "Hvězdičky od komunity",
      value: "16",
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: language === "en" ? "Community recognition" : "Uznání komunity",
    },
    {
      label: language === "en" ? "Automated Trading Systems" : "Automatizované obchodní systémy",
      value: "—",
      icon: Bot,
      color: "text-accent",
      bgColor: "bg-accent/10",
      description: language === "en" ? "AI-powered trading bots" : "AI-powered trading boty",
    },
    {
      label: language === "en" ? "Indicators" : "Indikátory",
      value: "—",
      icon: BarChart3,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      description: language === "en" ? "TradingView, MetaTrader5" : "TradingView, MetaTrader5",
    },
  ]

  return (
    <section id="github-stats" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Github className="h-8 w-8 text-accent" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                GitHub
              </h2>
            </div>
            <p className="text-lg text-muted-foreground text-pretty">
              {language === "en"
                ? "Open-source projects and development activity"
                : "Open-source projekty a vývojová aktivita"}
            </p>
          </div>

          <div
            ref={ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={stat.label}
                  className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4 bg-card"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
                >
                  <CardContent className="pt-6 pb-4">
                    <div className="space-y-3 text-center">
                      <div
                        className={`h-12 w-12 rounded-xl ${stat.bgColor} flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div className="space-y-1">
                        {stat.value !== "—" && (
                          <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                            {stat.value}
                          </div>
                        )}
                        <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider leading-tight px-2">
                          {stat.label}
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground/70 mt-1">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex justify-center pt-6">
            <Button
              variant="default"
              size="lg"
              asChild
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2 px-6"
            >
              <a
                href="https://github.com/toz-panzmoravy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">
                  {language === "en" ? "View GitHub Profile" : "Zobrazit GitHub Profil"}
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

