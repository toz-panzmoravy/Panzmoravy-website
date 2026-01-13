═══════════════════════════════════════════════════════════════
  INSTRUKCE PRO NAHRÁNÍ NA FTP HOSTING
═══════════════════════════════════════════════════════════════

Tato složka obsahuje všechny soubory potřebné pro nasazení webu
na FTP hosting.

═══════════════════════════════════════════════════════════════
  CO NÁHRÁT NA FTP
═══════════════════════════════════════════════════════════════

Nahrajte VŠECHNY soubory a složky z této složky (ftp-upload) 
do kořenové složky vašeho webhostingu.

Typicky to bude složka:
  - public_html/
  - www/
  - httpdocs/
  - nebo jiná podle vašeho poskytovatele

═══════════════════════════════════════════════════════════════
  DŮLEŽITÉ SOUBORY
═══════════════════════════════════════════════════════════════

✓ index.html          - Hlavní stránka
✓ .htaccess           - Apache konfigurace (DŮLEŽITÉ!)
✓ robots.txt          - SEO pro vyhledávače
✓ sitemap.xml         - Mapa stránek
✓ _next/              - Next.js statické soubory
✓ images/             - Obrázky projektů
✓ services/            - Stránka služeb

═══════════════════════════════════════════════════════════════
  POSTUP NAHRÁNÍ
═══════════════════════════════════════════════════════════════

1. PŘIPOJENÍ K FTP
   - Použijte FTP klienta (FileZilla, WinSCP, Total Commander)
   - Zadejte přihlašovací údaje od vašeho poskytovatele hostingu
   - Připojte se k FTP serveru

2. NAHRÁNÍ SOUBORŮ
   - Přejděte do kořenové složky webu (public_html, www, atd.)
   - Vyberte VŠECHNY soubory a složky z této složky (ftp-upload)
   - Nahrajte je na server
   - Ujistěte se, že soubor .htaccess je také nahrán

3. KONTROLA
   - Otevřete vaši doménu v prohlížeči
   - Zkontrolujte, že web funguje správně
   - Ověřte, že všechny stránky se načítají

═══════════════════════════════════════════════════════════════
  POZNÁMKY
═══════════════════════════════════════════════════════════════

⚠ DŮLEŽITÉ: Soubor .htaccess musí být nahrán!
   Bez něj nebude fungovat správné routování stránek.

⚠ Pokud máte problémy:
   - Zkontrolujte, že všechny soubory jsou nahrány
   - Ověřte, že .htaccess je na serveru
   - Kontaktujte podporu hostingu

═══════════════════════════════════════════════════════════════
  STRUKTURA SOUBORŮ
═══════════════════════════════════════════════════════════════

ftp-upload/
├── .htaccess          ← DŮLEŽITÉ!
├── index.html
├── robots.txt
├── sitemap.xml
├── _next/             ← Next.js soubory
│   └── static/
├── images/            ← Obrázky
├── services/          ← Stránka služeb
└── [ostatní soubory]

═══════════════════════════════════════════════════════════════

Po nahrání by měl web fungovat na vaší doméně!
