import { Services } from "@/components/services"
import { ServicesCTA } from "@/components/services-cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { generateMetadata as genMeta, generateStructuredData } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta({
  title: "Služby | Spolupráce",
  description:
    "Nabídka spolupráce - vytvoření webové aplikace, webu nebo mobilní aplikace na zakázku. AI-driven proces od strategie po implementaci.",
  path: "/services",
})

export default function ServicesPage() {
  const structuredData = generateStructuredData({
    type: "Organization",
    name: "Panzmoravy - Services",
    description:
      "Nabídka spolupráce - vytvoření webové aplikace, webu nebo mobilní aplikace na zakázku. AI-driven proces od strategie po implementaci.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://panzmoravy.cz"}/services`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen pt-28">
        <Navigation />
        <Services />
        <ServicesCTA />
        <Footer />
      </main>
    </>
  )
}

