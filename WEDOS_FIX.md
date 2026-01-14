# Řešení problému s WEDOS hostingem

## Problém
Web se nezobrazuje správně na WEDOS hostingu.

## Možné příčiny
1. `.htaccess` není podporován nebo není správně načten
2. `mod_rewrite` není povolený
3. Špatná struktura souborů
4. Cache prohlížeče

## Řešení - Krok za krokem

### 1. Nahrání nových souborů

V `ftp-upload` jsou nyní:
- ✅ `.htaccess` (zjednodušená verze pro WEDOS)
- ✅ `index.php` (fallback, pokud .htaccess nefunguje)

**Postup:**
1. V Total Commanderu nahrajte **VŠECHNY** soubory z `ftp-upload/` na server
2. **DŮLEŽITÉ:** Ujistěte se, že `.htaccess` a `index.php` jsou nahrány
3. Smazat starý WEDOS `index.html` na serveru

### 2. Kontrola na serveru

Po nahrání zkontrolujte na serveru:
- ✅ `.htaccess` existuje (Ctrl+H pro zobrazení skrytých souborů)
- ✅ `index.html` existuje (náš projekt, ne WEDOS)
- ✅ `index.php` existuje (nový fallback)
- ✅ Složka `_next/` existuje
- ✅ Složka `images/` existuje

### 3. Testování

1. **Otevřete:** `www.panzmoravy.cz`
2. **Hard refresh:** Ctrl+F5 (vymaže cache)
3. **Zkuste:** `www.panzmoravy.cz/index.html` (přímý přístup)
4. **Zkuste:** `www.panzmoravy.cz/index.php` (fallback)

### 4. Pokud stále nefunguje

#### Možnost A: Kontaktovat podporu WEDOS
Zeptejte se:
- Je povolený `mod_rewrite`?
- Je `.htaccess` podporován?
- Jaká je správná cesta k webovým souborům? (`www/` nebo `public_html/`?)

#### Možnost B: Použít index.php jako hlavní
Pokud `.htaccess` nefunguje:
1. Na serveru přejmenujte `index.html` → `index_backup.html`
2. Přejmenujte `index.php` → `index.html` (dočasně)
3. Nebo nastavte v WEDOS adminu, aby `index.php` měl prioritu před `index.html`

#### Možnost C: Zkontrolovat strukturu
Možná jsou soubory v špatné složce:
- Zkontrolujte, zda jsou soubory v `www/` nebo `public_html/`
- Zkontrolujte, zda není potřeba subdoména nebo jiná cesta

### 5. Alternativní řešení

Pokud WEDOS nefunguje, zvažte:

**Vercel (DOPORUČENO):**
- ✅ Zdarma
- ✅ Automatické nasazení z GitHubu
- ✅ Perfektní podpora Next.js
- ✅ Rychlé CDN

**Postup pro Vercel:**
1. Přihlaste se na https://vercel.com
2. Připojte GitHub repozitář
3. Vercel automaticky nasadí projekt
4. Hotovo! (5 minut)

**Netlify:**
- Podobné jako Vercel
- Také zdarma a automatické nasazení

## Debug informace

Pokud chcete zjistit, co se děje:

1. **Otevřete Developer Tools** (F12)
2. **Zkontrolujte Network tab:**
   - Které soubory se načítají?
   - Které vracejí 404?
   - Jaké jsou HTTP statusy?

3. **Zkontrolujte Console:**
   - Jsou nějaké JavaScript chyby?
   - Načítají se správné cesty?

4. **Zkontrolujte Response:**
   - Co vrací server při požadavku na `/`?
   - Je to HTML nebo chybová stránka?

## Kontakt na podporu WEDOS

Pokud potřebujete pomoct:
- Email: podpora@wedos.cz
- Telefon: +420 226 013 013
- Znalostní báze: https://kb.wedos.com

Zeptejte se konkrétně:
- "Je na mém hostingu povolený mod_rewrite?"
- "Funguje .htaccess na mém účtu?"
- "Jaká je správná cesta k webovým souborům?"
