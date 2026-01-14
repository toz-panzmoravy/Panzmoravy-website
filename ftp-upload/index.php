<?php
// Fallback pro WEDOS - pokud .htaccess nefunguje
// Tento soubor přesměruje všechny požadavky na index.html

// Načíst index.html
$indexFile = __DIR__ . '/index.html';

if (file_exists($indexFile)) {
    // Získat obsah index.html
    $content = file_get_contents($indexFile);
    
    // Nastavit správný content type
    header('Content-Type: text/html; charset=utf-8');
    
    // Vypiš obsah
    echo $content;
} else {
    // Pokud index.html neexistuje, zobrazit chybu
    http_response_code(404);
    echo '<!DOCTYPE html><html><head><title>404 - File Not Found</title></head><body><h1>404 - File Not Found</h1><p>index.html not found on server.</p></body></html>';
}
?>
