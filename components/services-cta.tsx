"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, ArrowRight, Sparkles, CheckCircle2, Zap, Clock, MessageSquare, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

export function ServicesCTA() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const [isHovered, setIsHovered] = useState(false)

  const benefits = [
    { icon: Clock, text: "Rychlá reakce do 24h" },
    { icon: MessageSquare, text: "Transparentní komunikace" },
    { icon: Rocket, text: "Flexibilní přístup" },
    { icon: Zap, text: "AI-powered řešení" },
  ]

  const stats = [
    { value: "24h", label: "Reakční doba" },
    { value: "100%", label: "Zaměření na výsledek" },
    { value: "AI", label: "Moderní nástroje" },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate" style={{ marginTop: "4rem" }}>
      {/* Enhanced Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-muted/30" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path
            d="M 0 300 Q 300 200 600 300 T 1200 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.75s" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 opacity-100 translate-y-0`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Enhanced Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold shadow-sm">
                  <Zap className="h-4 w-4" />
                  {t("services.cta.badge")}
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                  {t("services.cta.title")}
                </h2>
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                  {t("services.cta.description")}
                </p>
              </div>

              {/* Enhanced Benefits list */}
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-accent/20 transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-muted-foreground font-medium">{benefit.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Enhanced CTA Card */}
            <div className="relative">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative p-10 rounded-3xl bg-card/90 backdrop-blur-xl border-2 border-accent/20 shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:border-accent/50 hover:scale-[1.02] overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />


                {/* Shimmer effect */}
                {isHovered && (
                  <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}

                <div className="relative z-10 space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-primary">Pojďme to prodiskutovat</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Odpovím do 24 hodin a společně najdeme ideální řešení pro váš projekt.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/50 gap-3 group font-semibold py-7 text-lg relative overflow-hidden"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform relative z-10" />
                      <span className="relative z-10">{t("services.cta.button")}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
                    </a>
                  </Button>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground text-center">
                      Nebo mě kontaktujte na{" "}
                      <a 
                        href="mailto:panzmoravy@gmail.com"
                        className="text-accent hover:text-accent/80 hover:underline font-semibold transition-colors"
                      >
                        panzmoravy@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
