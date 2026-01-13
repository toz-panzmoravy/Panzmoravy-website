"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Code } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

export function About() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t("about.description")}</p>
          </div>

          <div
            ref={ref}
            className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: "100ms", animationFillMode: "backwards" }}
            >
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.product.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("about.product.desc")}</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
            >
              <CardContent className="pt-6 relative">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <button className="absolute -top-1 -right-1 w-28 h-28 sm:w-32 sm:h-32 cursor-pointer group/cert z-10 rounded-lg bg-white dark:bg-gray-800 p-1 shadow-md border-2 border-accent overflow-hidden">
                      <Image
                        src="/images/image.png"
                        alt="Google UX Design Certificate"
                        fill
                        className="object-cover scale-110 group-hover/cert:scale-115 transition-transform duration-300 mix-blend-multiply dark:mix-blend-normal dark:brightness-110 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-accent/10 transition-colors duration-300 rounded-lg" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Google UX Design Certificate</DialogTitle>
                      <DialogDescription>Certificate of Completion - Coursera</DialogDescription>
                    </DialogHeader>
                    <div className="w-full flex items-center justify-center bg-transparent rounded-lg p-4">
                      <div className="relative w-full max-w-4xl aspect-[4/3] border-2 border-accent rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Image
                          src="/images/image.png"
                          alt="Google UX Design Certificate"
                          fill
                          className="object-cover mix-blend-multiply dark:mix-blend-normal dark:brightness-110"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Users className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.ux.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("about.ux.desc")}</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
            >
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Code className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.tech.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("about.tech.desc")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
