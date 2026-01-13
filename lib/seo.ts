import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://panzmoravy.cz"
const siteName = "Panzmoravy - Product Owner & UX Designer"
const defaultDescription =
  "Product Owner s přesahem do UX designu a technických kompetencí. Specializuji se na AI-driven vývoj produktů od strategie po implementaci."

export function generateMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const metaDescription = description || defaultDescription
  const url = `${siteUrl}${path}`
  const ogImage = image || `${siteUrl}/og-image.jpg`

  return {
    title: fullTitle,
    description: metaDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "cs_CZ",
      url: url,
      title: fullTitle,
      description: metaDescription,
      siteName: siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  }
}

// Structured Data (JSON-LD) for better AI search visibility
export function generateStructuredData({
  type = "Person",
  name = "Panzmoravy",
  description = defaultDescription,
  url = siteUrl,
  jobTitle = "Product Owner & UX Designer",
  sameAs = ["https://linkedin.com/in/panzmoravy"],
}: {
  type?: "Person" | "Organization"
  name?: string
  description?: string
  url?: string
  jobTitle?: string
  sameAs?: string[]
}) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: name,
    description: description,
    url: url,
    ...(type === "Person" && {
      jobTitle: jobTitle,
      sameAs: sameAs,
    }),
  }

  return baseSchema
}

