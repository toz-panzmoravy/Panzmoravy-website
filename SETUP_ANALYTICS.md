# 🚀 Krok za krokem: Nastavení Google Analytics

## KROK 1: Vytvoření Google Analytics účtu

1. **Jděte na:** https://analytics.google.com/
2. **Přihlaste se** pomocí svého Google účtu
3. **Klikněte na "Začít měřit"** nebo "Start measuring"

### Nastavení účtu:
- **Název účtu:** Panzmoravy (nebo jakýkoliv název)
- **Nastavení sdílení dat:** Můžete nechat výchozí
- **Klikněte na "Další"**

### Nastavení Property (vlastnosti):
- **Název property:** Panzmoravy Portfolio (nebo jakýkoliv název)
- **Časové pásmo:** Vyberte "Prague" nebo "Czech Republic"
- **Měna:** CZK nebo EUR
- **Klikněte na "Další"**

### Informace o podnikání:
- **Obor:** Vyberte "Technology" nebo "Other"
- **Velikost podniku:** Vyberte podle sebe
- **Jak chcete používat Google Analytics:** Vyberte "Measure a website"
- **Klikněte na "Vytvořit"**

### Přijměte podmínky:
- Zaškrtněte souhlas s podmínkami
- **Klikněte na "Přijmout"**

## KROK 2: Získání Measurement ID

Po vytvoření účtu uvidíte **Measurement ID** ve formátu: `G-XXXXXXXXXX`

**Kde ho najdete:**
1. V levém menu klikněte na **"Admin"** (ozubené kolečko)
2. V sekci **"Property"** klikněte na **"Data Streams"**
3. Klikněte na váš web stream
4. **Measurement ID** uvidíte nahoře (formát: `G-XXXXXXXXXX`)

**ZAPIŠTE SI TENTO KÓD!** Budete ho potřebovat.

## KROK 3: Vytvoření .env.local souboru

Vytvořte soubor `.env.local` v root adresáři projektu s tímto obsahem:

```env
NEXT_PUBLIC_SITE_URL=https://panzmoravy.cz
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Důležité:** 
- Nahraďte `G-XXXXXXXXXX` vaším skutečným Measurement ID z Kroku 2
- Pokud ještě nemáte doménu, použijte `http://localhost:3002` pro testování

## KROK 4: Restartování dev serveru

Po vytvoření `.env.local`:
1. **Zastavte** běžící server (Ctrl+C)
2. **Spusťte znovu:** `npm run dev`
3. Server se restartuje s novými environment variables

## KROK 5: Ověření, že to funguje

1. Otevřete web v prohlížeči: http://localhost:3002
2. Otevřete **DevTools** (F12)
3. Jděte na záložku **"Network"**
4. Filtrujte podle **"gtag"** nebo **"analytics"**
5. Měli byste vidět requesty na `google-analytics.com`

**Nebo:**
1. Jděte do Google Analytics
2. V levém menu klikněte na **"Reports"** → **"Realtime"**
3. Měli byste vidět aktivitu (pokud je web otevřený)

## ✅ Hotovo!

Po nasazení na produkci (např. Vercel) bude Google Analytics automaticky sledovat:
- Počet návštěvníků
- Které stránky jsou nejnavštěvovanější
- Kde návštěvníci přicházejí
- A mnoho dalšího

---

## 🔍 Bonus: Google Search Console (volitelné)

Pro lepší SEO můžete také nastavit Google Search Console:

1. **Jděte na:** https://search.google.com/search-console
2. **Přidejte property** (vaši doménu)
3. **Ověřte vlastnictví** pomocí HTML tagu
4. Zkopírujte verification code a přidejte do `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
   ```

---

## ❓ Problémy?

- **Nevidím data v Analytics:** Počkejte 24-48 hodin, data se zobrazují se zpožděním
- **Nejsou requesty v Network:** Zkontrolujte, že máte správné Measurement ID v `.env.local`
- **Chyba při build:** Ujistěte se, že všechny environment variables začínají s `NEXT_PUBLIC_`

