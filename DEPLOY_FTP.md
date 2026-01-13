# Instrukce pro nasazení na FTP hosting

## Co bylo upraveno pro FTP hosting

1. **Statický export**: Projekt je nyní nakonfigurován pro statický export (`output: 'export'` v `next.config.mjs`)
2. **Apache konfigurace**: Přidán soubor `.htaccess` pro správné routování
3. **Optimalizace obrázků**: Obrázky jsou nastaveny jako `unoptimized: true` pro statický export

## Postup nasazení

### 1. Vytvoření statického buildu

```bash
npm run build
```

Tento příkaz vytvoří statický export ve složce `out/`. Tato složka obsahuje všechny soubory potřebné pro nasazení na FTP hosting.

### 2. Nahrání na FTP hosting

#### Možnost A: Pomocí FTP klienta (FileZilla, WinSCP, atd.)

1. Otevřete FTP klienta
2. Připojte se k vašemu FTP serveru pomocí přihlašovacích údajů od poskytovatele hostingu
3. Přejděte do složky `public_html` nebo `www` (záleží na poskytovateli)
4. Nahrajte **všechny soubory a složky** ze složky `out/` do kořenové složky webu
5. Ujistěte se, že soubor `.htaccess` je také nahrán

#### Možnost B: Pomocí příkazové řádky

```bash
# Pokud máte nainstalovaný lftp nebo podobný nástroj
lftp -u username,password ftp.yourhosting.com -e "mirror -R out/ /public_html/; quit"
```

### 3. Struktura souborů na serveru

Po nahrání by struktura měla vypadat takto:

```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── images/
├── robots.txt
├── sitemap.xml
└── ...
```

### 4. Kontrola nasazení

1. Otevřete vaši doménu v prohlížeči
2. Zkontrolujte, že všechny stránky fungují správně
3. Ověřte, že obrázky se načítají
4. Zkontrolujte, že routing funguje (zkuste přejít na `/services`)

## Důležité poznámky

### Co funguje:
- ✅ Statické stránky
- ✅ Client-side routing
- ✅ Obrázky a statické soubory
- ✅ SEO (robots.txt, sitemap.xml)

### Co nefunguje (kvůli statickému exportu):
- ❌ API routes (`/api/*`)
- ❌ Server-side rendering (getServerSideProps)
- ❌ Incremental Static Regeneration (ISR)
- ❌ Next.js Image Optimization (používá se unoptimized)

### Pokud máte problémy:

1. **404 chyby při navigaci**: Zkontrolujte, že `.htaccess` je správně nahrán
2. **Obrázky se nenačítají**: Zkontrolujte cesty k obrázkům (měly by být relativní)
3. **Styly se nenačítají**: Zkontrolujte, že složka `_next/static/` je nahrána

## Aktualizace webu

Při každé změně:

1. Proveďte změny v kódu
2. Spusťte `npm run build`
3. Nahrajte obsah složky `out/` na FTP server (můžete přepsat existující soubory)

## Alternativní řešení

Pokud máte problémy s FTP hostingem, zvažte:

- **Vercel** (doporučeno pro Next.js) - zdarma, automatické nasazení z GitHubu
- **Netlify** - podobné jako Vercel
- **Cloudflare Pages** - rychlé a zdarma
- **GitHub Pages** - zdarma pro statické weby

Tyto služby podporují Next.js nativně a nevyžadují statický export.
