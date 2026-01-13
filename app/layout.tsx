import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { GoogleAnalytics } from "@/lib/analytics"
import { generateMetadata as genMeta, generateStructuredData } from "@/lib/seo"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = genMeta({
  title: "Portfolio | Product Owner & UX Designer",
  description:
    "Product Owner s přesahem do UX designu a technických kompetencí. Specializuji se na AI-driven vývoj produktů od strategie po implementaci.",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = generateStructuredData({
    name: "Panzmoravy",
    jobTitle: "Product Owner & UX Designer",
    description:
      "Product Owner s přesahem do UX designu a technických kompetencí. Specializuji se na AI-driven vývoj produktů od strategie po implementaci.",
  })

  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider defaultLanguage="cs">
            <AnalyticsProvider>{children}</AnalyticsProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
