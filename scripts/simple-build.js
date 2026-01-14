#!/usr/bin/env node

/**
 * Jednoduchý build script pro WEDOS hosting
 * Tento script zkontroluje, že všechny soubory jsou správně vygenerované
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const FTP_UPLOAD_DIR = path.join(__dirname, '..', 'ftp-upload');
const ROOT_DIR = path.join(__dirname, '..');

console.log('🔍 Kontrola build souborů...\n');

// Zkopírovat .htaccess a index.php do out/ pokud nejsou
const htaccessSource = path.join(ROOT_DIR, '.htaccess');
const htaccessDest = path.join(OUT_DIR, '.htaccess');
const indexPhpSource = path.join(FTP_UPLOAD_DIR, 'index.php');
const indexPhpDest = path.join(OUT_DIR, 'index.php');

if (fs.existsSync(htaccessSource) && !fs.existsSync(htaccessDest)) {
  fs.copyFileSync(htaccessSource, htaccessDest);
  console.log('📋 .htaccess zkopírován do out/\n');
}

if (fs.existsSync(indexPhpSource) && !fs.existsSync(indexPhpDest)) {
  fs.copyFileSync(indexPhpSource, indexPhpDest);
  console.log('📋 index.php zkopírován do out/\n');
}

// Seznam kritických souborů
const criticalFiles = [
  'index.html',
  '.htaccess',
  'robots.txt',
  'sitemap.xml',
  '404.html',
  'services/index.html',
];

// Seznam kritických složek
const criticalDirs = [
  '_next',
  'images',
];

let hasErrors = false;

// Kontrola souborů
console.log('📄 Kontrola souborů:');
criticalFiles.forEach(file => {
  const filePath = path.join(OUT_DIR, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`  ✅ ${file} (${sizeKB} KB)`);
  } else {
    console.log(`  ❌ ${file} CHYBÍ!`);
    hasErrors = true;
  }
});

console.log('\n📁 Kontrola složek:');
criticalDirs.forEach(dir => {
  const dirPath = path.join(OUT_DIR, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`  ✅ ${dir}/`);
  } else {
    console.log(`  ❌ ${dir}/ CHYBÍ!`);
    hasErrors = true;
  }
});

// Kontrola .htaccess
console.log('\n⚙️  Kontrola .htaccess:');
const htaccessPath = path.join(OUT_DIR, '.htaccess');
if (fs.existsSync(htaccessPath)) {
  const content = fs.readFileSync(htaccessPath, 'utf8');
  if (content.includes('RewriteEngine On')) {
    console.log('  ✅ .htaccess obsahuje RewriteEngine');
  } else {
    console.log('  ⚠️  .htaccess neobsahuje RewriteEngine');
  }
} else {
  console.log('  ❌ .htaccess CHYBÍ!');
  hasErrors = true;
}

// Kontrola index.html
console.log('\n📄 Kontrola index.html:');
const indexPath = path.join(OUT_DIR, 'index.html');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf8');
  
  // Kontrola, že není WEDOS placeholder
  if (content.includes('Webhosting je aktivní') || content.includes('WEDOS')) {
    console.log('  ⚠️  POZOR: index.html vypadá jako WEDOS placeholder!');
    console.log('  ⚠️  Musíte smazat starý index.html na serveru!');
    hasErrors = true;
  } else {
    console.log('  ✅ index.html vypadá správně (náš projekt)');
  }
  
  // Kontrola, že obsahuje náš obsah
  if (content.includes('Panzmoravy') || content.includes('Portfolio')) {
    console.log('  ✅ index.html obsahuje náš obsah');
  } else {
    console.log('  ⚠️  index.html možná neobsahuje náš obsah');
  }
}

// Shrnutí
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('❌ Nalezeny chyby! Prosím opravte je před nahráním na server.');
  process.exit(1);
} else {
  console.log('✅ Všechny soubory jsou připraveny!');
  console.log('\n📤 Nyní můžete nahrát obsah složky "out/" na FTP server.');
  console.log('   Nebo použijte: npm run deploy:ftp');
  process.exit(0);
}
