#!/usr/bin/env node

/**
 * Skript pro kopírování buildu do ftp-upload složky
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const FTP_UPLOAD_DIR = path.join(__dirname, '..', 'ftp-upload');
const ROOT_DIR = path.join(__dirname, '..');

console.log('📦 Kopírování souborů do ftp-upload/...\n');

// Smazat starou ftp-upload složku
if (fs.existsSync(FTP_UPLOAD_DIR)) {
  fs.rmSync(FTP_UPLOAD_DIR, { recursive: true, force: true });
  console.log('🗑️  Stará ftp-upload složka smazána');
}

// Zkopírovat obsah out/ do ftp-upload/
if (fs.existsSync(OUT_DIR)) {
  fs.cpSync(OUT_DIR, FTP_UPLOAD_DIR, { recursive: true });
  console.log('✅ Soubory zkopírovány z out/ do ftp-upload/');
} else {
  console.error('❌ Složka out/ neexistuje! Spusťte nejdřív: npm run build');
  process.exit(1);
}

// Zkontrolovat, že .htaccess a index.php jsou tam
const htaccessPath = path.join(FTP_UPLOAD_DIR, '.htaccess');
const indexPhpPath = path.join(FTP_UPLOAD_DIR, 'index.php');

if (!fs.existsSync(htaccessPath)) {
  // Zkusit zkopírovat z root
  const rootHtaccess = path.join(ROOT_DIR, '.htaccess');
  if (fs.existsSync(rootHtaccess)) {
    fs.copyFileSync(rootHtaccess, htaccessPath);
    console.log('📋 .htaccess zkopírován');
  } else {
    console.warn('⚠️  .htaccess nebyl nalezen!');
  }
}

if (!fs.existsSync(indexPhpPath)) {
  // Zkusit zkopírovat z ftp-upload (pokud existuje)
  const sourceIndexPhp = path.join(ROOT_DIR, 'ftp-upload', 'index.php');
  if (fs.existsSync(sourceIndexPhp)) {
    fs.copyFileSync(sourceIndexPhp, indexPhpPath);
    console.log('📋 index.php zkopírován');
  } else {
    console.warn('⚠️  index.php nebyl nalezen!');
  }
}

console.log('\n✅ Hotovo! Složka ftp-upload/ je připravena k nahrání na server.');
console.log('📤 Nahrajte VŠECHNY soubory z ftp-upload/ na FTP server.');
