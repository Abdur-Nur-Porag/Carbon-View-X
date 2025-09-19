<?php
// Paths
$configPath = 'bundle.json';
$outputHtmlPath = 'output.html';
$encryptedBundlePath = 'main.bundle';
$password = 'abdurnurporag'; // 🔑 CHANGE THIS

// Read config.json
$jsonData = file_get_contents($configPath);
$config = json_decode($jsonData, true);

if (!$config) {
    die("Invalid JSON in config.json");
}

// Start HTML
$htmlContent = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n";
$htmlContent .= '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">' . "\n";
$htmlContent .= "<title>Generated HTML</title>";

// Add CSS inline
if (isset($config['css']) && is_array($config['css'])) {
    foreach ($config['css'] as $css) {
        $comment = isset($css['comment']) ? $css['comment'] : '';
        $loc = isset($css['loc']) ? $css['loc'] : '';

        if ($comment) {
            $htmlContent .= "<!-- {$comment} -->\n";
        }

        if ($loc && file_exists($loc)) {
            $cssContent = file_get_contents($loc);
            $htmlContent .= "<style>\n{$cssContent}\n</style>\n";
        }
    }
}

// Add Protection Styles
$htmlContent .= "<!-- Protection Styles -->\n<style>
html, body {
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  touch-action: manipulation;
}
* {
  -webkit-tap-highlight-color: transparent;
}
#app {
  height: 100vh;
}
</style>\n";

$htmlContent .= "</head>\n<body>\n";

// Add app div
$htmlContent .= '<div id="app"></div>' . "\n";

// Add JS inline
if (isset($config['js']) && is_array($config['js'])) {
    foreach ($config['js'] as $js) {
        $comment = isset($js['comment']) ? $js['comment'] : '';
        $loc = isset($js['loc']) ? $js['loc'] : '';
        $type = isset($js['type']) ? $js['type'] : 'text/javascript';

        if ($comment) {
            $htmlContent .= "<!-- {$comment} -->\n";
        }

        if ($loc && file_exists($loc)) {
            $jsContent = file_get_contents($loc);
            $htmlContent .= "<script type=\"{$type}\">\n{$jsContent}\n</script>\n";
        }
    }
}

// Add Themes.apply script
$htmlContent .= "<script>\nThemes.apply('light');\n</script>\n";

// Add Protection Scripts
$htmlContent .= "<!-- Protection Scripts -->\n<script>
// Disable context menu
window.addEventListener('contextmenu', e => e.preventDefault());

// Disable copy, cut, paste
['copy', 'cut', 'paste'].forEach(evt =>
  document.addEventListener(evt, e => e.preventDefault())
);

// Disable selection
document.addEventListener('selectstart', e => e.preventDefault());

// Disable gesture zoom
document.addEventListener('gesturestart', e => e.preventDefault());

// Disable multi-touch zoom
document.addEventListener('touchstart', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
</script>\n";

$htmlContent .= "</body>\n</html>";

// Write output.html
file_put_contents($outputHtmlPath, $htmlContent);
echo "HTML generated successfully at {$outputHtmlPath}\n";

// =====================================================
// 🔐 Encrypt output.html → main.bundle
// =====================================================

// Derive 256-bit key from password (PBKDF2 with fixed salt, same as Android)
$salt = "uikitAppSalt";
$key = openssl_pbkdf2($password, $salt, 32, 65536, 'sha256');

// Generate random IV (16 bytes)
$iv = openssl_random_pseudo_bytes(16);

// Encrypt with AES-256-CBC
$ciphertext = openssl_encrypt($htmlContent, "AES-256-CBC", $key, OPENSSL_RAW_DATA, $iv);
if ($ciphertext === false) {
    die("Encryption failed.\n");
}

// Prepend IV to ciphertext
$bundleData = $iv . $ciphertext;

// Save to main.bundle (binary!)
file_put_contents($encryptedBundlePath, $bundleData);
echo "Encrypted bundle written to {$encryptedBundlePath}\n";
?>