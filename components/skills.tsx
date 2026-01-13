"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useLanguage } from "@/components/language-provider"
import { Lightbulb, Palette, Code2, Wrench } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Skills() {
  const { language, t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const skillCategories = [
    {
      title: t("skills.product"),
      icon: Lightbulb,
      core:
        language === "en"
          ? [
              {
                name: "End to End",
                tooltip:
                  "Complete ownership of product lifecycle - from ideation and discovery through development, launch, and iteration based on user feedback.",
              },
              {
                name: "Success Metrics",
                tooltip:
                  "Defining and tracking key metrics to evaluate feature success and measure progress towards larger business goals.",
              },
              {
                name: "Roadmap Planning",
                tooltip:
                  "Strategic planning and prioritization of product initiatives aligned with business objectives and user needs.",
              },
              {
                name: "Agile/Scrum",
                tooltip: "Working in iterative sprints with cross-functional teams to deliver value incrementally.",
              },
            ]
          : [
              {
                name: "End to End",
                tooltip:
                  "Kompletní vlastnictví životního cyklu produktu - od ideace a discovery přes vývoj, launch až po iterace na základě zpětné vazby uživatelů.",
              },
              {
                name: "Metriky úspěchu",
                tooltip:
                  "Definuji metriky pro vyhodnocení toho, že daná featura je úspěšná a pomohla nám k dosažení větších cílů.",
              },
              {
                name: "Plánování roadmap",
                tooltip:
                  "Strategické plánování a prioritizace produktových iniciativ v souladu s obchodními cíli a potřebami uživatelů.",
              },
              {
                name: "Agile/Scrum",
                tooltip: "Práce v iterativních sprintech s cross-funkčními týmy pro postupné dodávání hodnoty.",
              },
            ],
      additional:
        language === "en"
          ? [
              {
                name: "Stakeholder Management",
                tooltip:
                  "Effective communication and alignment with stakeholders across the organization to drive product decisions.",
              },
              {
                name: "Market Research",
                tooltip: "Analyzing market trends, competitive landscape, and user needs to inform product strategy.",
              },
              {
                name: "Product Data Analytics",
                tooltip:
                  "Using data to understand user behavior, validate hypotheses, and make informed product decisions.",
              },
              {
                name: "Data-Driven Decisions",
                tooltip:
                  "Leveraging quantitative and qualitative data to prioritize features and optimize product performance.",
              },
            ]
          : [
              {
                name: "Stakeholder management",
                tooltip:
                  "Efektivní komunikace a sladění se stakeholdery napříč organizací pro podporu produktových rozhodnutí.",
              },
              {
                name: "Market research",
                tooltip: "Analýza tržních trendů, konkurence a potřeb uživatelů pro informování produktové strategie.",
              },
              {
                name: "Product Data Analytics",
                tooltip:
                  "Využívání dat pro pochopení chování uživatelů, validaci hypotéz a informovaná produktová rozhodnutí.",
              },
              {
                name: "Data-Driven rozhodování",
                tooltip:
                  "Využívání kvantitativních a kvalitativních dat pro prioritizaci funkcí a optimalizaci výkonu produktu.",
              },
            ],
    },
    {
      title: language === "en" ? "UX Design" : "UX Design",
      icon: Palette,
      core:
        language === "en"
          ? [
              {
                name: "User Research",
                tooltip:
                  "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points through interviews, surveys, and field studies.",
              },
              {
                name: "User Flow",
                tooltip:
                  "Mapping and designing the paths users take through a product to identify friction points and create seamless experiences.",
              },
              {
                name: "Wireframing & Prototyping",
                tooltip:
                  "Creating low and high-fidelity prototypes to visualize concepts, test ideas, and communicate design solutions before development.",
              },
              {
                name: "Service Blueprints",
                tooltip:
                  "Visualizing the entire service ecosystem including frontstage, backstage, and support processes to optimize end-to-end user experience.",
              },
            ]
          : [
              {
                name: "User Research",
                tooltip:
                  "Provádění kvalitativního a kvantitativního výzkumu pro pochopení potřeb, chování a problémů uživatelů prostřednictvím rozhovorů, dotazníků a terénních studií.",
              },
              {
                name: "User Flow",
                tooltip:
                  "Mapování a navrhování cest, kterými uživatelé procházejí produktem, pro identifikaci třecích bodů a vytváření plynulých zážitků.",
              },
              {
                name: "Wireframing & Prototyping",
                tooltip:
                  "Vytváření low a high-fidelity prototypů pro vizualizaci konceptů, testování nápadů a komunikaci designových řešení před vývojem.",
              },
              {
                name: "Service Blueprints",
                tooltip:
                  "Vizualizace celého servisního ekosystému včetně frontstage, backstage a podpůrných procesů pro optimalizaci end-to-end uživatelského zážitku.",
              },
            ],
      additional:
        language === "en"
          ? [
              {
                name: "Figma",
                tooltip:
                  "Professional design and prototyping tool for creating interfaces, interactive prototypes, and design systems with real-time collaboration.",
              },
              {
                name: "Design System",
                tooltip:
                  "Building and maintaining scalable component libraries with consistent patterns, guidelines, and documentation for product teams.",
              },
              {
                name: "FigJam",
                tooltip:
                  "Collaborative whiteboarding tool for brainstorming, workshops, user journey mapping, and visual team collaboration.",
              },
              {
                name: "Accessibility",
                tooltip:
                  "Ensuring products are usable by everyone, including people with disabilities, following WCAG guidelines and inclusive design principles.",
              },
            ]
          : [
              {
                name: "Figma",
                tooltip:
                  "Profesionální designový a prototypovací nástroj pro tvorbu rozhraní, interaktivních prototypů a designových systémů s real-time spoluprací.",
              },
              {
                name: "Design System",
                tooltip:
                  "Budování a udržování škálovatelných knihoven komponent s konzistentními vzory, guidelines a dokumentací pro produktové týmy.",
              },
              {
                name: "FigJam",
                tooltip:
                  "Kolaborativní whiteboard nástroj pro brainstorming, workshopy, mapování user journey a vizuální týmovou spolupráci.",
              },
              {
                name: "Přístupnost",
                tooltip:
                  "Zajištění, že produkty jsou použitelné pro všechny, včetně osob se zdravotním postižením, podle WCAG guidelines a principů inkluzivního designu.",
              },
            ],
    },
    {
      title: t("skills.technical"),
      icon: Code2,
      core:
        language === "en"
          ? [
              {
                name: "SQL",
                tooltip:
                  "Writing queries and understanding database structures to analyze data, validate product hypotheses, and work effectively with engineering teams.",
              },
              {
                name: "HTML/CSS",
                tooltip:
                  "Core web technologies enabling me to understand frontend constraints, review implementations, and communicate effectively with developers.",
              },
              {
                name: "GitHub",
                tooltip:
                  "Version control and collaboration platform - reviewing code, tracking issues, and collaborating with development teams on product delivery.",
              },
              {
                name: "Python",
                tooltip:
                  "Scripting for data analysis, automation, and prototyping - understanding technical implementation possibilities and data processing.",
              },
              {
                name: "JSON",
                tooltip:
                  "Working with structured data formats for API integrations, data exchange, and configuration - essential for product-technical collaboration.",
              },
            ]
          : [
              {
                name: "SQL",
                tooltip:
                  "Psaní dotazů a porozumění datové struktuře pro analýzu dat, validaci produktových hypotéz a efektivní spolupráci s technickými týmy.",
              },
              {
                name: "HTML/CSS",
                tooltip:
                  "Základní webové technologie umožňující mi rozumět frontend omezením, kontrolovat implementace a efektivně komunikovat s vývojáři.",
              },
              {
                name: "GitHub",
                tooltip:
                  "Platforma pro správu verzí a spolupráci - review kódu, sledování issues a spolupráce s vývojovými týmy na dodávání produktu.",
              },
              {
                name: "Python",
                tooltip:
                  "Skriptování pro analýzu dat, automatizaci a prototypování - porozumění technickým implementačním možnostem a zpracování dat.",
              },
              {
                name: "JSON",
                tooltip:
                  "Práce se strukturovanými datovými formáty pro API integrace, výměnu dat a konfiguraci - nezbytné pro produktově-technickou spolupráci.",
              },
            ],
      additional:
        language === "en"
          ? [
              {
                name: "AI-assisted solution design",
                tooltip:
                  "Leveraging AI tools like ChatGPT, Claude, and Copilot to accelerate problem-solving, prototype ideas, and explore technical solutions faster.",
              },
              {
                name: "Technical market analysis",
                tooltip:
                  "Evaluating emerging technologies, competitive technical solutions, and assessing technical feasibility of product features and integrations.",
              },
              {
                name: "AI-assisted workflow",
                tooltip:
                  "Integrating AI into daily workflows for documentation, research, data analysis, and automating repetitive tasks to increase productivity.",
              },
            ]
          : [
              {
                name: "AI-assisted solution design",
                tooltip:
                  "Využívání AI nástrojů jako ChatGPT, Claude a Copilot pro zrychlení řešení problémů, prototypování nápadů a zkoumání technických řešení.",
              },
              {
                name: "Technická tržní analýza",
                tooltip:
                  "Vyhodnocování vznikajících technologií, konkurenčních technických řešení a posuzování technické proveditelnosti produktových funkcí a integrací.",
              },
              {
                name: "AI-assisted workflow",
                tooltip:
                  "Integrace AI do denních workflow pro dokumentaci, research, analýzu dat a automatizaci opakujících se úkolů pro zvýšení produktivity.",
              },
            ],
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      core:
        language === "en"
          ? [
              {
                name: "Jira & Confluence",
                tooltip:
                  "Project management and documentation tools for organizing work, tracking progress, managing sprints, and documenting product decisions.",
              },
              {
                name: "Figma & FigJam",
                tooltip:
                  "Primary design and collaboration tools for creating prototypes, wireframes, and conducting visual brainstorming sessions with cross-functional teams.",
              },
              {
                name: "Miro",
                tooltip:
                  "Digital whiteboard for facilitating workshops, user journey mapping, roadmap planning, and remote team collaboration.",
              },
              {
                name: "Metabase",
                tooltip:
                  "Business intelligence tool for creating dashboards, analyzing product data, and sharing insights with stakeholders through self-service analytics.",
              },
              {
                name: "Google Analytics",
                tooltip:
                  "Web analytics platform for tracking user behavior, measuring conversion funnels, and understanding product usage patterns.",
              },
              {
                name: "Artificial Intelligence",
                tooltip:
                  "Leveraging AI tools and platforms to accelerate product development, automate workflows, and enhance decision-making capabilities.",
              },
            ]
          : [
              {
                name: "Jira & Confluence",
                tooltip:
                  "Projektové nástroje pro organizaci práce, sledování pokroku, správu sprintů a dokumentování produktových rozhodnutí.",
              },
              {
                name: "Figma & FigJam",
                tooltip:
                  "Primární designové a kolaborativní nástroje pro tvorbu prototypů, wireframů a provádění vizuálního brainstormingu s cross-funkčními týmy.",
              },
              {
                name: "Miro",
                tooltip:
                  "Digitální whiteboard pro facilitaci workshopů, mapování user journey, plánování roadmap a vzdálenou týmovou spolupráci.",
              },
              {
                name: "Metabase",
                tooltip:
                  "Business intelligence nástroj pro tvorbu dashboardů, analýzu produktových dat a sdílení insights se stakeholdery prostřednictvím self-service analytiky.",
              },
              {
                name: "Google Analytics",
                tooltip:
                  "Webová analytická platforma pro sledování chování uživatelů, měření konverzních funelů a porozumění vzorcům používání produktu.",
              },
              {
                name: "Umělá inteligence",
                tooltip:
                  "Využívání AI nástrojů a platforem pro zrychlení vývoje produktu, automatizaci workflow a zlepšení rozhodovacích schopností.",
              },
            ],
      additional:
        language === "en"
          ? [
              {
                name: "Local AI",
                tooltip:
                  "Running AI models locally (LLaMA, Mistral) for privacy-sensitive tasks, rapid prototyping, and offline AI-assisted development without cloud dependencies.",
              },
              {
                name: "Cursor",
                tooltip:
                  "AI-powered code editor enabling rapid prototyping, code generation, and technical exploration with integrated AI assistance for product validation.",
              },
              {
                name: "Visual Studio Code",
                tooltip:
                  "Professional code editor for reviewing technical implementations, writing scripts, and collaborating with engineering teams on product features.",
              },
              {
                name: "AI Models (ChatGPT, Claude, Grok, Gemini, Copilot)",
                tooltip:
                  "Using diverse AI models for research, content generation, technical problem-solving, data analysis, and accelerating product decision-making processes.",
              },
            ]
          : [
              {
                name: "Lokální AI",
                tooltip:
                  "Spouštění AI modelů lokálně (LLaMA, Mistral) pro úkoly citlivé na soukromí, rychlé prototypování a offline AI asistovaný vývoj bez cloudových závislostí.",
              },
              {
                name: "Cursor",
                tooltip:
                  "AI-powered editor umožňující rychlé prototypování, generování kódu a technické zkoumání s integrovanou AI asistencí pro validaci produktu.",
              },
              {
                name: "Visual Studio Code",
                tooltip:
                  "Profesionální editor kódu pro review technických implementací, psaní skriptů a spolupráci s technickými týmy na produktových funkcích.",
              },
              {
                name: "AI Modely (ChatGPT, Claude, Grok, Gemini, Copilot)",
                tooltip:
                  "Využívání různých AI modelů pro research, generování obsahu, řešení technických problémů, analýzu dat a zrychlení produktových rozhodovacích procesů.",
              },
            ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">{t("skills.title")}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{t("skills.description")}</p>
          </div>

          <TooltipProvider delayDuration={200}>
            <div
              ref={ref}
              className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {skillCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <Card
                    key={category.title}
                    className="hover:shadow-xl transition-all duration-300 border-2 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          {language === "en" ? "Core Competencies" : "Klíčové kompetence"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.core.map((skill) => (
                            <Tooltip key={skill.name}>
                              <TooltipTrigger asChild>
                                <Badge
                                  variant="default"
                                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-3 py-1.5 cursor-help"
                                >
                                  {skill.name}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p className="text-sm">{skill.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          {language === "en" ? "Additional Skills" : "Další dovednosti"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.additional.map((skill) => (
                            <Tooltip key={skill.name}>
                              <TooltipTrigger asChild>
                                <Badge
                                  variant="outline"
                                  className="border-primary/30 text-foreground hover:bg-primary/10 text-sm cursor-help"
                                >
                                  {skill.name}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p className="text-sm">{skill.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
