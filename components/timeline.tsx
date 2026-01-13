"use client"

import type React from "react"
import { Briefcase, Calendar, MapPin, CheckCircle2, AlertCircle, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Experience = {
  period: string
  periodEn: string
  company: string
  role: string
  roleEn: string
  location?: string
  locationEn?: string
  description: string
  descriptionEn: string
  achievements: { text: string; textEn: string }[]
  challenges: { text: string; textEn: string }[]
  current?: boolean
}

export function Timeline() {
  const { language, t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const experiences: Experience[] = [
    {
      period: "září 2024 - současnost",
      periodEn: "Sep 2024 - present",
      company: "sledovanitv.cz",
      role: "Product Owner",
      roleEn: "Product Owner",
      location: "Brno, Jihomoravský, Česko · Hybridní",
      locationEn: "Brno, South Moravia, Czechia · Hybrid",
      description:
        "Zodpovědnost za strategický rozvoj webové platformy a B2B/OTT služeb pro český a slovenský trh v rámci přední IPTV služby. Hlavní zaměření na klíčové části uživatelské cesty – od registrace a nákupních procesů až po integraci platebních metod a celkové vylepšování uživatelské zkušenosti (UX).",
      descriptionEn:
        "Responsible for strategic development of web platform and B2B/OTT services for Czech and Slovak markets within a leading IPTV service. Main focus on key parts of user journey – from registration and purchase processes to payment method integration and overall UX improvements.",
      achievements: [
        {
          text: "End-to-end správa transakčních procesů: Řízení a optimalizace nákupních a platebních toků, které tvoří jádro monetizace a akvizice celé služby.",
          textEn: "End-to-end management of transactional processes: Managing and optimizing purchase and payment flows that form the core of service monetization and acquisition.",
        },
        {
          text: "Datově orientované rozhodování (Data-Driven PO): Aktivní definování a sledování metrik úspěšnosti. Provádění vlastní datové analýzy pomocí SQL dotazů a úzká spolupráce s datovými analytiky při interpretaci komplexních datasetů.",
          textEn: "Data-driven decision making (Data-Driven PO): Actively defining and tracking success metrics. Performing own data analysis using SQL queries and close collaboration with data analysts in interpreting complex datasets.",
        },
        {
          text: "Vedení dedikovaného Scrum týmu: Řízení agilního týmu (vývojáři, UI designer, QA) v rámci striktního Scrumu s důrazem na efektivní plánování, grooming a doručování hodnoty uživatelům.",
          textEn: "Leading dedicated Scrum team: Managing agile team (developers, UI designer, QA) within strict Scrum framework with emphasis on effective planning, grooming and delivering value to users.",
        },
        {
          text: "Mezioborová spolupráce na rozvoji UX: Úzká součinnost s UX oddělením při hledání optimálních řešení pro technologicky náročné části platformy s cílem zajistit plynulost a intuitivnost rozhraní napříč zařízeními.",
          textEn: "Cross-functional collaboration on UX development: Close cooperation with UX department in finding optimal solutions for technologically demanding parts of platform to ensure smoothness and intuitiveness of interface across devices.",
        },
        {
          text: "Rozvoj mezinárodního OTT řešení: Koordinace rozvoje platforem pro CZ a SK trh s ohledem na specifické potřeby B2B partnerů i koncových B2C zákazníků.",
          textEn: "Development of international OTT solution: Coordinating platform development for CZ and SK markets with regard to specific needs of B2B partners and end B2C customers.",
        },
      ],
      challenges: [
        {
          text: "Správa provázaných systémových celků: Koordinace rozvoje částí produktu s přímou návazností na výstupy ostatních týmů, vyžadující vysokou míru synchronizace a efektivní komunikaci napříč odděleními.",
          textEn: "Managing interconnected system components: Coordinating product development with direct dependencies on outputs of other teams, requiring high level of synchronization and effective communication across departments.",
        },
        {
          text: "Hledání rovnováhy v B2B a B2C: Slaďování požadavků koncových uživatelů s obchodními cíli partnerů v dynamickém prostředí multimediálních služeb.",
          textEn: "Finding balance in B2B and B2C: Aligning end user requirements with business goals of partners in dynamic multimedia services environment.",
        },
      ],
      current: true,
    },
    {
      period: "únor 2023 - září 2024",
      periodEn: "Feb 2023 - Sep 2024",
      company: "Legito",
      role: "Product Manager",
      roleEn: "Product Manager",
      location: "Česko · Na místě",
      locationEn: "Czechia · On-site",
      description:
        "Po úspěšném působení v QA týmu jsem převzal zodpovědnost za rozvoj klíčové části platformy, kterou aktivně využívá 95 % uživatelské základny. Moje role spočívala v kompletním řízení životního cyklu produktu a koordinaci vývojových kapacit pro rozsáhlý technický tým.",
      descriptionEn:
        "After successful work in QA team, I took responsibility for development of key platform component actively used by 95% of user base. My role consisted of complete product lifecycle management and coordination of development capacity for large technical team.",
      achievements: [
        {
          text: "Koordinace velkého vývojového týmu: Operativní řízení a prioritizace úkolů pro tým o velikosti 15–17 specialistů (vývojáři a QA), včetně plánování kapacit a zajištění plynulého doručování funkcionalit.",
          textEn: "Coordination of large development team: Operational management and task prioritization for team of 15–17 specialists (developers and QA), including capacity planning and ensuring smooth delivery of functionalities.",
        },
        {
          text: "Řízení technologického refaktoringu: Úspěšná koordinace přepisu hlavní části systému do nového technologického stacku při současném zachování kontinuity vývoje a implementaci nových funkcí.",
          textEn: "Managing technological refactoring: Successful coordination of rewriting main system component to new technology stack while maintaining development continuity and implementing new features.",
        },
        {
          text: "Produktový design a UX/UI: Samostatná příprava UX/UI návrhů ve Figmě (vzhledem k absenci dedikovaného designéra), efektivní využívání a rozšiřování stávajícího komponentového systému.",
          textEn: "Product design and UX/UI: Independent preparation of UX/UI designs in Figma (due to absence of dedicated designer), effective utilization and expansion of existing component system.",
        },
        {
          text: "Vedení agilních ceremonií: Kompletní správa procesů od denních stand-upů a plánování sprintů přes backlog grooming až po retrospektivy pro celý vývojový tým.",
          textEn: "Leading agile ceremonies: Complete management of processes from daily stand-ups and sprint planning through backlog grooming to retrospectives for entire development team.",
        },
        {
          text: "Tvorba produktové dokumentace: Definování User Stories a detailních popisů chování funkcí v prostředí bez předchozí dokumentace, což vedlo k jasnějšímu zadání a zefektivnění práce vývojářů.",
          textEn: "Creating product documentation: Defining User Stories and detailed function behavior descriptions in environment without prior documentation, leading to clearer requirements and increased developer efficiency.",
        },
        {
          text: "Prioritizace na základě business dopadu: Rozhodování o prioritách vývoje v souladu se závazky u klíčových B2B partnerů a strategickými cíli společnosti.",
          textEn: "Prioritization based on business impact: Making decisions about development priorities in line with commitments to key B2B partners and company strategic goals.",
        },
      ],
      challenges: [
        {
          text: "Balancování technického dluhu a business priorit: Hledání optimální cesty mezi nutným refaktoringem systému a tlakem na doručování nových funkcí požadovaných obchodním oddělením.",
          textEn: "Balancing technical debt and business priorities: Finding optimal path between necessary system refactoring and pressure to deliver new features required by sales department.",
        },
        {
          text: "Stakeholder management: Komunikace s obchodními zástupci a transformace klientské zpětné vazby do realizovatelných produktových specifikací.",
          textEn: "Stakeholder management: Communication with sales representatives and transformation of client feedback into implementable product specifications.",
        },
      ],
    },
    {
      period: "listopad 2022 - červen 2023",
      periodEn: "Nov 2022 - Jun 2023",
      company: "Legito",
      role: "Software Tester",
      roleEn: "Software Tester",
      location: "Brno, Jihomoravský, Česko",
      locationEn: "Brno, South Moravia, Czechia",
      description:
        "Zajištění kvality (QA) komplexní LegalTech platformy se zaměřením na logickou správnost automatizovaných dokumentů a uživatelskou přívětivost rozhraní. Role zahrnovala hloubkové manuální testování, diagnostiku chyb a úzkou spolupráci s vývojovým týmem při jejich odstraňování.",
      descriptionEn:
        "Quality assurance (QA) of complex LegalTech platform with focus on logical correctness of automated documents and user-friendly interface. Role included in-depth manual testing, bug diagnostics and close collaboration with development team in their resolution.",
      achievements: [
        {
          text: "Technická diagnostika frontendových chyb: Využití nástrojů Chrome DevTools k identifikaci problémů v UI a následný reporting konkrétních úseků kódu vývojářům pro zrychlení procesu opravy.",
          textEn: "Technical diagnostics of frontend bugs: Utilizing Chrome DevTools to identify UI issues and subsequent reporting of specific code sections to developers to accelerate fix process.",
        },
        {
          text: "Testování komplexní dokumentové logiky: Ověřování složitých rozhodovacích stromů a vzájemných vazeb v dokumentech s ohledem na mezinárodní specifika a různé kombinace datových vstupů.",
          textEn: "Testing complex document logic: Verifying complex decision trees and interconnections in documents with regard to international specifics and various data input combinations.",
        },
        {
          text: "Replikace uživatelských scénářů: Diagnostika nestandardních chyb hlášených B2B klienty, jejich simulace v testovacím prostředí a zajištění podkladů pro technickou nápravu.",
          textEn: "Replicating user scenarios: Diagnosing non-standard bugs reported by B2B clients, their simulation in testing environment and ensuring materials for technical remediation.",
        },
        {
          text: "Monitoring UI a UX integrity: Identifikace a reporting vizuálních i interakčních nedostatků, které mají přímý vliv na plynulost průchodu uživatele systémem.",
          textEn: "Monitoring UI and UX integrity: Identifying and reporting visual and interaction deficiencies that have direct impact on smoothness of user journey through system.",
        },
        {
          text: "Práce s technickým stackem: Práce v agilním prostředí s využitím nástrojů YouTrack, Redmine a základní ověřování API požadavků pomocí nástroje Postman.",
          textEn: "Working with technical stack: Working in agile environment utilizing YouTrack, Redmine tools and basic API request verification using Postman tool.",
        },
      ],
      challenges: [
        {
          text: "Zprostředkování informací mezi businessem a vývojem: Role komunikačního mostu při překladu uživatelských hlášení do technické terminologie srozumitelné pro programátory.",
          textEn: "Mediating information between business and development: Role of communication bridge in translating user reports into technical terminology understandable for programmers.",
        },
        {
          text: "Analýza logických závislostí: Pochopení vlivu drobných změn v nastavení podmínek na celkovou integritu a funkčnost generovaného právního dokumentu.",
          textEn: "Analyzing logical dependencies: Understanding impact of minor changes in condition settings on overall integrity and functionality of generated legal document.",
        },
      ],
    },
    {
      period: "červenec 2022 - září 2024",
      periodEn: "Jul 2022 - Sep 2024",
      company: "Na volné noze",
      role: "UX Designer",
      roleEn: "UX Designer",
      location: "Česko · Hybridní",
      locationEn: "Czechia · Hybrid",
      description:
        "Zaměření na návrh uživatelských rozhraní pro webové projekty a aplikace s důrazem na propojení principů psychologie a designového procesu. Tato role pro mě byla praktickým vyústěním akademických zkušeností v oblasti výzkumu a sběru dat, které jsem aplikoval do digitálního prostředí.",
      descriptionEn:
        "Focus on user interface design for web projects and applications with emphasis on connecting psychology principles and design process. This role was practical culmination of academic experience in research and data collection, which I applied to digital environment.",
      achievements: [
        {
          text: "Google UX Design Professional Certificate (Coursera): Absolvování komplexního certifikovaného programu zaměřeného na kompletní designový proces (Empathize, Define, Ideate, Prototype, Test).",
          textEn: "Google UX Design Professional Certificate (Coursera): Completion of comprehensive certified program focused on complete design process (Empathize, Define, Ideate, Prototype, Test).",
        },
        {
          text: "Využití výzkumných metod v praxi: Aplikace znalostí z vysokoškolského studia (metodika bakalářské a diplomové práce) při zjišťování uživatelských potřeb skrze dotazníková šetření a face-to-face rozhovory.",
          textEn: "Utilizing research methods in practice: Applying knowledge from university studies (bachelor's and master's thesis methodology) in discovering user needs through questionnaire surveys and face-to-face interviews.",
        },
        {
          text: "Návrh webových a mobilních aplikací: Tvorba wireframů a interaktivních prototypů v nástrojích Adobe XD a následně Figma/FigJam.",
          textEn: "Designing web and mobile applications: Creating wireframes and interactive prototypes in Adobe XD and subsequently Figma/FigJam tools.",
        },
        {
          text: "Práce s principy psychologie: Využití znalostí o lidském vnímání a chování k vytváření intuitivních rozhraní, která usnadňují uživateli interakci s produktem.",
          textEn: "Working with psychology principles: Utilizing knowledge about human perception and behavior to create intuitive interfaces that facilitate user interaction with product.",
        },
      ],
      challenges: [
        {
          text: "Přechod od akademického výzkumu k produktovému designu: Transformace teoretických psychologických poznatků a dat do konkrétních vizuálních návrhů a funkčních řešení.",
          textEn: "Transition from academic research to product design: Transformation of theoretical psychological knowledge and data into concrete visual designs and functional solutions.",
        },
        {
          text: "Osvojení profesionálního tooling: Postupný přechod mezi designovými nástroji a adaptace na dynamické potřeby webových a mobilních projektů.",
          textEn: "Mastering professional tooling: Gradual transition between design tools and adaptation to dynamic needs of web and mobile projects.",
        },
      ],
    },
    {
      period: "únor 2022 - červenec 2022",
      periodEn: "Feb 2022 - Jul 2022",
      company: "Komerční banka",
      role: "Bankovní poradce",
      roleEn: "Banking Advisor",
      location: "Brno, Jihomoravský, Česko",
      locationEn: "Brno, South Moravia, Czechia",
      description:
        "Zodpovědnost za správu klientského portfolia a prodej kompletního spektra bankovních produktů v souladu s vnitřními předpisy a tržní regulací. Tato role mi poskytla detailní vhled do fungování finančních institucí a odstartovala můj zájem o hlubší analýzu kapitálových trhů.",
      descriptionEn:
        "Responsibility for client portfolio management and sales of complete range of banking products in accordance with internal regulations and market regulation. This role provided me with detailed insight into functioning of financial institutions and sparked my interest in deeper analysis of capital markets.",
      achievements: [
        {
          text: "Absolvování náročného bankovního onboardingu: Úspěšné zvládnutí intenzivního školení a setrvání v roli i v prostředí s historicky vysokou fluktuací.",
          textEn: "Completing demanding banking onboarding: Successfully completing intensive training and remaining in role even in environment with historically high turnover.",
        },
        {
          text: "Správa širokého portfolia produktů: Aktivní nabídka úvěrových, depozitních a pojišťovacích služeb se zaměřením na identifikaci obchodních příležitostí.",
          textEn: "Managing wide product portfolio: Active offering of credit, deposit and insurance services with focus on identifying business opportunities.",
        },
        {
          text: "Analytický přesah k akciím a forexu: Studium mechanismů kapitálových trhů nad rámec standardní agendy bankovního poradce.",
          textEn: "Analytical extension to stocks and forex: Studying capital market mechanisms beyond standard banking advisor agenda.",
        },
        {
          text: "Práce v regulovaném prostředí: Striktní dodržování administrativních procesů, bankovního tajemství a legislativy (AML, spotřebitelské úvěry).",
          textEn: "Working in regulated environment: Strict adherence to administrative processes, banking secrecy and legislation (AML, consumer loans).",
        },
      ],
      challenges: [
        {
          text: "Sladění prodejních cílů s potřebami klientů: Hledání rovnováhy mezi ambiciózním nastavením KPI a individuální situací každého klienta.",
          textEn: "Aligning sales goals with client needs: Finding balance between ambitious KPI setting and individual situation of each client.",
        },
        {
          text: "Klientská komunikace v náročných situacích: Zvládání námitek a řešení nestandardních požadavků v přímém kontaktu s veřejností.",
          textEn: "Client communication in challenging situations: Handling objections and solving non-standard requirements in direct contact with public.",
        },
      ],
    },
    {
      period: "červenec 2019 - červen 2022",
      periodEn: "Jul 2019 - Jun 2022",
      company: "Armáda České republiky",
      role: "Profesionální voják",
      roleEn: "Professional Soldier",
      location: "Česko",
      locationEn: "Czechia",
      description:
        "Služba v armádě pro mě byla především intenzivním tréninkem psychické odolnosti a disciplíny. Naučil jsem se fungovat a činit rozhodnutí v podmínkách extrémního stresu, dlouhodobé fyzické únavy a v izolaci od běžného prostředí. Tato zkušenost formovala mou schopnost dotahovat úkoly do konce bez ohledu na náročnost okolností.",
      descriptionEn:
        "Military service was primarily intensive training of mental resilience and discipline for me. I learned to function and make decisions under conditions of extreme stress, long-term physical fatigue and in isolation from normal environment. This experience shaped my ability to complete tasks to the end regardless of circumstances difficulty.",
      achievements: [
        {
          text: "Maximální odolnost vůči stresu a zátěži: Schopnost udržet si jasnou mysl a vysokou efektivitu i při vysokém stupni vyčerpání a pod neustálým tlakem.",
          textEn: "Maximum resilience to stress and load: Ability to maintain clear mind and high efficiency even at high level of exhaustion and under constant pressure.",
        },
        {
          text: "Stoprocentní orientace na splnění úkolu: Vybudování mindsetu zaměřeného na výsledek – bez ohledu na překážky jsem vždy dokázal dokončit zadané cvičení nebo úkol v požadované kvalitě a termínu.",
          textEn: "One hundred percent focus on task completion: Building result-oriented mindset – regardless of obstacles I always managed to complete assigned exercise or task in required quality and deadline.",
        },
        {
          text: "Adaptabilita v extrémních podmínkách: Úspěšné působení v náročných prostředích, která vyžadovala rychlou orientaci, disciplínu a schopnost spolehnout se na sebe i svůj tým.",
          textEn: "Adaptability in extreme conditions: Successful performance in demanding environments that required quick orientation, discipline and ability to rely on oneself and one's team.",
        },
        {
          text: "Psychická stabilita: Zvládání dlouhodobého odloučení a vysokých nároků na osobní integritu a morálku v rámci vojenského kolektivu.",
          textEn: "Mental stability: Handling long-term separation and high demands on personal integrity and morale within military collective.",
        },
      ],
      challenges: [
        {
          text: "Překonávání mentálních bariér: Zjištění, že hranice fyzických a psychických sil jsou mnohem dál, než si člověk připouští, a schopnost čerpat z této zkušenosti v každodenním pracovním životě.",
          textEn: "Overcoming mental barriers: Realizing that boundaries of physical and mental strength are much further than one admits, and ability to draw from this experience in everyday work life.",
        },
      ],
    },
    {
      period: "srpen 2017 - listopad 2019",
      periodEn: "Aug 2017 - Nov 2019",
      company: "Blue Orange Business Resort",
      role: "Osobní trenér",
      roleEn: "Personal Trainer",
      location: "Vyškov",
      locationEn: "Vyškov",
      description:
        "V rámci své OSVČ praxe jsem propojoval akademické znalosti z oblasti výživy a diagnostiky s reálným tréninkem. Mým cílem nebylo jen dosahování estetických cílů, ale především edukace klientů v oblasti správného dýchání, prevence zranění a funkčního pohybu tak, aby byli schopni po čase trénovat samostatně a bezpečně.",
      descriptionEn:
        "Within my self-employed practice I connected academic knowledge from nutrition and diagnostics with real training. My goal was not just achieving aesthetic goals, but primarily educating clients in proper breathing, injury prevention and functional movement so they could train independently and safely over time.",
      achievements: [
        {
          text: "Vysoká retence a důvěra klientů: Dosáhl jsem 85% míry udržení u klientů, kteří absolvovali úvodní blok tréninků, přičemž většina se mnou spolupracovala dlouhodobě (měsíce až roky).",
          textEn: "High client retention and trust: Achieved 85% retention rate among clients who completed initial training block, with majority collaborating long-term (months to years).",
        },
        {
          text: "Komplexní nutriční mentoring: Využití vysokoškolského vzdělání (Bc.) k odbornému poradenství v oblasti suplementace, řešení potravinových intolerancí a tvorby udržitelných stravovacích plánů.",
          textEn: "Comprehensive nutritional mentoring: Utilizing university education (Bc.) for expert advice in supplementation, solving food intolerances and creating sustainable meal plans.",
        },
        {
          text: "Integrace nápravných metod: Aplikace principů z MFK Centra do běžného tréninku – zaměření na kompenzační cvičení, hluboký stabilizační systém a správnou biomechaniku při zvedání břemen.",
          textEn: "Integration of corrective methods: Applying principles from MFK Center to regular training – focus on compensatory exercises, deep stabilization system and proper biomechanics when lifting weights.",
        },
        {
          text: "Vedení individuálních i skupinových lekcí: Schopnost přizpůsobit metodiku vedení tréninku jak jednotlivcům s konkrétními diagnózami, tak dynamickým skupinovým lekcím.",
          textEn: "Leading individual and group sessions: Ability to adapt training methodology both to individuals with specific diagnoses and dynamic group sessions.",
        },
      ],
      challenges: [
        {
          text: "Extrémní time-management a disciplína: Úspěšné skloubení dálkového magisterského studia s vysokým pracovním nasazením (často 6:00–21:00 včetně víkendů) a budováním vlastní klientské základny.",
          textEn: "Extreme time-management and discipline: Successfully combining distance master's studies with high work commitment (often 6:00–21:00 including weekends) and building own client base.",
        },
        {
          text: "Psychologie a motivace: Pochopení role trenéra jako mentora, který klientům nepomáhá jen po fyzické stránce, ale výrazně přispívá i k jejich psychické pohodě a mentálnímu zdraví.",
          textEn: "Psychology and motivation: Understanding trainer's role as mentor who helps clients not just physically, but significantly contributes to their psychological well-being and mental health.",
        },
      ],
    },
    {
      period: "červenec 2016 - říjen 2017",
      periodEn: "Jul 2016 - Oct 2017",
      company: "MFK Centrum",
      role: "Sportovní diagnostik",
      roleEn: "Sports Diagnostician",
      location: "Brno",
      locationEn: "Brno",
      description:
        "Během sedmiměsíční odborné stáže jsem se specializoval na hloubkovou analýzu pohybového aparátu pomocí unikátní metody MFK (Martiny Končálové). Mou rolí bylo nejen diagnostikovat funkční poruchy, ale především srozumitelně komunikovat výsledky klientům a navrhovat preventivní řešení pro zlepšení jejich zdravotního stavu.",
      descriptionEn:
        "During seven-month professional internship I specialized in in-depth analysis of musculoskeletal system using unique MFK method (Martina Končálová). My role was not only to diagnose functional disorders, but primarily to communicate results clearly to clients and propose preventive solutions for improving their health condition.",
      achievements: [
        {
          text: "Komplexní diagnostika u 50+ klientů: Úspěšné provedení padesáti hloubkových analýz u sportovců i běžné veřejnosti s využitím počítačového systému MFK.",
          textEn: "Comprehensive diagnostics for 50+ clients: Successfully performed fifty in-depth analyses for athletes and general public using MFK computer system.",
        },
        {
          text: "Konzultační a edukační činnost: Interpretace výsledků klientům, vysvětlení příčin jejich obtíží a upozornění na možná rizika spojená s odkládáním řešení (prevence chronických stavů).",
          textEn: "Consultation and educational activity: Interpreting results to clients, explaining causes of their difficulties and alerting to possible risks associated with postponing solutions (prevention of chronic conditions).",
        },
        {
          text: "Návrh nápravných opatření: Praktické ukázky a vysvětlení konkrétních postupů a cviků vedoucích k odstranění svalových nerovnováh a zlepšení celkové kondice.",
          textEn: "Proposing corrective measures: Practical demonstrations and explanations of specific procedures and exercises leading to elimination of muscle imbalances and improvement of overall fitness.",
        },
        {
          text: "Propojení svalového systému a vnitřního zdraví: Využití diagnostiky k identifikaci somaticko-viscerálních vztahů, tedy jak stav pohybového aparátu ovlivňuje funkci vnitřních orgánů.",
          textEn: "Connecting muscular system and internal health: Utilizing diagnostics to identify somato-visceral relationships, i.e. how state of musculoskeletal system affects function of internal organs.",
        },
      ],
      challenges: [
        {
          text: "Srozumitelná interpretace odborných dat: Schopnost převést komplexní data z diagnostického systému do srozumitelné řeči pro klienta tak, aby pochopil důležitost nápravného procesu.",
          textEn: "Clear interpretation of professional data: Ability to translate complex data from diagnostic system into understandable language for client so they understand importance of corrective process.",
        },
      ],
    },
  ]

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      e.preventDefault()
      scrollContainerRef.current.scrollLeft += e.deltaY
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return
    isDraggingRef.current = true
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft
    scrollContainerRef.current.style.cursor = "grabbing"
  }

  const handleMouseLeave = () => {
    if (!scrollContainerRef.current) return
    isDraggingRef.current = false
    scrollContainerRef.current.style.cursor = "grab"
  }

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return
    isDraggingRef.current = false
    scrollContainerRef.current.style.cursor = "grab"
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startXRef.current) * 2
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk
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
      if (trimmedLine) {
        return <span key={lineIdx} className="block mb-2 text-foreground/90">{trimmedLine}</span>
      }
      return <br key={lineIdx} />
    })
  }

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div>
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {t("timeline.title")}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              {t("timeline.description")}
            </p>
          </div>

          <div ref={ref} className="group relative overflow-hidden py-8">
            <div className="relative">
              <div className="absolute left-0 right-0 top-20 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              <div
                ref={scrollContainerRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false)
                  handleMouseLeave()
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onWheel={handleWheel}
                className={`overflow-x-auto overflow-y-visible pt-24 pb-4 cursor-grab active:cursor-grabbing px-6 transition-all duration-300 ${
                  isHovered ? "scrollbar-timeline-visible" : "scrollbar-timeline-hidden"
                }`}
                style={{
                  scrollbarWidth: "thin",
                }}
              >
                <div className="flex gap-8 min-w-min" style={{ minWidth: "max-content" }}>
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedExperience(exp)}
                      className={`relative text-left transition-all duration-300 flex-shrink-0 ${
                        isVisible ? "animate-in slide-in-from-bottom-4" : "opacity-0"
                      }`}
                      style={{
                        width: "clamp(280px, calc((100vw - 200px) / 8), 320px)",
                        animationDelay: `${index * 60}ms`,
                        animationDuration: "400ms",
                        animationFillMode: "backwards",
                      }}
                    >
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-16 transition-all duration-300 ${
                          exp.current
                            ? "bg-gradient-to-b from-primary/40 to-primary/10"
                            : "bg-gradient-to-b from-border/60 to-border/20 hover:from-primary/30 hover:to-primary/5"
                        }`}
                        style={{ top: "-64px" }}
                      />

                      <div
                        className={`w-full rounded-2xl p-6 transition-all duration-300 ${
                          exp.current
                            ? "bg-gradient-to-br from-primary/5 via-card to-card border-2 border-accent shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2"
                            : "bg-card border-2 border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-primary/[0.02] hover:to-card"
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-xs font-semibold text-primary border border-primary/20">
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="font-mono">{language === "en" ? exp.periodEn : exp.period}</span>
                          </div>

                          <h3 className="text-xl font-bold text-foreground leading-tight hover:text-primary transition-colors">
                            {language === "en" ? exp.roleEn : exp.role}
                          </h3>

                          <div className="flex items-center gap-2.5 text-sm font-semibold text-muted-foreground hover:text-primary/80 transition-colors">
                            <div className="p-1.5 rounded-md bg-muted hover:bg-primary/10 transition-colors">
                              <Briefcase className="w-3.5 h-3.5" />
                            </div>
                            <span className="line-clamp-1">{exp.company}</span>
                          </div>

                          <div className="pt-3 border-t border-border/50 hover:border-primary/20 transition-colors">
                            <div className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                              <span>{language === "en" ? "View details" : "Zobrazit detaily"}</span>
                              <span className="hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center px-4">
                <p className="text-sm text-muted-foreground font-medium">
                  {language === "en"
                    ? "Click for full details • Drag or scroll to navigate"
                    : "Klikněte pro plné detaily • Tažením nebo scrollem procházejte"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <DialogContent 
          showCloseButton={false}
          className="min-w-[350px] sm:min-w-[650px] lg:min-w-[950px] w-[95vw] sm:w-[90vw] lg:w-[950px] max-w-[950px] max-h-[92vh] overflow-hidden flex flex-col animate-fade-in-up p-0"
        >
          {selectedExperience && (
            <>
              {/* Hlavička s gradientem */}
              <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
                
                {/* Pruh pro aktuální pozici */}
                {selectedExperience.current && (
                  <div className="absolute top-0 left-0 right-0 bg-accent/90 backdrop-blur-sm py-2.5 px-6 border-b border-accent z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
                      <span className="text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                        {language === "en" ? "Current Position" : "Aktuální pozice"}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Vlastní křížek s výrazným pozadím */}
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/95 backdrop-blur-sm border-2 border-accent shadow-xl flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-200"
                  aria-label={language === "en" ? "Close" : "Zavřít"}
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Obsah hlavičky */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 ${selectedExperience.current ? "pt-12 sm:pt-14" : "pt-6 sm:pt-8"}`}>
                  <DialogHeader className="space-y-4">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {language === "en" ? "Position" : "Pozice"}
                      </p>
                      <DialogTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground pr-16">
                        {language === "en" ? selectedExperience.roleEn : selectedExperience.role}
                      </DialogTitle>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <Briefcase className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-foreground">{selectedExperience.company}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50">
                          <Calendar className="w-4 h-4 text-primary/70" />
                          <span className="font-medium">
                            {language === "en" ? selectedExperience.periodEn : selectedExperience.period}
                          </span>
                        </div>

                        {selectedExperience.location && (
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50">
                            <MapPin className="w-4 h-4 text-primary/70" />
                            <span className="font-medium">
                              {language === "en" ? selectedExperience.locationEn : selectedExperience.location}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogHeader>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-custom">
                <div className="space-y-8 pt-6">
                  {/* Popis pozice */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2 border-b border-border pb-2">
                      {language === "en" ? "Description" : "Popis"}
                    </h3>
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <p className="text-base sm:text-lg leading-relaxed text-foreground">
                        {language === "en" ? selectedExperience.descriptionEn : selectedExperience.description}
                      </p>
                    </div>
                  </div>

                  {/* Klíčové úspěchy */}
                  {selectedExperience.achievements.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 border-b border-border pb-2">
                        <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {language === "en" ? "Key Achievements" : "Klíčové úspěchy"}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {selectedExperience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="group flex gap-4 p-5 rounded-xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500/30 hover:shadow-md transition-all duration-200"
                          >
                            <div className="pt-1 shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-green-600 dark:bg-green-500 group-hover:scale-125 transition-transform" />
                            </div>
                            <div className="text-sm sm:text-base leading-relaxed text-foreground flex-1">
                              {formatTextWithBoldLabels(language === "en" ? achievement.textEn : achievement.text)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Výzvy a učení */}
                  {selectedExperience.challenges.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 border-b border-border pb-2">
                        <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
                          <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {language === "en" ? "Challenges & Learning" : "Výzvy a učení"}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {selectedExperience.challenges.map((challenge, idx) => (
                          <li
                            key={idx}
                            className="group flex gap-4 p-5 rounded-xl bg-orange-500/5 border border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/30 hover:shadow-md transition-all duration-200"
                          >
                            <div className="pt-1 shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-orange-600 dark:bg-orange-500 group-hover:scale-125 transition-transform" />
                            </div>
                            <div className="text-sm sm:text-base leading-relaxed text-foreground flex-1">
                              {formatTextWithBoldLabels(language === "en" ? challenge.textEn : challenge.text)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
