# SEO a Analytics Setup Guide

Tento projekt obsahuje kompletní setup pro SEO optimalizaci, Google Analytics a podporu AI vyhledávačů.

## 📊 Co je implementováno

### 1. Google Analytics (GA4)
- Automatické sledování page views
- Helper funkce pro custom eventy
- Optimalizováno pro Next.js App Router

### 2. SEO Optimalizace
- **Metadata**: Open Graph, Twitter Cards
- **Structured Data (JSON-LD)**: Schema.org pro lepší indexaci
- **Sitemap.xml**: Automaticky generovaný
- **Robots.txt**: Konfigurovatelný

### 3. AI Search Optimization
- Structured Data (JSON-LD) pro AI vyhledávače
- Semantic HTML
- Rich snippets support

## 🚀 Nastavení

### Krok 1: Vytvořte Google Analytics účet

1. Jděte na [Google Analytics](https://analytics.google.com/)
2. Vytvořte nový účet a property
3. Zkopírujte **Measurement ID** (formát: `G-XXXXXXXXXX`)

### Krok 2: Nastavte environment variables

Vytvořte soubor `.env.local` v root adresáři projektu:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://panzmoravy.cz

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification (volitelné)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### Krok 3: Google Search Console

1. Jděte na [Google Search Console](https://search.google.com/search-console)
2. Přidejte svou doménu
3. Ověřte vlastnictví pomocí meta tagu (kód získáte v Search Console)
4. Přidejte `NEXT_PUBLIC_GOOGLE_VERIFICATION` do `.env.local`

### Krok 4: Ověření

Po nasazení webu zkontrolujte:

- ✅ `https://vase-domena.cz/robots.txt` - měl by být přístupný
- ✅ `https://vase-domena.cz/sitemap.xml` - měl by obsahovat všechny stránky
- ✅ V Google Analytics byste měli vidět real-time návštěvníky

## 📈 Použití Analytics

### Automatické sledování
Page views se sledují automaticky při navigaci.

### Custom eventy

```tsx
import { trackEvent } from "@/lib/analytics"

// Sledování kliknutí na tlačítko
trackEvent("click", "button", "contact_button")

// Sledování konverze
trackEvent("conversion", "form", "contact_form", 1)
```

## 🔍 SEO Best Practices

### Metadata pro nové stránky

```tsx
import { generateMetadata } from "@/lib/seo"

export const metadata = generateMetadata({
  title: "Název stránky",
  description: "Popis stránky",
  path: "/cesta",
})
```

### Structured Data

Automaticky se přidává do layout.tsx. Pro custom data:

```tsx
import { generateStructuredData } from "@/lib/seo"

const schema = generateStructuredData({
  type: "Person",
  name: "Jméno",
  jobTitle: "Pozice",
})
```

## 🤖 AI Search Optimization

Projekt obsahuje:
- **JSON-LD structured data** - pro AI vyhledávače (ChatGPT, Perplexity, atd.)
- **Semantic HTML** - správné HTML5 tagy
- **Rich snippets** - pro lepší zobrazení ve výsledcích

## 📝 Checklist před nasazením

- [ ] Nastaven `NEXT_PUBLIC_SITE_URL` na produkční URL
- [ ] Přidán Google Analytics ID
- [ ] Ověřena doména v Google Search Console
- [ ] Zkontrolován robots.txt
- [ ] Zkontrolován sitemap.xml
- [ ] Testovány Open Graph tagy (pomocí [Open Graph Preview](https://www.opengraph.xyz/))

## 🛠️ Debugging

### Zkontrolovat, zda funguje Google Analytics:

1. Otevřete DevTools (F12)
2. Jděte na Network tab
3. Filtrujte podle "gtag" nebo "analytics"
4. Měli byste vidět requesty na Google Analytics

### Zkontrolovat Structured Data:

1. Použijte [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Nebo [Schema.org Validator](https://validator.schema.org/)

## 📚 Užitečné odkazy

- [Google Analytics Documentation](https://developers.google.com/analytics)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

