"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Play, ChevronLeft, ChevronRight, Pause, Star, Github, ExternalLink, X, Lock, Radio } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Project = {
  id: string
  title: string
  titleEn: string
  shortDescription: string
  shortDescriptionEn: string
  fullDescription: string
  fullDescriptionEn: string
  impact: string
  impactEn: string
  tags: string[]
  year: string
  image: string
  technologies: string[]
  role: string
  roleEn: string
  duration: string
  durationEn: string
  videoUrl?: string
  externalUrl?: string
  githubUrl?: string
  githubPrivate?: boolean
  featured?: boolean // Added featured flag to highlight important projects
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollAnimationRef = useRef<number | null>(null)
  const lastScrollTimeRef = useRef<number>(Date.now())
  const { language, t } = useLanguage()

  const projects: Project[] = [
    {
      id: "supplementor",
      title: "Supplementor",
      titleEn: "Supplementor",
      shortDescription: "Health Tech aplikace pro systematické sledování doplňků stravy",
      shortDescriptionEn: "Health Tech application for systematic supplement tracking",
      fullDescription: `DOPAD

Supplementor řeší problém zapomínání a nesystematičnosti v užívání doplňků stravy. Aplikace transformuje chaotické sledování suplementů do jednoduchého, intuitivního systému, který aktivně podporuje uživatele v dodržování jejich plánu. Výsledkem je nástroj, který neslouží jen k zaznamenávání dat, ale k budování dlouhodobých návyků, čímž zvyšuje efektivitu suplementace a zlepšuje zdravotní výsledky uživatelů.

Přínos: Výrazně zvýšená adherence k suplementačnímu plánu díky vizuálnímu feedbacku, progress trackingu a inteligentnímu rozvržení podle denních rytmů.

1. Vize projektu: Od chaosu k systému

Většina aplikací pro zdraví selhává v momentě, kdy uživatel potřebuje flexibilitu a personalizaci. Supplementor byl navržen jako "inteligentní asistent", který dokáže dynamicky přizpůsobit svou logiku různým životním stylům a potřebám. Cílem nebylo vytvořit další generický tracker, ale postavit Single Source of Truth pro komplexní správu suplementace s důrazem na dlouhodobou udržitelnost návyků.

2. Klíčové inovace

V této verzi jsem posunul hranice toho, co lze vytvořit v moderní full-stack aplikaci:

A. Hybridní systém správy plánů

Kombinace statických plánů (vytvořených uživatelem) a dynamických plánů (importovaných z AI) do jednoho koherentního systému, který eliminuje bariéry vstupu a umožňuje rychlé vytvoření personalizovaného plánu.

Dovednost: Architektura databázového schématu s kaskádovými vztahy, která umožňuje flexibilní správu více plánů současně s možností aktivace/deaktivace bez ztráty dat.

Přínos: Uživatel může vytvářet sezónní plány (např. "Zima 2026", "Tréninkový režim") a snadno mezi nimi přepínat, což zvyšuje dlouhodobou engagement.

B. AI-Powered Import Engine

Systém umožňuje import suplementačních plánů vytvořených pomocí AI (ChatGPT, Gemini, Claude) s automatickou validací JSON, extrakcí z markdown bloků a real-time preview před importem.

Dovednost: Implementace robustního parsingu a validace s Zod schématy, která zajišťuje data integrity i při nestandardních formátech odpovědí z AI.

Přínos: Uživatel získá personalizovaný plán během minut místo hodin ručního zadávání, což radikálně snižuje friction při onboarding.

C. Time-Based Organization System

Aplikace organizuje suplementy podle časových úseků dne (Ráno, Dopoledne, Poledne, Odpoledne, Večer, Před spaním) s možností hromadného označování a progress trackingem v reálném čase.

Dovednost: Optimalizované databázové dotazy s React Query pro efektivní synchronizaci stavu mezi klientem a serverem, včetně optimistických updatů pro plynulou UX.

Přínos: Uživatel vidí okamžitě svůj pokrok a může rychle označit celý časový úsek nebo den, což zvyšuje pravděpodobnost dokončení plánu.

D. Adaptive Progress Visualization

Systém dynamicky zobrazuje progress pomocí gradient progress baru, kruhového indikátoru a barevného kódování stavů, které se přizpůsobují kontextu (dnes vs. historie).

Dovednost: Implementace Framer Motion animací s optimalizovanými re-rendery, která zajišťuje plynulé 60fps i při komplexních state transitions.

Přínos: Vizuální feedback zvyšuje motivaci uživatele a vytváří pozitivní reinforcement loop, který podporuje dlouhodobé návyky.

3. UX Design & Informační architektura

Visual Efficiency: Minimalistické barevné schéma s jasnou hierarchií informací zabraňuje kognitivnímu přetížení. Skeleton loading stavy a smooth transitions vytvářejí pocit rychlosti a profesionality.

Confidence Level Scoring: Každý suplement má jasně definovaný stav (užitý/neužitý) s okamžitým vizuálním feedbackem, což přímo ovlivňuje psychologii uživatele a jeho disciplínu.

Empty States & Onboarding: Inteligentní empty states s call-to-action pro vytvoření prvního plánu nebo import z AI. Demo data pro nové uživatele umožňují okamžité vyzkoušení bez bariér.

Závěr

Supplementor je důkazem mé silné stránky: vzít komplexní problém (sledování zdravotních návyků) a vytvořit z něj uživatelsky přívětivý produkt se skutečným byznysovým dopadem. Ukazuje mou schopnost analytického myšlení, precizní exekuce a neustálé snahy o inovaci tam, kde standardní řešení selhávají.

Projekt demonstruje:
Architektonické myšlení: Čistá separace concerns mezi frontend/backend/shared
Product thinking: Každá funkce má jasný user benefit a měřitelný dopad
Technical excellence: Type-safe end-to-end s Drizzle ORM, Zod validací a TypeScript
UX mastery: Micro-interactions, animace a responzivní design pro všechny zařízení`,
      fullDescriptionEn: `IMPACT

Supplementor solves the problem of forgetting and inconsistency in supplement usage. The application transforms chaotic supplement tracking into a simple, intuitive system that actively supports users in following their plan. The result is a tool that doesn't just record data, but builds long-term habits, increasing supplement efficiency and improving user health outcomes.

Benefit: Significantly increased adherence to supplement plan thanks to visual feedback, progress tracking, and intelligent scheduling according to daily rhythms.

1. Project Vision: From Chaos to System

Most health applications fail when the user needs flexibility and personalization. Supplementor was designed as an "intelligent assistant" that can dynamically adapt its logic to different lifestyles and needs. The goal was not to create another generic tracker, but to build a Single Source of Truth for comprehensive supplement management with emphasis on long-term habit sustainability.

2. Key Innovations

In this version, I pushed the boundaries of what can be created in a modern full-stack application:

A. Hybrid Plan Management System

Combining static plans (created by user) and dynamic plans (imported from AI) into one coherent system that eliminates entry barriers and enables quick creation of personalized plan.

Skill: Database schema architecture with cascading relationships that enables flexible management of multiple plans simultaneously with activation/deactivation capability without data loss.

Benefit: User can create seasonal plans (e.g., "Winter 2026", "Training regime") and easily switch between them, increasing long-term engagement.

B. AI-Powered Import Engine

The system allows import of supplement plans created using AI (ChatGPT, Gemini, Claude) with automatic JSON validation, extraction from markdown blocks, and real-time preview before import.

Skill: Implementation of robust parsing and validation with Zod schemas that ensures data integrity even with non-standard response formats from AI.

Benefit: User gets personalized plan within minutes instead of hours of manual entry, radically reducing friction during onboarding.

C. Time-Based Organization System

The application organizes supplements according to time periods of the day (Morning, Mid-morning, Noon, Afternoon, Evening, Before bed) with bulk marking capability and real-time progress tracking.

Skill: Optimized database queries with React Query for efficient state synchronization between client and server, including optimistic updates for smooth UX.

Benefit: User sees their progress immediately and can quickly mark entire time period or day, increasing probability of plan completion.

D. Adaptive Progress Visualization

The system dynamically displays progress using gradient progress bar, circular indicator, and color-coded states that adapt to context (today vs. history).

Skill: Implementation of Framer Motion animations with optimized re-renders that ensures smooth 60fps even with complex state transitions.

Benefit: Visual feedback increases user motivation and creates positive reinforcement loop that supports long-term habits.

3. UX Design & Information Architecture

Visual Efficiency: Minimalist color scheme with clear information hierarchy prevents cognitive overload. Skeleton loading states and smooth transitions create feeling of speed and professionalism.

Confidence Level Scoring: Each supplement has clearly defined state (taken/not taken) with immediate visual feedback, which directly affects user psychology and discipline.

Empty States & Onboarding: Intelligent empty states with call-to-action for creating first plan or importing from AI. Demo data for new users enables immediate trial without barriers.

Conclusion

Supplementor is proof of my strength: taking a complex problem (health habit tracking) and turning it into a user-friendly product with real business impact. It demonstrates my ability for analytical thinking, precise execution, and constant drive for innovation where standard solutions fail.

Project demonstrates:
Architectural thinking: Clean separation of concerns between frontend/backend/shared
Product thinking: Every feature has clear user benefit and measurable impact
Technical excellence: Type-safe end-to-end with Drizzle ORM, Zod validation, and TypeScript
UX mastery: Micro-interactions, animations, and responsive design for all devices`,
      impact: "Supplementor řeší problém zapomínání a nesystematičnosti v užívání doplňků stravy. Aplikace transformuje chaotické sledování suplementů do jednoduchého, intuitivního systému, který aktivně podporuje uživatele v dodržování jejich plánu. Výsledkem je nástroj, který neslouží jen k zaznamenávání dat, ale k budování dlouhodobých návyků, čímž zvyšuje efektivitu suplementace a zlepšuje zdravotní výsledky uživatelů.",
      impactEn: "Supplementor solves the problem of forgetting and inconsistency in supplement usage. The application transforms chaotic supplement tracking into a simple, intuitive system that actively supports users in following their plan. The result is a tool that doesn't just record data, but builds long-term habits, increasing supplement efficiency and improving user health outcomes.",
      tags: ["Health Tech", "User Experience Design", "Data Management", "Product Development"],
      year: "2026",
      image: "/supplementor_img.jpg",
      technologies: ["React + TypeScript", "Express.js + PostgreSQL", "Drizzle ORM", "AI Integration"],
      role: "Full-Stack Developer & Product Owner",
      roleEn: "Full-Stack Developer & Product Owner",
      duration: "2 dny",
      durationEn: "2 days",
      externalUrl: "https://supplementor.up.railway.app/",
      githubUrl: "",
      githubPrivate: false,
      featured: true,
    },
    {
      id: "table-logic-extractor",
      title: "Table Logic Extractor v2.0",
      titleEn: "Table Logic Extractor v2.0",
      shortDescription: "Ukázka komplexní softwarové logiky pro finanční trhy",
      shortDescriptionEn: "Complex software logic for financial markets",
      fullDescription: `1. Úvod: Od dat k rozhodování (Project Summary)

Tento projekt demonstruje moji schopnost transformovat obrovské množství tržních dat do jediného, jasného a akceschopného obchodního doporučení. Table Logic Extractor není jen indikátor; je to kompletní analytické jádro (engine), které v reálném čase provádí paralelní analýzu napříč různými dimenzemi trhu – časem, volatilitou, trendem a momentem.

Cílem bylo eliminovat lidské chyby a rozhodovací paralýzu poskytnutím konsolidovaného pohledu, který by běžný obchodník musel ručně skládat z desítek grafů a metrik.

2. Architektura Inovace a Klíčové Dovednosti (Core Features)

Zde jsou tři klíčové oblasti, kde jsem do kódu implementoval pokročilou logiku:

A. Multi-Časová Synchronicita a Vážení (MTF Weighted Analysis)

Běžná analýza sleduje pouze jeden časový rámec (např. 5 minut). Já jsem vytvořil systém, který simultánně analyzuje 4 různé časové rámce (M1 až M30).

Dovednost: Využití pokročilých funkcí Pine Script k paralelnímu zpracování dat (Data Mining across timelines).

Přínos: Signál je považován za silný, pouze pokud je potvrzen napříč několika časovými horizonty, což dramaticky zvyšuje jeho spolehlivost. Logika používá vážené skórování (weighted scoring) různých indikátorů (EMA, MACD, RSI), aby určila celkovou "sílu" signálu.

B. Automatická Detekce Obchodního Prostředí (Trading Style Detection)

Trh se neustále mění. Strategie pro Trendový trh (TREND TRADING) nefunguje v trhu Bočním (RANGE TRADING). Vytvořil jsem unikátní algoritmus, který automaticky rozpozná aktuální obchodní režim (Trend, Range, Breakout, Scalping) a podle toho dynamicky přizpůsobí jak svou logiku, tak i finální doporučení.

Dovednost: Implementace komplexních stavových modelů a rozhodovacích stromů v kódu.

Přínos: Zajištění, že doporučení jsou relevantní a optimalizovaná pro daný kontext, což je kritické pro výkonnost.

C. Integrace Řízení Rizika a Analýza Proximity (Risk & Proximity Analysis)

Skript nekončí u nákupního/prodejního signálu. Poskytuje i kritické řízení rizik:

S/R Proximity: V reálném čase počítá vzdálenost k nejdůležitějším S/R (Support/Resistance) úrovním (včetně Fibonacci úrovní) a klasifikuje je jako Very Near (Velmi blízko) nebo Far (Daleko). Tato analýza proximity pomáhá uživateli zvolit nejlepší vstupní/výstupní bod.

Kalkulace SL/TP: Pro každé doporučení automaticky vypočítá úrovně Stop Loss a Take Profit (s pevně definovaným risk/reward poměrem), čímž do procesu vnáší strukturovaný risk management.

3. Vizualizace Úspěchu: Konsolidace Dat

Veškerá tato komplexní logika je transformována do jediné, čitelné Informační Tabulky (14 metrik). Tato tabulka je klíčovým rozhraním, které:

• Zobrazuje stav trendu a volatilitu.
• Upozorňuje na detekované divergence (indikátor potenciální změny trendu).
• Poskytuje Konečné Doporučení s přiřazenou Úrovní Spolehlivosti (Confidence Level).

Závěr: Tento projekt je ukázkou mé schopnosti vyvinout sofistikované analytické softwarové řešení, které efektivně zpracovává složitá data a prezentuje je ve formátu, který je pro konečného uživatele okamžitě použitelný a snižuje bariéru pro informované rozhodování.`,
      fullDescriptionEn: `1. Introduction: From Data to Decision (Project Summary)

This project demonstrates my ability to transform vast amounts of market data into a single, clear, and actionable trading recommendation. Table Logic Extractor is not just an indicator; it's a complete analytical engine that performs real-time parallel analysis across different market dimensions – time, volatility, trend, and momentum.

The goal was to eliminate human errors and decision paralysis by providing a consolidated view that a typical trader would have to manually assemble from dozens of charts and metrics.

2. Innovation Architecture and Key Skills (Core Features)

Here are three key areas where I implemented advanced logic in the code:

A. Multi-Timeframe Synchronicity and Weighting (MTF Weighted Analysis)

Standard analysis tracks only one timeframe (e.g., 5 minutes). I created a system that simultaneously analyzes 4 different timeframes (M1 to M30).

Skill: Utilizing advanced Pine Script functions for parallel data processing (Data Mining across timelines).

Benefit: A signal is considered strong only if confirmed across multiple time horizons, dramatically increasing its reliability. The logic uses weighted scoring of various indicators (EMA, MACD, RSI) to determine the overall "strength" of the signal.

B. Automatic Trading Environment Detection (Trading Style Detection)

The market constantly changes. A strategy for Trend markets (TREND TRADING) doesn't work in Range markets (RANGE TRADING). I created a unique algorithm that automatically recognizes the current trading regime (Trend, Range, Breakout, Scalping) and dynamically adjusts both its logic and final recommendations accordingly.

Skill: Implementation of complex state models and decision trees in code.

Benefit: Ensuring recommendations are relevant and optimized for the given context, which is critical for performance.

C. Risk Management Integration and Proximity Analysis (Risk & Proximity Analysis)

The script doesn't end with a buy/sell signal. It also provides critical risk management:

S/R Proximity: In real-time, it calculates the distance to the most important S/R (Support/Resistance) levels (including Fibonacci levels) and classifies them as Very Near or Far. This proximity analysis helps the user choose the best entry/exit point.

SL/TP Calculation: For each recommendation, it automatically calculates Stop Loss and Take Profit levels (with a fixed risk/reward ratio), introducing structured risk management into the process.

3. Success Visualization: Data Consolidation

All this complex logic is transformed into a single, readable Information Table (14 metrics). This table is the key interface that:

• Displays trend status and volatility.
• Alerts to detected divergences (indicator of potential trend change).
• Provides Final Recommendation with assigned Confidence Level.

Conclusion: This project demonstrates my ability to develop sophisticated analytical software solutions that efficiently process complex data and present it in a format that is immediately usable for end users and reduces the barrier to informed decision-making.`,
      impact: "Table Logic Extractor konsoliduje komplexní multi-časovou a multi-indikátorovou analýzu do jediného, jasného obchodního doporučení, čímž eliminuje nejistotu a automaticky poskytuje klíčové informace o tržním režimu, řízení rizika a optimálním umístění Stop Lossu, což vede k disciplinovanějšímu a efektivnějšímu obchodování",
      impactEn: "Table Logic Extractor consolidates complex multi-timeframe and multi-indicator analysis into a single, clear trading recommendation, eliminating uncertainty and automatically providing key information about market regime, risk management, and optimal Stop Loss placement, leading to more disciplined and efficient trading",
      tags: ["Data Mining", "Algorithm Development", "Risk Management", "Financial Analysis"],
      year: "2025",
      image: "/images/TABLE LOGIC EXTRACTOR.jpg",
      technologies: ["Pine Script", "TradingView", "Financial Data Analysis", "Algorithm Design"],
      role: "Algorithm Developer & Financial Analyst",
      roleEn: "Algorithm Developer & Financial Analyst",
      duration: "14 dní",
      durationEn: "14 days",
      externalUrl: "https://www.tradingview.com/script/f0wHmYE5-Table-Logic-Extractor/",
      githubUrl: "https://github.com/toz-panzmoravy/TTop",
      githubPrivate: false,
      featured: true,
    },
    {
      id: "complexity-v3",
      title: "Complexity v3",
      titleEn: "Complexity v3",
      shortDescription: "Next-Gen Market Intelligence Engine 2025 • TradingView Open Source Project",
      shortDescriptionEn: "Next-Gen Market Intelligence Engine 2025 • TradingView Open Source Project",
      fullDescription: `1. Vize projektu: Od chaosu k čistotě (The Vision)

Většina indikátorů selhává v momentě, kdy se změní tržní režim (z trendu do strany). Complexity v3 byla navržena jako „inteligentní filtr", který dokáže dynamicky přepínat svou logiku. Cílem nebylo přidat další čáry do grafu, ale vytvořit Single Source of Truth pro jakýkoliv finanční instrument.

2. Klíčové inovace (Core Innovation)

V této verzi jsem posunul hranice toho, co lze v Pine Scriptu vytvořit:

A. Hybridní analytické jádro (Hybrid Analytical Core)

Kombinace momentových indikátorů (RSI, MACD) a trendových filtrů (EMA) do jednoho váženého algoritmu, který eliminuje falešné signály (tzv. "whipsaws").

Dovednost: Vytvoření váženého algoritmu kombinujícího různé typy indikátorů pro eliminaci falešných signálů.

Přínos: Výrazně snížený počet falešných signálů, což zvyšuje spolehlivost a důvěru uživatele v nástroj.

B. Multi-Timeframe Engine (MTF)

Algoritmus v reálném čase sleduje hierarchii trendů. Uživatel vidí shodu napříč časovými rámci, což je kritické pro řízení rizika.

Dovednost: Implementace real-time analýzy napříč více časovými rámci s hierarchickou strukturou trendů.

Přínos: Uživatel získává komplexní pohled na trh, který mu umožňuje lépe řídit rizika a identifikovat silné signály.

C. Adaptive Volatility Shield

Systém automaticky upravuje citlivost výpočtů na základě aktuální volatility (ATR), takže zůstává přesný jak v klidných, tak v turbulentních trzích.

Dovednost: Dynamická adaptace algoritmu na základě volatility trhu pomocí ATR analýzy.

Přínos: Konzistentní přesnost napříč různými tržními podmínkami, což zvyšuje užitečnost nástroje v reálném obchodování.

3. UX Design & Informační architektura

Jako Product Owner jsem se soustředil na to, aby i přes komplexní logiku „pod kapotou" byl výstup pro uživatele triviální na pochopení:

Informativní tabulka v3: Redesignované rozhraní, které prioritizuje nejdůležitější metriky (Trend, Momentum, Volatilita).

Confidence Level Scoring: Každý signál je ohodnocen úrovní spolehlivosti, což přímo ovlivňuje psychologii a disciplínu uživatele.

Visual Efficiency: Minimalistické barevné schéma v grafu zabraňuje kognitivnímu přetížení.

Závěr: Ukázka mého přístupu k produktu

Complexity v3 je důkazem mé silné stránky: vzít extrémně složitý proces a vytvořit z něj uživatelsky přívětivý produkt se skutečným byznysovým dopadem. Ukazuje moji schopnost analytického myšlení, precizní exekuce a neustálé snahy o inovaci tam, kde standardní řešení selhávají.`,
      fullDescriptionEn: `1. Project Vision: From Chaos to Clarity (The Vision)

Most indicators fail when the market regime changes (from trend to sideways). Complexity v3 was designed as an "intelligent filter" that can dynamically switch its logic. The goal was not to add more lines to the chart, but to create a Single Source of Truth for any financial instrument.

2. Core Innovation

In this version, I pushed the boundaries of what can be created in Pine Script:

A. Hybrid Analytical Core

Combining momentum indicators (RSI, MACD) and trend filters (EMA) into one weighted algorithm that eliminates false signals (so-called "whipsaws").

Skill: Creating a weighted algorithm combining different types of indicators to eliminate false signals.

Benefit: Significantly reduced number of false signals, increasing reliability and user confidence in the tool.

B. Multi-Timeframe Engine (MTF)

The algorithm tracks trend hierarchy in real-time. The user sees alignment across timeframes, which is critical for risk management.

Skill: Implementation of real-time analysis across multiple timeframes with hierarchical trend structure.

Benefit: User gains a comprehensive market view that enables better risk management and identification of strong signals.

C. Adaptive Volatility Shield

The system automatically adjusts calculation sensitivity based on current volatility (ATR), so it remains accurate in both calm and turbulent markets.

Skill: Dynamic adaptation of the algorithm based on market volatility using ATR analysis.

Benefit: Consistent accuracy across different market conditions, increasing tool usefulness in real trading.

3. UX Design & Information Architecture

As a Product Owner, I focused on ensuring that despite complex logic "under the hood", the output is trivial for users to understand:

Informative Table v3: Redesigned interface that prioritizes the most important metrics (Trend, Momentum, Volatility).

Confidence Level Scoring: Each signal is rated with a confidence level, which directly affects user psychology and discipline.

Visual Efficiency: Minimalist color scheme in the chart prevents cognitive overload.

Conclusion: Demonstration of My Product Approach

Complexity v3 is proof of my strength: taking an extremely complex process and turning it into a user-friendly product with real business impact. It demonstrates my ability for analytical thinking, precise execution, and constant drive for innovation where standard solutions fail.`,
      impact: "Complexity v3 řeší největší problém moderního tradingu: informační šum. Projekt transformuje desítky protichůdných tržních signálů do jednoho koherentního analytického rámce. Výsledkem je nástroj, který neslouží jen k zobrazení dat, ale k jejich aktivní interpretaci, čímž radikálně zrychluje proces rozhodování pod tlakem.",
      impactEn: "Complexity v3 solves the biggest problem in modern trading: information noise. The project transforms dozens of conflicting market signals into one coherent analytical framework. The result is a tool that doesn't just display data, but actively interprets it, radically accelerating the decision-making process under pressure.",
      tags: ["Algorithmic Trading", "Financial UX", "Signal Filtering", "Risk Management"],
      year: "2025",
      image: "/images/Complexity V3.jpg",
      technologies: ["Pine Script v5", "Data Mining", "Algorithm Architecture"],
      role: "Algorithm Developer & Product Owner",
      roleEn: "Algorithm Developer & Product Owner",
      duration: "3 měsíce",
      durationEn: "3 months",
      externalUrl: "https://www.tradingview.com/script/t3FSg7Ph-Complexity-v3-2/",
      githubUrl: "https://github.com/toz-panzmoravy/Complexity_Indicator",
      githubPrivate: false,
      featured: true,
    },
    {
      id: "xauron",
      title: "XAURON: AI-Driven Trading Ecosystem",
      titleEn: "XAURON: AI-Driven Trading Ecosystem",
      shortDescription: "Automated Gold Trading Engine (XAUUSD) 2025 • Python & MetaTrader 5 Integration",
      shortDescriptionEn: "Automated Gold Trading Engine (XAUUSD) 2025 • Python & MetaTrader 5 Integration",
      fullDescription: `1. AI & Inovace: Inteligentní rozhodování v reálném čase

Namísto prostého následování pravidel XAURON „přemýšlí" pomocí pokročilých technologií:

A. AI-Assisted Decisions

Integrace s LM Studio umožňuje botu provádět kontextové rozhodování na základě aktuální tržní situace.

Dovednost: Integrace lokálních LLM modelů a Prompt Engineering v tradingu pro kontextové rozhodování.

Přínos: Systém dokáže lépe interpretovat komplexní tržní situace a přizpůsobit se měnícím se podmínkám, což vede k lepším výsledkům než rigidní pravidla.

B. AI Loss Prevention System

Aktivní monitoring, který každých 30 sekund analyzuje otevřené pozice a přiřazuje jim úroveň rizika (od LOW po CRITICAL).

Dovednost: Implementace real-time risk monitoring systému s automatickou klasifikací rizika.

Přínos: Proaktivní ochrana kapitálu díky včasné detekci potenciálně problematických pozic a automatickému řízení rizika.

C. Trend Bias V2

Přechod od binárního rozhodování k jemnému scoring systému (-100 až +100), který dynamicky upravuje velikost pozic podle síly trendu.

Dovednost: Vytvoření dynamického scoring systému pro měření síly trendu a adaptivní position sizing.

Přínos: Maximální využití silných trendů při zachování konzervativního přístupu v nejistých podmínkách, což vede k 20-50% vyššímu využití tržních příležitostí.

2. Produktová architektura a Risk Management

Jako autor a architekt jsem systém navrhl jako modulární ekosystém, kde každá část plní specifickou funkci pro stabilitu celku:

Multi-Timeframe analýza: Simultánní zpracování dat z rámců M1, M3 a M5 pro potvrzení signálů a eliminaci falešných vstupů.

Order Management: Automatizovaná správa Pending Orders (BUY/SELL STOP) s analýzou v 60s intervalech.

Dynamický Position Sizing: Velikost obchodů se automaticky škáluje (od 50 % do 130 % základní pozice) podle tržního kontextu, což maximalizuje zisky v silných trendech.

3. Business Value & Strategický nadhled

Projekt demonstruje schopnost doručit „production-ready" řešení, které eliminuje lidské emoce a chyby:

Disciplína a 24/7 provoz: Plně autonomní systém bez nutnosti manuálního monitoringu.

Adaptivní strategie: Schopnost inteligentně přepínat mezi trendovým a counter-trendovým obchodováním.

Transparentnost: Detailní live dashboarding a komplexní logging pro zpětnou analýzu výkonnosti.

Technické dovednosti demonstrované na projektu

Algoritmický vývoj: Implementace komplexních stavových modelů a rozhodovacích stromů.

Integrace AI/ML: Praktické nasazení lokálních LLM modelů a Prompt Engineering v tradingu.

Data Processing: Real-time agregace a zpracování velkých objemů tržních dat pomocí Pandas a NumPy.`,
      fullDescriptionEn: `1. AI & Innovation: Intelligent Real-Time Decision Making

Instead of simply following rules, XAURON "thinks" using advanced technologies:

A. AI-Assisted Decisions

Integration with LM Studio enables the bot to make contextual decisions based on current market situation.

Skill: Integration of local LLM models and Prompt Engineering in trading for contextual decision-making.

Benefit: System can better interpret complex market situations and adapt to changing conditions, leading to better results than rigid rules.

B. AI Loss Prevention System

Active monitoring that analyzes open positions every 30 seconds and assigns them a risk level (from LOW to CRITICAL).

Skill: Implementation of real-time risk monitoring system with automatic risk classification.

Benefit: Proactive capital protection through early detection of potentially problematic positions and automatic risk management.

C. Trend Bias V2

Transition from binary decision-making to a fine scoring system (-100 to +100) that dynamically adjusts position size based on trend strength.

Skill: Creating a dynamic scoring system for measuring trend strength and adaptive position sizing.

Benefit: Maximum utilization of strong trends while maintaining a conservative approach in uncertain conditions, leading to 20-50% higher utilization of market opportunities.

2. Product Architecture and Risk Management

As author and architect, I designed the system as a modular ecosystem where each part fulfills a specific function for overall stability:

Multi-Timeframe Analysis: Simultaneous processing of data from M1, M3, and M5 timeframes for signal confirmation and elimination of false entries.

Order Management: Automated management of Pending Orders (BUY/SELL STOP) with analysis in 60s intervals.

Dynamic Position Sizing: Trade size automatically scales (from 50% to 130% of base position) according to market context, maximizing profits in strong trends.

3. Business Value & Strategic Overview

The project demonstrates the ability to deliver a "production-ready" solution that eliminates human emotions and errors:

Discipline and 24/7 Operation: Fully autonomous system without the need for manual monitoring.

Adaptive Strategy: Ability to intelligently switch between trend and counter-trend trading.

Transparency: Detailed live dashboarding and comprehensive logging for performance back-analysis.

Technical Skills Demonstrated on the Project

Algorithmic Development: Implementation of complex state models and decision trees.

AI/ML Integration: Practical deployment of local LLM models and Prompt Engineering in trading.

Data Processing: Real-time aggregation and processing of large volumes of market data using Pandas and NumPy.`,
      impact: "XAURON je komplexní autonomní systém pro obchodování zlata, který řeší největší slabinu algoritmických systémů – rigiditu. Díky integraci lokálního AI modelu a dynamickému scoringu tržního trendu (Trend Bias V2) dosahuje systém o 20–50 % vyšší využitelnosti tržních příležitostí při zachování agresivní ochrany kapitálu.",
      impactEn: "XAURON is a comprehensive autonomous gold trading system that solves the biggest weakness of algorithmic systems – rigidity. Through integration of local AI model and dynamic market trend scoring (Trend Bias V2), the system achieves 20-50% higher utilization of market opportunities while maintaining aggressive capital protection.",
      tags: ["Algorithmic Trading", "AI Implementation", "Risk Engineering", "System Architecture"],
      year: "2025",
      image: "/images/Xauron.jpg",
      technologies: ["Python 3.8+", "MetaTrader5 API", "LM Studio (Local LLM)", "Pandas", "NumPy"],
      role: "System Architect & Algorithm Developer",
      roleEn: "System Architect & Algorithm Developer",
      duration: "4 měsíce",
      durationEn: "4 months",
      externalUrl: "",
      githubUrl: "https://github.com/toz-panzmoravy/XAURON",
      githubPrivate: true,
      featured: true,
    },
    {
      id: "fibonacci-pro",
      title: "Fibonacci_Pro: Smart Trading Intelligence",
      titleEn: "Fibonacci_Pro: Smart Trading Intelligence",
      shortDescription: "Advanced Auto-Fibonacci Retracement & Signal Engine 2025 • Pine Script v6 (TradingView)",
      shortDescriptionEn: "Advanced Auto-Fibonacci Retracement & Signal Engine 2025 • Pine Script v6 (TradingView)",
      fullDescription: `DOPAD

Fibonacci_Pro řeší jeden z největších problémů technické analýzy: subjektivitu. Tento indikátor automatizuje kreslení Fibonacciho hladin na základě matematicky definovaných pivotů (ZigZag) a kombinuje je s objemovou a svíčkovou konfirmací. Výsledkem je exaktní nástroj, který eliminuje emoce a manuální chyby při určování klíčových nákupních a prodejních zón.

1. Inteligentní Exekuce: Více než jen čáry v grafu

Indikátor nefunguje pouze jako kreslící nástroj, ale jako aktivní analytický engine:

Auto-Pivot Detection: Algoritmus automaticky identifikuje nejvýznamnější High a Low body pomocí ZigZag logiky a okamžitě přepočítává Fibonacciho úrovně.

Smart Signals: Generuje BUY/SELL signály (zelené/červené trojúhelníky) pouze v momentě, kdy dojde k souběhu tří faktorů:

Protnutí klíčové Fib hladiny (např. 0.618 Golden Pocket).

Potvrzení směru svíčkovou formací.

Volume Confirmation: (Volitelné) Ověření, že pohyb je podložen reálným tržním zájmem (Volume > SMA20).

2. Technická architektura (Pine Script v6)

Jako vývojář jsem využil nejnovější verzi jazyka Pine Script pro maximální efektivitu a čistotu kódu:

Dynamic Level Logic: Systém umožňuje uživateli plnou kontrolu nad tím, které hladiny (Retracements i Extensions) jsou aktivní, což umožňuje adaptaci na různé obchodní styly (Scalping vs. Swing).

Built-in Alert System: Integrovaný systém upozornění, který v reálném čase notifikuje uživatele o vygenerovaných signálech nebo protnutí hladin, což umožňuje obchodování i bez nutnosti neustálého sledování obrazovky.

Optimized Rendering: Kód je navržen tak, aby minimálně zatěžoval výpočetní výkon TradingView i při analýze historických dat.

3. Strategický přínos (Business Logic)

Standardizace analýzy: Poskytuje týmu nebo uživateli jednotný pohled na trh.

Adaptabilita: Funguje napříč všemi časovými rámci (od M1 po Daily) a aktivy (Krypto, Forex, Akcie).

Risk Filtering: Díky objemové konfirmaci výrazně snižuje počet "falešných průrazů" (Fakeouts), které jsou běžné v netrendových trzích.

Technické dovednosti demonstrované na projektu

Kvantitativní analýza: Programování matematických modelů pro predikci cenových zvratů.

UI/UX Design: Vytvoření přehledného a intuitivního vizuálního rozhraní pro komplexní data.

Pine Script Mastery: Pokročilá práce s poli, technickými indikátory a logikou exekuce v prostředí TradingView.`,
      fullDescriptionEn: `IMPACT

Fibonacci_Pro solves one of the biggest problems in technical analysis: subjectivity. This indicator automates the drawing of Fibonacci levels based on mathematically defined pivots (ZigZag) and combines them with volume and candlestick confirmation. The result is an exact tool that eliminates emotions and manual errors when determining key buying and selling zones.

1. Intelligent Execution: More Than Just Lines on a Chart

The indicator doesn't just function as a drawing tool, but as an active analytical engine:

Auto-Pivot Detection: The algorithm automatically identifies the most significant High and Low points using ZigZag logic and immediately recalculates Fibonacci levels.

Smart Signals: Generates BUY/SELL signals (green/red triangles) only when three factors converge:

Breakthrough of key Fib level (e.g., 0.618 Golden Pocket).

Direction confirmation by candlestick formation.

Volume Confirmation: (Optional) Verification that the movement is supported by real market interest (Volume > SMA20).

2. Technical Architecture (Pine Script v6)

As a developer, I utilized the latest Pine Script language version for maximum efficiency and code cleanliness:

Dynamic Level Logic: The system allows the user full control over which levels (Retracements and Extensions) are active, enabling adaptation to different trading styles (Scalping vs. Swing).

Built-in Alert System: Integrated alert system that notifies users in real-time about generated signals or level breakouts, enabling trading without the need for constant screen monitoring.

Optimized Rendering: The code is designed to minimally burden TradingView's computational performance even when analyzing historical data.

3. Strategic Benefit (Business Logic)

Analysis Standardization: Provides team or user with a unified market view.

Adaptability: Works across all timeframes (from M1 to Daily) and assets (Crypto, Forex, Stocks).

Risk Filtering: Significantly reduces the number of "false breakouts" (Fakeouts) common in non-trending markets thanks to volume confirmation.

Technical Skills Demonstrated on the Project

Quantitative Analysis: Programming mathematical models for price reversal prediction.

UI/UX Design: Creating a clear and intuitive visual interface for complex data.

Pine Script Mastery: Advanced work with arrays, technical indicators, and execution logic in TradingView environment.`,
      impact: "Fibonacci_Pro eliminuje subjektivitu v technické analýze automatizací kreslení Fibonacciho hladin a kombinací multi-factor confirmation (cena, svíčky, objem). Výsledkem je objektivní nástroj, který výrazně snižuje počet falešných signálů a poskytuje konzistentní analýzu napříč všemi časovými rámci a aktivy, čímž zvyšuje disciplínu a efektivitu obchodování.",
      impactEn: "Fibonacci_Pro eliminates subjectivity in technical analysis by automating Fibonacci level drawing and combining multi-factor confirmation (price, candles, volume). The result is an objective tool that significantly reduces false signals and provides consistent analysis across all timeframes and assets, increasing trading discipline and efficiency.",
      tags: ["Algorithm Development", "Market Geometry", "Volume Analysis", "UX/UI for Traders"],
      year: "2025",
      image: "/images/FibonacciPro.jpg",
      technologies: ["Pine Script v6", "Quantitative Technical Analysis", "ZigZag Algorithms", "TradingView"],
      role: "Algorithm Developer & Financial Analyst",
      roleEn: "Algorithm Developer & Financial Analyst",
      duration: "3 týdny",
      durationEn: "3 weeks",
      githubUrl: "https://github.com/toz-panzmoravy/Fibonacci_Pro/blob/main/fibpro%20v0.2",
      githubPrivate: false,
      featured: false,
    },
    {
      id: "eurusd-ai-trader",
      title: "EURUSD Automated AI Trader",
      titleEn: "EURUSD Automated AI Trader",
      shortDescription: "Autonomous Multi-Timeframe System with LLM Intelligence 2025 • Python • MetaTrader 5 • LM Studio (Mistral-7B)",
      shortDescriptionEn: "Autonomous Multi-Timeframe System with LLM Intelligence 2025 • Python • MetaTrader 5 • LM Studio (Mistral-7B)",
      fullDescription: `PROFIL PROJEKTU

Tento systém představuje "bridge" mezi klasickým algoritmickým obchodováním a moderní umělou inteligencí. Na rozdíl od běžných botů, které spoléhají pouze na fixní matematické vzorce, EURUSD Automated System využívá lokální instanci LLM (Mistral-7B) k hloubkové analýze tržních kontextů a validaci signálů v reálném čase.

1. AI-Powered Decision Core

Srdcem systému není jen indikátor, ale komplexní analytický proces:

LLM Signal Validation: Každý technický signál (např. RSI + MACD crossover) je odeslán do LM Studia, kde model Mistral-7B vyhodnotí tržní strukturu a potvrdí, zda je vstup bezpečný.

Dovednost: Integrace Pythonu s lokálními LLM modely přes API pro real-time validaci obchodních signálů.

Přínos: Eliminace falešných signálů díky kontextové analýze AI, což výrazně zvyšuje spolehlivost a profit factor systému.

Pattern Recognition: Systém analyzuje historická data (M1, M3, M5, M10) a hledá skryté korelace, které běžné indikátory přehlédnou.

Dovednost: Implementace pokročilých algoritmů pro detekci patternů napříč více časovými rámci.

Přínos: Identifikace obchodních příležitostí, které by zůstaly skryté při použití pouze standardních technických indikátorů.

Local Infrastructure: Díky integraci LM Studia probíhá veškerá AI analýza lokálně, což zajišťuje nulovou latenci a maximální bezpečnost dat.

Dovednost: Architektura systému s lokální AI infrastrukturou pro minimalizaci latence a ochranu dat.

Přínos: Rychlé rozhodování bez závislosti na externích API a kompletní kontrola nad citlivými obchodními daty.

2. Architektura "Safety First"

Jako vývojář jsem kladl maximální důraz na ochranu kapitálu (Risk Management):

Circuit Breakers: Automatické zastavení systému při dosažení denního limitu ztráty (5 %) nebo celkového drawdownu (15 %).

Dovednost: Implementace robustních circuit breaker mechanismů pro ochranu kapitálu.

Přínos: Automatická prevence katastrofických ztrát a ochrana trading účtu před nadměrným rizikem.

Dynamic Risk Sizing: Automatický výpočet velikosti pozice na základě aktuální volatility (ATR) a nastaveného % rizika na obchod.

Dovednost: Vývoj dynamického position sizing algoritmu založeného na volatilitě trhu.

Přínos: Optimalizace velikosti pozic podle aktuálních tržních podmínek, což maximalizuje zisky při zachování konzervativního rizika.

Multi-TF Confirmation: Obchod je exekuován pouze tehdy, pokud se shodne trend na více časových rámcích najednou.

Dovednost: Implementace multi-timeframe analýzy pro potvrzení signálů napříč různými horizonty.

Přínos: Výrazné snížení falešných signálů díky požadavku na konfirmaci z více časových rámců.

3. Workflow & Automatizace

Projekt je rozdělen do logických modulů pro snadnou údržbu a škálovatelnost:

Data Collector: Sběr a čištění dat z MT5.

Dovednost: Vývoj robustního data pipeline pro zpracování tržních dat v reálném čase.

Přínos: Spolehlivý a efektivní sběr dat pro následnou AI analýzu.

AI Analyzer: Generování reportů a optimalizace strategie pomocí LLM.

Dovednost: Vytvoření AI-driven analytického modulu pro strategickou optimalizaci.

Přínos: Kontinuální vylepšování strategie na základě AI analýzy historických výsledků.

Main Execution Loop: Plně autonomní smyčka, která monitoruje trh každých 30 sekund a spravuje otevřené pozice.

Dovednost: Architektura autonomního trading systému s robustním error handlingem.

Přínos: 24/7 automatizované obchodování bez nutnosti manuálního dohledu.

Technické dovednosti demonstrované na projektu

Integrace AI: Propojení Pythonu s lokálními LLM modely přes API.

Systémové inženýrství: Robustní handling chyb (MT5 connection loss, AI timeouts).

Finanční matematika: Implementace pokročilých indikátorů a risk management logiky.

Logování a Monitoring: Detailní trasování každého rozhodnutí AI pro zpětný audit.`,
      fullDescriptionEn: `PROJECT PROFILE

This system represents a "bridge" between classical algorithmic trading and modern artificial intelligence. Unlike common bots that rely solely on fixed mathematical formulas, EURUSD Automated System utilizes a local LLM instance (Mistral-7B) for deep market context analysis and real-time signal validation.

1. AI-Powered Decision Core

The heart of the system is not just an indicator, but a complex analytical process:

LLM Signal Validation: Each technical signal (e.g., RSI + MACD crossover) is sent to LM Studio, where the Mistral-7B model evaluates market structure and confirms whether entry is safe.

Skill: Integration of Python with local LLM models via API for real-time trading signal validation.

Benefit: Elimination of false signals through AI contextual analysis, significantly increasing system reliability and profit factor.

Pattern Recognition: The system analyzes historical data (M1, M3, M5, M10) and searches for hidden correlations that standard indicators overlook.

Skill: Implementation of advanced algorithms for pattern detection across multiple timeframes.

Benefit: Identification of trading opportunities that would remain hidden when using only standard technical indicators.

Local Infrastructure: Thanks to LM Studio integration, all AI analysis runs locally, ensuring zero latency and maximum data security.

Skill: System architecture with local AI infrastructure for latency minimization and data protection.

Benefit: Fast decision-making without dependency on external APIs and complete control over sensitive trading data.

2. "Safety First" Architecture

As a developer, I placed maximum emphasis on capital protection (Risk Management):

Circuit Breakers: Automatic system shutdown upon reaching daily loss limit (5%) or total drawdown (15%).

Skill: Implementation of robust circuit breaker mechanisms for capital protection.

Benefit: Automatic prevention of catastrophic losses and protection of trading account from excessive risk.

Dynamic Risk Sizing: Automatic position size calculation based on current volatility (ATR) and set % risk per trade.

Skill: Development of dynamic position sizing algorithm based on market volatility.

Benefit: Optimization of position sizes according to current market conditions, maximizing profits while maintaining conservative risk.

Multi-TF Confirmation: Trade is executed only when trend aligns across multiple timeframes simultaneously.

Skill: Implementation of multi-timeframe analysis for signal confirmation across different horizons.

Benefit: Significant reduction in false signals through requirement for confirmation from multiple timeframes.

3. Workflow & Automation

The project is divided into logical modules for easy maintenance and scalability:

Data Collector: Collection and cleaning of data from MT5.

Skill: Development of robust data pipeline for real-time market data processing.

Benefit: Reliable and efficient data collection for subsequent AI analysis.

AI Analyzer: Report generation and strategy optimization using LLM.

Skill: Creation of AI-driven analytical module for strategic optimization.

Benefit: Continuous strategy improvement based on AI analysis of historical results.

Main Execution Loop: Fully autonomous loop that monitors market every 30 seconds and manages open positions.

Skill: Architecture of autonomous trading system with robust error handling.

Benefit: 24/7 automated trading without need for manual supervision.

Technical Skills Demonstrated on the Project

AI Integration: Connecting Python with local LLM models via API.

Systems Engineering: Robust error handling (MT5 connection loss, AI timeouts).

Financial Mathematics: Implementation of advanced indicators and risk management logic.

Logging and Monitoring: Detailed tracking of every AI decision for backward audit.`,
      impact: "EURUSD Automated AI Trader kombinuje pokročilou AI analýzu (Mistral-7B) s robustním risk management systémem pro autonomní obchodování. Systém eliminuje falešné signály pomocí LLM validace, implementuje circuit breakers pro ochranu kapitálu a využívá multi-timeframe konfirmaci pro zvýšení spolehlivosti, čímž vytváří bezpečný a efektivní trading systém.",
      impactEn: "EURUSD Automated AI Trader combines advanced AI analysis (Mistral-7B) with robust risk management system for autonomous trading. The system eliminates false signals through LLM validation, implements circuit breakers for capital protection, and utilizes multi-timeframe confirmation to increase reliability, creating a safe and efficient trading system.",
      tags: ["AI Integration", "FinTech", "Risk Management Architecture", "Automated Trading"],
      year: "2025",
      image: "/images/EURUSD_system.jpg",
      technologies: ["Python 3.10+", "MetaTrader 5 API", "LM Studio", "Mistral-7B-Instruct", "Pandas", "NumPy"],
      role: "System Architect & AI Developer",
      roleEn: "System Architect & AI Developer",
      duration: "5 měsíců",
      durationEn: "5 months",
      githubPrivate: true,
      featured: false,
    },
  ]

  const getProjectText = (project: Project, key: "title" | "shortDescription") => {
    return language === "en" ? project[key + "En"] : project[key]
  }

  // Funkce pro formátování textu s tučným textem před dvojtečkou
  const formatTextWithBoldLabels = (text: string) => {
    // Rozdělíme text na řádky
    return text.split("\n").map((line, lineIdx) => {
      const trimmedLine = line.trim()
      
      // Přeskočíme prázdné řádky
      if (!trimmedLine) {
        return <br key={lineIdx} />
      }
      
      // Pokud řádek obsahuje dvojtečku a text před ní není prázdný
      if (trimmedLine.includes(":")) {
        const colonIndex = trimmedLine.indexOf(":")
        const beforeColon = trimmedLine.substring(0, colonIndex).trim()
        const afterColon = trimmedLine.substring(colonIndex + 1).trim()
        
        // Pokud je něco před dvojtečkou (a není to jen číslo nebo speciální znak), uděláme to tučné
        if (beforeColon && beforeColon.length > 0) {
          return (
            <span key={lineIdx} className="block mb-2">
              <strong className="font-semibold text-foreground">{beforeColon}:</strong>
              {afterColon ? <span className="ml-2 text-foreground/90">{afterColon}</span> : ""}
            </span>
          )
        }
      }
      
      // Pokud řádek neobsahuje dvojtečku, vrátíme ho normálně
      return <span key={lineIdx} className="block mb-2 text-foreground/90">{trimmedLine}</span>
    })
  }

  const scrollToProject = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / projects.length
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const nextProject = () => {
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    scrollToProject(nextIndex)
  }

  const prevProject = () => {
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    scrollToProject(prevIndex)
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (carouselRef.current) {
      e.preventDefault()
      carouselRef.current.scrollLeft += e.deltaY * 0.5 // Plynulejší scrollování
      handleUserScroll()
    }
  }

  // Nastavit carousel na první projekt při načtení
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0
      setCurrentIndex(0)
    }
  }, [])

  // Plynulé automatické scrollování
  useEffect(() => {
    if (!isAutoScrolling || isUserInteracting) {
      if (autoScrollAnimationRef.current) {
        cancelAnimationFrame(autoScrollAnimationRef.current)
        autoScrollAnimationRef.current = null
      }
      return
    }

    const scrollSpeed = 0.3 // Pomalá rychlost scrollování (pixely na frame)
    let lastTimestamp = performance.now()

    const autoScroll = (timestamp: number) => {
      if (!carouselRef.current) return

      const deltaTime = timestamp - lastTimestamp
      lastTimestamp = timestamp

      const carousel = carouselRef.current
      const maxScroll = carousel.scrollWidth - carousel.clientWidth

      // Pokud jsme na konci, začneme znovu
      if (carousel.scrollLeft >= maxScroll - 1) {
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft += scrollSpeed * (deltaTime / 16) // Normalizace na 60fps
      }

      autoScrollAnimationRef.current = requestAnimationFrame(autoScroll)
    }

    autoScrollAnimationRef.current = requestAnimationFrame(autoScroll)

    return () => {
      if (autoScrollAnimationRef.current) {
        cancelAnimationFrame(autoScrollAnimationRef.current)
      }
    }
  }, [isAutoScrolling, isUserInteracting])

  const handleMouseEnter = () => {
    setIsUserInteracting(true)
    setIsAutoScrolling(false)
  }

  const handleMouseLeave = () => {
    setIsUserInteracting(false)
    // Počkáme chvíli před obnovením automatického scrollování
    setTimeout(() => {
      if (!isUserInteracting) {
        setIsAutoScrolling(true)
      }
    }, 2000)
  }

  const handleUserScroll = useCallback(() => {
    setIsUserInteracting(true)
    setIsAutoScrolling(false)
    lastScrollTimeRef.current = Date.now()

    // Obnovíme automatické scrollování po 3 sekundách nečinnosti
    setTimeout(() => {
      const timeSinceLastScroll = Date.now() - lastScrollTimeRef.current
      if (timeSinceLastScroll >= 3000) {
        setIsUserInteracting(false)
        setIsAutoScrolling(true)
      }
    }, 3000)
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollTimeout: NodeJS.Timeout | null = null

    const handleScroll = () => {
      const cardWidth = carousel.scrollWidth / projects.length
      const newIndex = Math.round(carousel.scrollLeft / cardWidth)
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
        setCurrentIndex(newIndex)
      }

      // Detekce uživatelské interakce při scrollování
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      
      // Pokud scrollování není způsobeno automatickým scrollováním, zastavíme ho
      if (!isAutoScrolling) {
        handleUserScroll()
      }

      scrollTimeout = setTimeout(() => {
        // Po scrollování počkáme chvíli před obnovením automatického scrollování
        if (!isUserInteracting) {
          setIsAutoScrolling(true)
        }
      }, 3000)
    }

    carousel.addEventListener("scroll", handleScroll)
    return () => {
      carousel.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [projects.length, currentIndex, isAutoScrolling, isUserInteracting, handleUserScroll])

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">{t("projects.title")}</h2>
              <p className="text-lg text-muted-foreground text-pretty">{t("projects.description")}</p>
            </div>

            <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background/90 backdrop-blur-md border-2 shadow-xl opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background/90 backdrop-blur-md border-2 shadow-xl opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setIsAutoScrolling(!isAutoScrolling)
                  setIsUserInteracting(!isAutoScrolling)
                }}
                className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-background/90 backdrop-blur-md border-2 shadow-lg opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground"
              >
                {isAutoScrolling ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>

              <div
                ref={carouselRef}
                onWheel={handleWheel}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => {
                  setIsUserInteracting(true)
                  setIsAutoScrolling(false)
                }}
                onTouchEnd={() => {
                  setTimeout(() => {
                    if (!isUserInteracting) {
                      setIsAutoScrolling(true)
                    }
                  }, 3000)
                }}
                onScroll={handleUserScroll}
                className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4 px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 w-[90%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] snap-center"
                  >
                    <div
                      className={`group/card relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-card h-full animate-fade-in-up ${
                        project.featured
                          ? "border-4 border-accent shadow-xl shadow-accent/30 hover:shadow-accent/50"
                          : "border-2 border-border hover:border-accent hover:shadow-accent/20"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.featured && (
                        <div className="absolute top-3 left-3 z-10">
                          <Badge className="bg-accent text-accent-foreground shadow-lg flex items-center gap-1 px-3 py-1">
                            <Star className="h-3 w-3 fill-current" />
                            {language === "en" ? "Featured" : "Doporučeno"}
                          </Badge>
                        </div>
                      )}
                      {project.externalUrl && (
                        <div className={`absolute top-3 ${project.featured ? 'right-3' : 'left-3'} z-10`}>
                          <Badge className="bg-green-500 text-white shadow-lg flex items-center gap-1 px-3 py-1 animate-pulse">
                            <Radio className="h-3 w-3 fill-current" />
                            {language === "en" ? "LIVE" : "ŽIVĚ"}
                          </Badge>
                        </div>
                      )}

                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none bg-gradient-to-r from-transparent via-accent/5 to-transparent" />

                      <div className="aspect-[16/10] relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={getProjectText(project, "title")}
                          className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
                      </div>

                      <div className="p-5 sm:p-6 space-y-3 bg-card border-t-2 border-border group-hover/card:border-accent transition-colors duration-500">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-card-foreground group-hover/card:text-accent transition-colors duration-300 text-balance">
                              {getProjectText(project, "title")}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                              {getProjectText(project, "shortDescription")}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-xs font-semibold shrink-0 group-hover/card:bg-accent group-hover/card:text-accent-foreground transition-all duration-300 group-hover/card:scale-110"
                          >
                            {project.year}
                          </Badge>
                        </div>

                        {/* Tech stack */}
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                            <span className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground/50 font-medium">
                              TECH
                            </span>
                            <div className="flex flex-wrap items-center gap-y-1">
                              {project.technologies.slice(0, 4).map((tech, idx) => (
                                <div key={idx} className="flex items-center">
                                  <span className="text-[10px] text-muted-foreground/70 font-medium group-hover/card:text-accent/90 transition-colors duration-300">
                                    {tech}
                                  </span>
                                  {idx < Math.min(project.technologies.length, 4) - 1 && (
                                    <span className="mx-1.5 text-muted-foreground/30 group-hover/card:text-accent/40 transition-colors duration-300">
                                      •
                                    </span>
                                  )}
                                </div>
                              ))}
                              {project.technologies.length > 4 && (
                                <>
                                  <span className="mx-1.5 text-muted-foreground/30 group-hover/card:text-accent/40 transition-colors duration-300">
                                    •
                                  </span>
                                  <span className="text-[10px] text-muted-foreground/50 group-hover/card:text-muted-foreground/70 transition-colors duration-300">
                                    +{project.technologies.length - 4}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        )}

                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full group-hover/card:!bg-accent group-hover/card:!text-accent-foreground group-hover/card:!border-accent hover:!bg-accent hover:!text-accent-foreground hover:!border-accent dark:group-hover/card:!bg-accent dark:group-hover/card:!text-accent-foreground dark:group-hover/card:!border-accent dark:hover:!bg-accent dark:hover:!text-accent-foreground dark:hover:!border-accent transition-all duration-300 !bg-transparent group-hover/card:shadow-lg group-hover/card:shadow-accent/30 hover:shadow-lg hover:shadow-accent/30 group-hover/card:scale-105 hover:scale-105"
                        >
                          {t("projects.viewDetails")}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToProject(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`h-2 rounded-full transition-all duration-500 relative overflow-hidden ${
                      currentIndex === index
                        ? "w-12 bg-accent shadow-lg shadow-accent/50"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:w-4"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  >
                    {currentIndex === index && isAutoScrolling && (
                      <div
                        className="absolute inset-0 bg-accent-foreground/30 animate-progress"
                        style={{
                          animation: "progress 3s linear",
                          transformOrigin: "left",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent 
          showCloseButton={false}
          className="min-w-[350px] sm:min-w-[650px] lg:min-w-[950px] w-[95vw] sm:w-[90vw] lg:w-[950px] max-w-[950px] max-h-[92vh] overflow-hidden flex flex-col animate-fade-in-up p-0"
        >
          {selectedProject && (
            <>
              {/* Obrázek v hlavičce */}
              <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={language === "en" ? selectedProject.titleEn : selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
                
                {/* Vlastní křížek s výrazným pozadím */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/95 backdrop-blur-sm border-2 border-accent shadow-xl flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-200"
                  aria-label={language === "en" ? "Close" : "Zavřít"}
                >
                  <X className="h-5 w-5" />
                </button>

                {selectedProject.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-accent text-accent-foreground shadow-lg flex items-center gap-1 px-3 py-1.5">
                      <Star className="h-4 w-4 fill-current" />
                      {language === "en" ? "Featured Project" : "Doporučený projekt"}
                    </Badge>
                  </div>
                )}
              </div>

              <DialogHeader className="space-y-6 flex-shrink-0 px-6 pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
                      {language === "en" ? selectedProject.titleEn : selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono text-sm">
                          {selectedProject.year}
                        </Badge>
                      </div>
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                      <span>{language === "en" ? selectedProject.roleEn : selectedProject.role}</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                      <span>{language === "en" ? selectedProject.durationEn : selectedProject.duration}</span>
                    </div>
                  </div>

                  {/* Technologie - minimalistické badges */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      {language === "en" ? "Tech:" : "Tech:"}
                    </span>
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2.5 py-1 text-xs font-medium bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Klíčové oblasti - minimalistické badges */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      {language === "en" ? "Areas:" : "Oblasti:"}
                    </span>
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="px-2.5 py-1 text-xs font-medium border-primary/20 hover:bg-primary/10 transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2 border-b border-border pb-2">
                      {language === "en" ? "Impact" : "Dopad"}
                    </h3>
                    <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
                        {language === "en" ? selectedProject.impactEn : selectedProject.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-custom relative z-10">
                {/* Popis projektu */}
                <div className="space-y-8 pt-6">
                  {/* Screenshot obrázek pro Complexity v3 */}
                  {selectedProject.id === "complexity-v3" && (
                    <div className="w-full my-6 rounded-lg overflow-hidden border-2 border-accent shadow-lg">
                      <img
                        src="/images/Complexity_screen.png"
                        alt="Complexity v3 TradingView Screenshot"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  {/* Screenshot obrázek pro Table Logic Extractor v2.0 */}
                  {selectedProject.id === "table-logic-extractor" && (
                    <div className="w-full my-6 rounded-lg overflow-hidden border-2 border-accent shadow-lg">
                      <img
                        src="/images/Table Logic Extractor Screen.png"
                        alt="Table Logic Extractor v2.0 TradingView Screenshot"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  {/* Flow diagram pro EURUSD Automated AI Trader */}
                  {selectedProject.id === "eurusd-ai-trader" && (
                    <div className="w-full my-6 rounded-lg overflow-hidden border-2 border-accent shadow-lg">
                      <img
                        src="/images/eurusd_FLOW.jpg"
                        alt="EURUSD Automated AI Trader - AI-Powered Trading Flow"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  <div className="space-y-6">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <div className="text-base sm:text-lg text-foreground leading-relaxed space-y-6">
                        {(language === "en" ? selectedProject.fullDescriptionEn : selectedProject.fullDescription)
                          .split("\n\n")
                          .map((paragraph, idx) => {
                            // Detekce nadpisů (začínají číslem nebo písmenem s tečkou)
                            if (/^[\dA-Z]\.\s/.test(paragraph.trim()) || /^[A-Z]\.\s/.test(paragraph.trim())) {
                              const isMainHeading = /^\d+\.\s/.test(paragraph.trim())
                              const HeadingTag = isMainHeading ? "h3" : "h4"
                              const headingClass = isMainHeading
                                ? "text-xl font-bold text-primary mt-8 mb-4 pb-2 border-b border-border"
                                : "text-lg font-semibold text-primary mt-6 mb-3"
                              return (
                                <HeadingTag key={idx} className={headingClass}>
                                  {paragraph.trim()}
                                </HeadingTag>
                              )
                            }
                            // Detekce seznamů (začínají •)
                            if (paragraph.trim().startsWith("•")) {
                              return (
                                <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                                  {paragraph
                                    .split("\n")
                                    .filter((line) => line.trim().startsWith("•"))
                                    .map((item, itemIdx) => (
                                      <li key={itemIdx} className="text-base">
                                        {item.trim().substring(1).trim()}
                                      </li>
                                    ))}
                                </ul>
                              )
                            }
                            // Obyčejné odstavce - s detekcí Dovednost/Přínos
                            if (paragraph.trim()) {
                              const trimmed = paragraph.trim()
                              const lines = trimmed.split("\n")
                              
                              // Pokud odstavec obsahuje "Dovednost:" nebo "Přínos:" na samostatném řádku
                              const dovednostIndex = lines.findIndex((line) => line.trim().startsWith("Dovednost:") || line.trim().startsWith("Skill:"))
                              const prinosIndex = lines.findIndex((line) => line.trim().startsWith("Přínos:") || line.trim().startsWith("Benefit:"))
                              
                              if (dovednostIndex !== -1) {
                                const label = lines[dovednostIndex].trim().startsWith("Dovednost:") ? "Dovednost:" : "Skill:"
                                const content = lines[dovednostIndex].replace(/^(Dovednost:|Skill:)\s*/, "").trim()
                                return (
                                  <div key={idx} className="my-4 p-4 rounded-lg bg-primary/10 border-l-4 border-primary">
                                    <p className="font-semibold text-primary mb-2">{label}</p>
                                    <p className="text-foreground">{content}</p>
                                  </div>
                                )
                              }
                              
                              if (prinosIndex !== -1) {
                                const label = lines[prinosIndex].trim().startsWith("Přínos:") ? "Přínos:" : "Benefit:"
                                const content = lines[prinosIndex].replace(/^(Přínos:|Benefit:)\s*/, "").trim()
                                return (
                                  <div key={idx} className="my-4 p-4 rounded-lg bg-accent/10 border-l-4 border-accent">
                                    <p className="font-semibold text-accent mb-2">{label}</p>
                                    <p className="text-foreground">{content}</p>
                                  </div>
                                )
                              }
                              
                              // Obyčejný odstavec - s formátováním textu před dvojtečkou
                              return (
                                <div key={idx} className="mb-6 leading-relaxed">
                                  {formatTextWithBoldLabels(trimmed)}
                                </div>
                              )
                            }
                            return null
                          })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sekce Odkazy */}
                {((selectedProject.externalUrl && selectedProject.externalUrl.trim() !== "") || selectedProject.githubUrl) && (
                  <div className="space-y-4 pt-4 mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2 pb-2">
                      {language === "en" ? "Links" : "Odkazy"}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.externalUrl && selectedProject.externalUrl.trim() !== "" && (
                        <Button
                          variant="default"
                          size="lg"
                          asChild
                          className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 hover:shadow-lg gap-2"
                        >
                          <a href={selectedProject.externalUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            TradingView
                          </a>
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          asChild
                          className="hover:bg-muted transition-all hover:scale-105 hover:shadow-lg gap-2 bg-transparent"
                        >
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            {selectedProject.githubPrivate ? (
                              <>
                                <Lock className="h-3.5 w-3.5" />
                                {language === "en" ? "Private Repository" : "Privátní repozitář"}
                              </>
                            ) : (
                              "GitHub"
                            )}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export { Projects }
