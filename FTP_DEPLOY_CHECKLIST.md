# Checklist pro nahrání na FTP hosting

## ⚠️ DŮLEŽITÉ: Před nahráním

1. **SMAZAT starý WEDOS index.html na serveru**
   - V Total Commanderu: Najděte `index.html` na serveru (pravý panel)
   - Pravý klik → Smazat
   - Tento soubor je placeholder od WEDOS a musí být smazán!

## ✅ Postup nahrání

### 1. Připojení k FTP
- Server: `ftp://w390085@390085.w85.wedos.net`
- Složka: `0:/www/domains/` (nebo `public_html/`)

### 2. Nahrání souborů
V Total Commanderu:
- **Levý panel**: `c:\CURSOR_PROJECT\Panzmoravy-portfolioweb\Panzmoravy_releasev2\ftp-upload\`
- **Pravý panel**: FTP server `0:/www/domains/`

**Postup:**
1. Vyberte VŠECHNY soubory a složky v levém panelu (Ctrl+A)
2. Přetáhněte na pravý panel nebo použijte F5 (Kopírovat)
3. Potvrďte přepsání existujících souborů

### 3. Kontrola důležitých souborů

Po nahrání zkontrolujte, že na serveru jsou:

- ✅ `.htaccess` (musí být v kořenové složce!)
- ✅ `index.html` (náš projekt, ne WEDOS placeholder)
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ Složka `_next/` (s JavaScript soubory)
- ✅ Složka `images/`
- ✅ Složka `services/`

### 4. Kontrola .htaccess

**DŮLEŽITÉ:** `.htaccess` musí být v kořenové složce webu!

- Pokud `.htaccess` není vidět v Total Commanderu:
  - Menu → Konfigurace → Zobrazení → Zobrazit skryté soubory
  - Nebo: Ctrl+H (zobrazit skryté soubory)

### 5. Testování

Po nahrání:
1. Otevřete `www.panzmoravy.cz` v prohlížeči
2. Zkuste hard refresh: Ctrl+F5
3. Zkontrolujte, že se načítá váš web (ne WEDOS stránka)
4. Zkuste navigaci: `/services`
5. Zkontrolujte, že obrázky se načítají

## 🔧 Řešení problémů

### Problém: Stále se zobrazuje WEDOS stránka
**Řešení:**
1. Zkontrolujte, že jste smazali starý `index.html` na serveru
2. Zkontrolujte, že nový `index.html` z `ftp-upload` byl nahrán
3. Vymažte cache prohlížeče (Ctrl+Shift+Delete)
4. Zkuste hard refresh (Ctrl+F5)

### Problém: 404 chyby při navigaci
**Řešení:**
1. Zkontrolujte, že `.htaccess` je na serveru v kořenové složce
2. Zkontrolujte, že Apache má povolený mod_rewrite (mělo by být na WEDOS)

### Problém: Obrázky se nenačítají
**Řešení:**
1. Zkontrolujte, že složka `images/` byla nahrána
2. Zkontrolujte cesty k obrázkům v prohlížeči (F12 → Network)

### Problém: Styly se nenačítají
**Řešení:**
1. Zkontrolujte, že složka `_next/static/` byla nahrána
2. Zkontrolujte, že CSS soubory jsou v `_next/static/chunks/`

## 📝 Poznámky

- WEDOS používá Apache, takže `.htaccess` by měl fungovat
- Pokud máte problémy, kontaktujte podporu WEDOS
- Alternativně můžete použít Vercel/Netlify pro lepší podporu Next.js
