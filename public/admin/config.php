<?php
// Admin Panel Settings

// Admin panel login password
define('ADMIN_PASSWORD', 'admin123'); 

// Data file paths
define('PRODUCTS_FILE', __DIR__ . '/data/products.json');
define('SETTINGS_FILE', __DIR__ . '/data/settings.json');
define('MESSAGES_FILE', __DIR__ . '/data/messages.json');

// Upload directories
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('UPLOAD_URL_PATH', 'uploads/');

// Session setup
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check auth status
function is_logged_in() {
    return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
}

// Initialize directory and JSON files
if (!file_exists(__DIR__ . '/data')) {
    mkdir(__DIR__ . '/data', 0755, true);
}
if (!file_exists(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

if (!file_exists(PRODUCTS_FILE)) {
    file_put_contents(PRODUCTS_FILE, '[]');
}
if (!file_exists(SETTINGS_FILE)) {
    // Initial schema settings
    $defaultSettings = [
        "contact" => [
            "address" => "City, Country",
            "email" => "contact@example.com",
            "phone" => "0123456789",
            "website" => "www.example.com"
        ],
        "about" => [
            "vision" => "Our vision description goes here.",
            "mission" => "Our mission description goes here."
        ],
        "counters" => [
            "countries" => "10",
            "team" => "20",
            "certificates" => "5",
            "products" => "30"
        ],
        "media_items" => []
    ];
    file_put_contents(SETTINGS_FILE, json_encode($defaultSettings, JSON_PRETTY_PRINT));
}
if (!file_exists(MESSAGES_FILE)) {
    file_put_contents(MESSAGES_FILE, '[]');
}
?>
