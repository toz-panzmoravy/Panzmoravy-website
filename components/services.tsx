"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Palette, Code2, ArrowRight, Mail, CheckCircle2, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"

export function Services() {
  const { t, language } = useLanguage()
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      icon: Target,
      title: t("services.step1.title"),
      role: t("services.step1.role"),
      description: t("services.step1.description"),
      aiAcceleration: t("services.step1.aiAcceleration"),
      result: t("services.step1.result"),
      tools: ["Jira", "Notion", "ChatGPT", "Claude"],
    },
    {
      id: 2,
      icon: Palette,
      title: t("services.step2.title"),
      role: t("services.step2.role"),
      description: t("services.step2.description"),
      aiAcceleration: t("services.step2.aiAcceleration"),
      result: t("services.step2.result"),
      tools: ["Figma", "Midjourney", "DALL-E", "Framer"],
    },
    {
      id: 3,
      icon: Code2,
      title: t("services.step3.title"),
      role: t("services.step3.role"),
      description: t("services.step3.description"),
      aiAcceleration: t("services.step3.aiAcceleration"),
      result: t("services.step3.result"),
      tools: ["Cursor", "GitHub Copilot", "Next.js", "TypeScript"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden min-h-[calc(100vh-4rem)] pt-32">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="space-y-20">
          {/* Enhanced Header */}
          <div
            ref={ref}
            className={`space-y-8 text-center max-w-4xl mx-auto transition-all duration-700 opacity-100 translate-y-0`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-4">
              <Zap className="h-4 w-4" />
              {t("services.badge")}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              {t("services.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          {/* Enhanced Process Timeline */}
          <div className="relative isolate">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 relative isolate lg:items-stretch">
              {steps.map((step, index) => {
                const Icon = step.icon

                return (
                  <div key={step.id} className="relative flex flex-col">
                    <Card
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`group border-2 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 bg-card/90 backdrop-blur-md relative overflow-hidden flex flex-col h-full opacity-100 translate-y-0 ${
                        hoveredStep === step.id
                          ? "border-accent bg-card"
                          : "border-border hover:border-accent/30"
                      }`}
                      style={{
                        transitionDelay: `${index * 200}ms`,
                        animationFillMode: "backwards",
                      }}
                    >


                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-lg shadow-accent/20">
                          {step.id}
                        </div>
                      </div>

                      <CardContent className="pt-16 pb-8 flex flex-col flex-1">
                        <div className="flex flex-col flex-1">
                          {/* Icon and title section */}
                          <div className="flex flex-col items-center text-center mb-6">
                            <div className="relative mb-4">
                              <div className="h-20 w-20 rounded-2xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/40 group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-lg">
                                <Icon className="h-10 w-10 text-accent" />
                              </div>
                            </div>
                            <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">
                              {step.role}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed mb-6 text-center">{step.description}</p>

                          {/* AI Acceleration - Elegant */}
                          <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/10 group-hover:bg-accent/8 group-hover:border-accent/20 transition-all duration-300">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="p-1.5 rounded-md bg-accent/10 group-hover:bg-accent/15 transition-colors">
                                <Zap className="h-4 w-4 text-accent/80" />
                              </div>
                              <div>
                                <span className="text-sm font-semibold text-accent block mb-1">
                                  {t("services.aiAcceleration")}
                                </span>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.aiAcceleration}</p>
                              </div>
                            </div>
                          </div>

                          {/* Result - Enhanced */}
                          <div className="mb-6 p-3 rounded-lg bg-muted/50 border border-border">
                            <div className="flex items-start gap-2 mb-2">
                              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-sm font-semibold text-primary mb-1">{t("services.result")}</div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.result}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Tools - Always visible */}
                        <div className="mt-auto pt-6 border-t border-border">
                          <div className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider text-center">
                            {t("services.tools")}
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {step.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs font-medium border border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all duration-200 cursor-default"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
