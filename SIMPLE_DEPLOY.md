# Jednoduchý postup pro nasazení na WEDOS

## 🚀 Rychlý postup (3 kroky)

### 1. Lokálně na vašem počítači - Příprava souborů

Spusťte v terminálu (PowerShell nebo CMD):
```bash
npm run build:ftp
```

**Co to udělá (lokálně na vašem počítači):**
- ✅ Vytvoří statický build projektu
- ✅ Zkontroluje, že všechny soubory jsou správně
- ✅ Zkopíruje vše do složky `ftp-upload/` na vašem počítači
- ✅ Automaticky zkopíruje `.htaccess` a `index.php` do `ftp-upload/`

**Výsledek:** Složka `c:\CURSOR_PROJECT\Panzmoravy-portfolioweb\Panzmoravy_releasev2\ftp-upload\` obsahuje všechny soubory připravené k nahrání.

### 2. Přes Total Commander - Nahrání na server

**DŮLEŽITÉ:** Tento krok děláte přes Total Commander, ne přes npm příkazy!

1. Otevřete **Total Commander**
2. Připojte se k FTP: `ftp://w390085@390085.w85.wedos.net`
3. Přejděte do složky: `0:/www/domains/` (pravý panel - server)
4. V levém panelu přejděte do: `c:\CURSOR_PROJECT\Panzmoravy-portfolioweb\Panzmoravy_releasev2\ftp-upload\`
5. **SMAZAT** starý `index.html` na serveru (pravý panel - WEDOS placeholder)
6. Vyberte **VŠECHNY** soubory a složky v levém panelu (Ctrl+A)
7. Přetáhněte na pravý panel (server) nebo stiskněte F5
8. Potvrďte přepsání existujících souborů

### 3. Otestovat
1. Otevřete: `www.panzmoravy.cz`
2. Stiskněte: **Ctrl+F5** (hard refresh)

## 📋 Co dělá `npm run build:ftp`?

1. **Build** - Vytvoří statický export Next.js
2. **Kontrola** - Ověří, že všechny soubory jsou správně
3. **Kopie** - Zkopíruje do `ftp-upload/` pro nahrání

## ⚠️ Důležité poznámky

### Před nahráním:
- ✅ **SMAZAT** starý WEDOS `index.html` na serveru
- ✅ Zkontrolovat, že `.htaccess` je nahrán (Ctrl+H pro zobrazení skrytých souborů)
- ✅ Zkontrolovat, že `index.php` je nahrán (fallback)

### Po nahrání:
- ✅ Otevřít web v prohlížeči
- ✅ Hard refresh (Ctrl+F5)
- ✅ Zkontrolovat, že se načítají obrázky
- ✅ Zkontrolovat navigaci (`/services`)

## 🔧 Řešení problémů

### Problém: Stále se zobrazuje WEDOS stránka
**Řešení:**
1. Zkontrolujte, že jste smazali starý `index.html` na serveru
2. Zkontrolujte, že nový `index.html` z `ftp-upload` byl nahrán
3. Vymažte cache prohlížeče (Ctrl+Shift+Delete)

### Problém: 404 chyby
**Řešení:**
1. Zkontrolujte, že `.htaccess` je na serveru
2. Zkontrolujte, že `index.php` je na serveru (fallback)
3. Kontaktujte podporu WEDOS, zda je povolený `mod_rewrite`

### Problém: Obrázky se nenačítají
**Řešení:**
1. Zkontrolujte, že složka `images/` byla nahrána
2. Zkontrolujte cesty v Developer Tools (F12 → Network)

## 🎯 Alternativní řešení: Vercel (DOPORUČENO)

Pokud WEDOS stále nefunguje, použijte **Vercel**:

1. **Přihlaste se:** https://vercel.com (zdarma)
2. **Připojte GitHub:** Klikněte "Import Project" → vyberte váš repozitář
3. **Hotovo!** Vercel automaticky nasadí projekt (5 minut)

**Výhody Vercel:**
- ✅ Zdarma
- ✅ Automatické nasazení z GitHubu
- ✅ Perfektní podpora Next.js
- ✅ Rychlé CDN
- ✅ Automatické HTTPS
- ✅ Bez konfigurace

## 📞 Kontakt

Pokud potřebujete pomoct:
- **WEDOS podpora:** podpora@wedos.cz
- **Vercel dokumentace:** https://vercel.com/docs
