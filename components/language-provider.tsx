"use client"

import * as React from "react"

type Language = "cs" | "en"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
}

type LanguageProviderState = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageProviderContext = React.createContext<LanguageProviderState | undefined>(undefined)

const translations = {
  cs: {
    // Navigation
    "nav.about": "O mně",
    "nav.skills": "Dovednosti",
    "nav.certifications": "Certifikace",
    "nav.projects": "Projekty",
    "nav.timeline": "Zkušenosti",
    "nav.services": "Služby",

    // Hero
    "hero.greeting": "Ahoj, jsem",
    "hero.title": "Panzmoravy",
    "hero.subtitle": "Product Owner, T-Shape: UX Design / AI",
    "hero.description":
      "Mou silnou stránkou je schopnost vidět dál než za seznam úkolů. Dokážu identifikovat skrytá slabá místa produktu a proměnit je v růstové příležitosti. Spojením kreativního myšlení, hlubokého UX a generativní AI doručuji inovace, které skutečně posouvají byznys i uživatelskou spokojenost.",
    "hero.cta.projects": "Moje projekty",
    "hero.cta.contact": "Kontakt",

    // About
    "about.title": "O mně",
    "about.description":
      "Jsem Product Owner s přesahem do UX designu a technických kompetencí. Baví mě budovat produkty, které řeší reálné problémy uživatelů a přinášejí business value.",
    "about.product.title": "Product Ownership",
    "about.product.desc": "Strategie, roadmapping, prioritizace features a koordinace stakeholderů",
    "about.ux.title": "UX Design",
    "about.ux.desc": "User research, prototyping, testování a optimalizace uživatelského zážitku",
    "about.tech.title": "Technické znalosti",
    "about.tech.desc": "Spolupráce s dev týmem, základy frontend developmentu, porozumění návaznostem a možným problémům či komplikacím",

    // Skills
    "skills.title": "Dovednosti & Kompetence",
    "skills.description":
      "Kombinace product managementu, UX designu a technických znalostí pro komplexní vedení produktů.",
    "skills.product": "Product Management",
    "skills.design": "Design & Research",
    "skills.technical": "Technické",
    "skills.tools": "Nástroje",

    // Projects
    "projects.title": "Projekty",
    "projects.description":
      "Výběr klíčových projektů, na kterých jsem pracoval. Každý projekt přinesl měřitelné výsledky a cenné zkušenosti.",
    "projects.viewDetails": "Zobrazit detaily",
    "projects.close": "Zavřít",
    "projects.impact": "Dopad",
    "projects.technologies": "Technologie",
    "projects.myRole": "Moje role",
    "projects.duration": "Doba trvání",

    // Timeline
    "timeline.title": "Profesní zkušenosti",
    "timeline.description":
      "Můj profesní vývoj s klíčovými úspěchy i naučenými lekcemi. Transparentnost je důležitá pro růst.",
    "timeline.present": "Současnost",
    "timeline.achievements": "Úspěchy",
    "timeline.learnings": "Naučené lekce",

    // Footer
    "footer.built": "Postaveno s",
    "footer.rights": "Všechna práva vyhrazena",

    // Services
    "services.badge": "AI-Driven Proces",
    "services.title": "Od strategie po kód. Váš produkt od A do Z v rekordním čase.",
    "services.subtitle":
      "Kombinuji expertízu Product Ownera a UX designéra s výkonem nejmodernější AI, abych proměnil váš nápad ve funkční produkt bez zbytečných průtahů.",
    "services.step1.title": "Definice a byznys hodnota",
    "services.step1.role": "Product Owner + AI",
    "services.step1.description":
      "Nezačínám kódem, ale otázkou \"proč?\". Jako PO hlídám, aby produkt dával smysl trhu i vašemu rozpočtu.",
    "services.step1.aiAcceleration":
      "Využívám AI pro bleskovou analýzu konkurence, syntézu uživatelských potřeb a tvorbu prioritizované roadmapy (MVP).",
    "services.step1.result": "Jasné zadání a plán, který minimalizuje riziko neúspěchu.",
    "services.step2.title": "Design zaměřený na člověka",
    "services.step2.role": "UX Designer + AI",
    "services.step2.description":
      "Navrhuji rozhraní, která jsou intuitivní a radost je používat. Design není jen o barvách, ale o hladkém průchodu uživatele aplikací.",
    "services.step2.aiAcceleration":
      "Pomocí generativní AI rychle prototypuji vizuální koncepty a iteruji designové systémy. Tím šetřím desítky hodin manuální práce.",
    "services.step2.result": "Interaktivní prototyp a finální UI, které si uživatelé zamilují.",
    "services.step3.title": "Efektivní vývoj s AI asistencí",
    "services.step3.role": "Developer + AI",
    "services.step3.description":
      "Díky AI agenty mohu pracovat s jakýmkoliv moderním stackem. Důležité není technologie, ale výsledek. Díky roli PO a UX vím přesně, co stavím, a kód je od začátku čistý a škálovatelný.",
    "services.step3.aiAcceleration":
      "Používám AI agenty (Cursor, Copilot) pro psaní kódu, refaktorování a testování. To mi umožňuje doručovat kvalitu seniorního týmu v čase freelancera, bez ohledu na zvolený tech stack.",
    "services.step3.result": "Rychlá, bezpečná a plně responzivní aplikace připravená k nasazení.",
    "services.aiAcceleration": "AI Akcelerace",
    "services.result": "Výsledek",
    "services.tools": "Nástroje",
    "services.cta.badge": "Připraveni začít?",
    "services.cta.title": "Začněme spolupráci",
    "services.cta.description": "Pojďme prodiskutovat váš projekt a najít ideální řešení.",
    "services.cta.button": "Kontaktovat",
    "services.cta.email": "kontakt@panzmoravy.cz",
    "services.cta.subject": "Dotaz na spolupráci",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.timeline": "Experience",
    "nav.services": "Services",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.title": "Panzmoravy",
    "hero.subtitle": "Product Owner, T-Shape: UX Design / AI",
    "hero.description":
      "My strength is the ability to see beyond the task list. I can identify hidden product weaknesses and turn them into growth opportunities. By combining creative thinking, deep UX, and generative AI, I deliver innovations that truly advance both business and user satisfaction.",
    "hero.cta.projects": "My Projects",
    "hero.cta.contact": "Contact",

    // About
    "about.title": "About Me",
    "about.description":
      "I'm a Product Owner with expertise in UX design and technical competencies. I love building products that solve real user problems and deliver business value.",
    "about.product.title": "Product Ownership",
    "about.product.desc": "Strategy, roadmapping, feature prioritization, and stakeholder coordination",
    "about.ux.title": "UX Design",
    "about.ux.desc": "User research, prototyping, testing, and optimizing user experience",
    "about.tech.title": "Technical Knowledge",
    "about.tech.desc": "Dev team collaboration, frontend development basics, understanding dependencies and potential issues or complications",

    // Skills
    "skills.title": "Skills & Competencies",
    "skills.description":
      "Combination of product management, UX design, and technical knowledge for comprehensive product leadership.",
    "skills.product": "Product Management",
    "skills.design": "Design & Research",
    "skills.technical": "Technical",
    "skills.tools": "Tools",

    // Projects
    "projects.title": "Projects",
    "projects.description":
      "Selection of key projects I've worked on. Each project brought measurable results and valuable experience.",
    "projects.viewDetails": "View Details",
    "projects.close": "Close",
    "projects.impact": "Impact",
    "projects.technologies": "Technologies",
    "projects.myRole": "My Role",
    "projects.duration": "Duration",

    // Timeline
    "timeline.title": "Professional Experience",
    "timeline.description":
      "My professional development with key achievements and learned lessons. Transparency is important for growth.",
    "timeline.present": "Present",
    "timeline.achievements": "Achievements",
    "timeline.learnings": "Lessons Learned",

    // Footer
    "footer.built": "Built with",
    "footer.rights": "All rights reserved",

    // Services
    "services.badge": "AI-Driven Process",
    "services.title": "From strategy to code. Your product from A to Z in record time.",
    "services.subtitle":
      "I combine Product Owner and UX designer expertise with cutting-edge AI power to turn your idea into a functional product without unnecessary delays.",
    "services.step1.title": "Definition and business value",
    "services.step1.role": "Product Owner + AI",
    "services.step1.description":
      "I don't start with code, but with the question 'why?'. As a PO, I ensure the product makes sense for the market and your budget.",
    "services.step1.aiAcceleration":
      "I use AI for lightning-fast competitor analysis, synthesis of user needs, and creation of a prioritized roadmap (MVP).",
    "services.step1.result": "Clear brief and plan that minimizes the risk of failure.",
    "services.step2.title": "Human-centered design",
    "services.step2.role": "UX Designer + AI",
    "services.step2.description":
      "I design interfaces that are intuitive and a joy to use. Design isn't just about colors, but about a smooth user journey through the application.",
    "services.step2.aiAcceleration":
      "Using generative AI, I quickly prototype visual concepts and iterate design systems. This saves dozens of hours of manual work.",
    "services.step2.result": "Interactive prototype and final UI that users will love.",
    "services.step3.title": "Efficient development with AI assistance",
    "services.step3.role": "Developer + AI",
    "services.step3.description":
      "Thanks to AI agents, I can work with any modern stack. What matters is not the technology, but the result. Thanks to my PO and UX roles, I know exactly what I'm building, and the code is clean and scalable from the start.",
    "services.step3.aiAcceleration":
      "I use AI agents (Cursor, Copilot) for writing code, refactoring, and testing. This allows me to deliver senior team quality in freelancer time, regardless of the chosen tech stack.",
    "services.step3.result": "Fast, secure, and fully responsive application ready for deployment.",
    "services.aiAcceleration": "AI Acceleration",
    "services.result": "Result",
    "services.tools": "Tools",
    "services.cta.badge": "Ready to start?",
    "services.cta.title": "Let's start collaborating",
    "services.cta.description": "Let's discuss your project and find the ideal solution.",
    "services.cta.button": "Contact",
    "services.cta.email": "contact@panzmoravy.com",
    "services.cta.subject": "Collaboration inquiry",
  },
}

export function LanguageProvider({ children, defaultLanguage = "cs" }: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>(defaultLanguage)

  const t = React.useCallback(
    (key: string) => {
      const translation = translations[language][key as keyof typeof translations.cs]
      if (translation) {
        return translation
      }
      // Fallback: zkusit český překlad, pokud anglický neexistuje
      if (language === "en") {
        const csTranslation = translations.cs[key as keyof typeof translations.cs]
        if (csTranslation) {
          return csTranslation
        }
      }
      // Pokud překlad neexistuje, vrať klíč (pro debugging)
      console.warn(`Missing translation for key: ${key} in language: ${language}`)
      return key
    },
    [language],
  )

  const value = {
    language,
    setLanguage,
    t,
  }

  return <LanguageProviderContext.Provider value={value}>{children}</LanguageProviderContext.Provider>
}

export const useLanguage = () => {
  const context = React.useContext(LanguageProviderContext)

  if (context === undefined) throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}
