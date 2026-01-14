# Postup nasazení přes Total Commander

## 📋 Krok za krokem

### 1. Lokálně na vašem počítači - Příprava souborů

Spusťte v terminálu (PowerShell nebo CMD):
```bash
npm run build:ftp
```

**Co to udělá:**
- ✅ Vytvoří statický build projektu
- ✅ Zkontroluje, že všechny soubory jsou správně
- ✅ Zkopíruje vše do složky `ftp-upload/` (včetně `.htaccess` a `index.php`)

**Výsledek:** Složka `ftp-upload/` obsahuje všechny soubory připravené k nahrání.

---

### 2. Přes Total Commander - Nahrání na server

#### A) Připojení k FTP serveru

1. Otevřete **Total Commander**
2. Klikněte na **FTP** (nebo stiskněte **Ctrl+F**)
3. Klikněte na **"Nové FTP připojení"**
4. Zadejte:
   - **Server:** `390085.w85.wedos.net`
   - **Uživatel:** `w390085`
   - **Heslo:** (vaše FTP heslo)
5. Klikněte **OK**

#### B) Navigace na serveru

1. V **pravém panelu** (FTP server) přejděte do složky:
   - `0:/www/domains/` 
   - nebo `public_html/`
   - (záleží na nastavení WEDOS)

#### C) Nahrání souborů

1. V **levém panelu** přejděte do složky:
   ```
   c:\CURSOR_PROJECT\Panzmoravy-portfolioweb\Panzmoravy_releasev2\ftp-upload\
   ```

2. **DŮLEŽITÉ - Před nahráním:**
   - V **pravém panelu** (server) najděte starý `index.html` (WEDOS placeholder)
   - **Pravý klik** → **Smazat**
   - Tento soubor musí být smazán!

3. **Nahrání:**
   - V **levém panelu** vyberte **VŠECHNY** soubory a složky (Ctrl+A)
   - **Přetáhněte** na pravý panel (server)
   - Nebo: Vyberte vše → **F5** (Kopírovat) → **OK**

4. **Zkontrolujte, že byly nahrány:**
   - ✅ `.htaccess` (Ctrl+H pro zobrazení skrytých souborů)
   - ✅ `index.html` (náš projekt, ne WEDOS)
   - ✅ `index.php` (fallback)
   - ✅ `robots.txt`
   - ✅ `sitemap.xml`
   - ✅ Složka `_next/`
   - ✅ Složka `images/`
   - ✅ Složka `services/`

---

### 3. Testování

1. Otevřete v prohlížeči: `www.panzmoravy.cz`
2. Stiskněte: **Ctrl+F5** (hard refresh - vymaže cache)
3. Zkontrolujte:
   - ✅ Načítá se váš web (ne WEDOS stránka)
   - ✅ Obrázky se načítají
   - ✅ Navigace funguje (`/services`)

---

## 🔍 Kontrola v Total Commanderu

### Zobrazení skrytých souborů
- Stiskněte **Ctrl+H** (zobrazí/skryje skryté soubory)
- Důležité pro kontrolu `.htaccess`

### Porovnání souborů
- Vyberte soubory v obou panelech
- Stiskněte **Ctrl+R** (synchronizace)
- Zkontrolujte, že všechny soubory jsou na serveru

---

## ⚠️ Časté problémy

### Problém: Stále se zobrazuje WEDOS stránka
**Řešení:**
1. Zkontrolujte, že jste **smazali** starý `index.html` na serveru
2. Zkontrolujte, že nový `index.html` z `ftp-upload` byl nahrán
3. V prohlížeči: **Ctrl+Shift+Delete** → vymažte cache

### Problém: .htaccess není vidět
**Řešení:**
1. V Total Commanderu stiskněte **Ctrl+H** (zobrazit skryté soubory)
2. Zkontrolujte, že `.htaccess` je na serveru

### Problém: 404 chyby při navigaci
**Řešení:**
1. Zkontrolujte, že `.htaccess` je na serveru
2. Zkontrolujte, že `index.php` je na serveru
3. Kontaktujte podporu WEDOS, zda je povolený `mod_rewrite`

---

## 📝 Shrnutí

**Lokálně (1x):**
```bash
npm run build:ftp
```

**Pak přes Total Commander:**
1. Připojit se k FTP
2. Smazat starý WEDOS `index.html`
3. Nahrát VŠECHNO z `ftp-upload/` na server
4. Hotovo!

**Test:**
- Otevřít `www.panzmoravy.cz`
- Ctrl+F5

---

## 💡 Tip

Pokud máte problémy, můžete zkusit:
- **Vercel** (zdarma, automatické nasazení z GitHubu)
- **Netlify** (podobné jako Vercel)
- **Cloudflare Pages** (rychlé a zdarma)

Tyto služby nevyžadují ruční nahrávání přes FTP.
