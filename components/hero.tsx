"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown, ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState, useRef } from "react"

export function Hero() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const buttonsContainerRef = useRef<HTMLDivElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && buttonsContainerRef.current && servicesButtonRef.current) {
      const updateWidth = () => {
        if (buttonsContainerRef.current && servicesButtonRef.current) {
          servicesButtonRef.current.style.width = `${buttonsContainerRef.current.offsetWidth}px`
        }
      }
      updateWidth()
      window.addEventListener("resize", updateWidth)
      return () => window.removeEventListener("resize", updateWidth)
    }
  }, [mounted])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Large complex graph covering entire background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.15]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Multiple overlapping line charts */}
          <path
            d="M 50 600 L 150 520 L 250 480 L 350 520 L 450 400 L 550 380 L 650 320 L 750 360 L 850 280 L 950 240 L 1050 200 L 1150 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-accent transition-all duration-500 hover:opacity-100 hover:stroke-[6] hover:brightness-150 hover:saturate-150 hover:drop-shadow-[0_0_8px_currentColor] cursor-pointer pointer-events-auto"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 4"
          />

          <path
            d="M 50 650 L 150 580 L 250 550 L 350 500 L 450 520 L 550 480 L 650 440 L 750 420 L 850 380 L 950 340 L 1050 300 L 1150 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-primary transition-all duration-500 hover:opacity-100 hover:stroke-[5] hover:brightness-150 hover:saturate-150 hover:drop-shadow-[0_0_6px_currentColor] cursor-pointer pointer-events-auto"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />

          <path
            d="M 50 700 L 150 680 L 250 640 L 350 620 L 450 600 L 550 560 L 650 540 L 750 500 L 850 480 L 950 460 L 1050 420 L 1150 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/50 transition-all duration-500 hover:opacity-100 hover:stroke-[4] hover:brightness-150 hover:saturate-150 hover:drop-shadow-[0_0_4px_currentColor] cursor-pointer pointer-events-auto"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />

          {/* Data points on main line */}
          {[
            { x: 150, y: 520 },
            { x: 350, y: 520 },
            { x: 450, y: 400 },
            { x: 650, y: 320 },
            { x: 850, y: 280 },
            { x: 1050, y: 200 },
          ].map((point, i) => (
            <g
              key={i}
              className="transition-all duration-300 hover:opacity-100 cursor-pointer pointer-events-auto hover:scale-150"
              style={{ transformOrigin: `${point.x}px ${point.y}px` }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="currentColor"
                className="text-accent animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent opacity-30 animate-ping"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </g>
          ))}

          {/* Area fill under main chart */}
          <path
            d="M 50 600 L 150 520 L 250 480 L 350 520 L 450 400 L 550 380 L 650 320 L 750 360 L 850 280 L 950 240 L 1050 200 L 1150 180 L 1150 800 L 50 800 Z"
            fill="currentColor"
            className="text-accent"
            opacity="0.05"
          />

          {/* Vertical bars in background */}
          {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x, i) => (
            <rect
              key={i}
              x={x}
              y={700 - (i % 3) * 100 - Math.random() * 150}
              width="40"
              height={(i % 3) * 100 + Math.random() * 150}
              fill="currentColor"
              className="text-primary transition-all duration-300 hover:opacity-40 cursor-pointer pointer-events-auto"
              opacity="0.08"
            />
          ))}

          {/* Growth trend arrow */}
          <path
            d="M 900 400 L 1100 200"
            stroke="currentColor"
            strokeWidth="4"
            className="text-accent transition-all duration-500 hover:opacity-90 hover:stroke-[6] hover:brightness-150 hover:saturate-150 hover:drop-shadow-[0_0_10px_currentColor] cursor-pointer pointer-events-auto"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            opacity="0.3"
          />
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="currentColor" className="text-accent" />
            </marker>
          </defs>

          {/* Metric annotations */}
          <text x="150" y="500" className="text-xs fill-current text-foreground/40" fontSize="14">
            Q1
          </text>
          <text x="450" y="380" className="text-xs fill-current text-foreground/40" fontSize="14">
            Q2
          </text>
          <text x="850" y="260" className="text-xs fill-current text-foreground/40" fontSize="14">
            Q3
          </text>
        </svg>

        {/* Floating metric cards */}
        <div
          className="absolute right-10 top-24 opacity-[0.85] hover:opacity-100 animate-float transition-all duration-300 hover:scale-110 cursor-pointer pointer-events-auto"
          style={{ animationDelay: "1s" }}
        >
          <div className="bg-background/80 backdrop-blur-md border border-accent/50 rounded-lg p-4 space-y-2 shadow-lg shadow-accent/10 hover:shadow-2xl hover:shadow-accent/40 transition-all hover:border-accent hover:bg-background/95">
            <div className="text-sm text-foreground/80 font-medium">User Growth</div>
            <div className="text-3xl font-bold text-accent">+145%</div>
            <div className="h-1 bg-accent/20 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[85%] rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <div
          className="absolute left-10 top-32 opacity-[0.85] hover:opacity-100 animate-float transition-all duration-300 hover:scale-110 cursor-pointer pointer-events-auto"
          style={{ animationDelay: "2s" }}
        >
          <div className="bg-background/80 backdrop-blur-md border border-primary/50 rounded-lg p-4 space-y-2 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:border-primary hover:bg-background/95">
            <div className="text-sm text-foreground/80 font-medium">Sprint Velocity</div>
            <div className="text-3xl font-bold text-primary">32 pts</div>
            <div className="text-xs text-muted-foreground">↑ 18% vs last sprint</div>
          </div>
        </div>

        <div
          className="absolute right-20 bottom-32 opacity-[0.85] hover:opacity-100 animate-float transition-all duration-300 hover:scale-110 cursor-pointer pointer-events-auto"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="bg-background/80 backdrop-blur-md border border-accent/50 rounded-lg p-4 space-y-2 shadow-lg shadow-accent/10 hover:shadow-2xl hover:shadow-accent/40 transition-all hover:border-accent hover:bg-background/95">
            <div className="text-sm text-foreground/80 font-medium">Feature Adoption</div>
            <div className="text-3xl font-bold text-accent">89%</div>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-8 h-1 rounded-full ${i < 4 ? "bg-accent" : "bg-accent/20"}`} />
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute left-16 bottom-24 opacity-[0.85] hover:opacity-100 animate-float transition-all duration-300 hover:scale-110 cursor-pointer pointer-events-auto"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-background/80 backdrop-blur-md border border-primary/50 rounded-lg p-4 space-y-2 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:border-primary hover:bg-background/95">
            <div className="text-sm text-foreground/80 font-medium">NPS Score</div>
            <div className="text-3xl font-bold text-primary">47</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="text-accent">★★★</span> Good
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-8 text-center bg-background/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-border/50">
          <div className="space-y-4">
            <p
              className={`text-lg sm:text-xl text-muted-foreground ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              {t("hero.greeting")}
            </p>

            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance text-foreground relative ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("hero.title")}
            </h1>

            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-balance text-accent relative ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              Product Owner
            </h2>

            <h3
              className={`text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-balance relative ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-muted-foreground">T-Shape</span>
              <span>: </span>
              <span className="text-accent">UX Design | AI-Powered Innovation</span>
            </h3>

            <p
              className={`text-xl sm:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              {t("hero.description")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div
              ref={buttonsContainerRef}
              className={`flex flex-wrap items-center justify-center gap-4 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
                asChild
              >
                <a href="#projects" onClick={scrollToProjects}>
                  {t("hero.cta.projects")}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all hover:scale-105 bg-transparent hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:hover:bg-accent dark:hover:text-accent-foreground dark:hover:border-accent" 
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all hover:scale-105 bg-transparent hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:hover:bg-accent dark:hover:text-accent-foreground dark:hover:border-accent" 
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Services CTA - Enhanced UX/UI */}
            <div
              className={`relative flex items-center justify-center ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              {/* Glow effect behind button */}
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-lg animate-pulse" style={{ width: "120%" }} />
              
              <Button
                ref={servicesButtonRef}
                size="lg"
                asChild
                className="relative bg-gradient-to-r from-accent via-accent to-accent/90 hover:from-accent/95 hover:via-accent hover:to-accent text-accent-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/50 font-bold text-lg py-6 px-12 group border-2 border-accent/30 hover:border-accent/60 overflow-hidden"
                style={{ minWidth: "400px", maxWidth: "500px" }}
              >
                <Link href="/services" className="relative z-10">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative flex items-center justify-center gap-3">
                    <Sparkles className="h-5 w-5 group-hover:rotate-180 group-hover:scale-110 transition-all duration-500" />
                    <span className="relative">
                      {t("nav.services")}
                      <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-accent-foreground/30 transition-all duration-300" />
                    </span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className={`inline-flex items-center justify-center text-muted-foreground hover:text-accent transition-all animate-bounce hover:scale-110 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
