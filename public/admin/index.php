<?php
require_once __DIR__ . '/config.php';

$error = '';
if (isset($_GET['action']) && $_GET['action'] === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    if ($password === ADMIN_PASSWORD) {
        $_SESSION['logged_in'] = true;
        header('Location: index.php');
        exit();
    } else {
        $error = 'كلمة المرور غير صحيحة!';
    }
}

if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    $_SESSION['logged_in'] = false;
    session_destroy();
    header('Location: index.php');
    exit();
}

if (!is_logged_in()) {
    ?>
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>تسجيل الدخول - لوحة التحكم</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
            body { font-family: 'Cairo', sans-serif; background-color: #f4f6f9; height: 100vh; display: flex; align-items: center; justify-content: center; }
            .login-card { width: 100%; max-width: 400px; padding: 2rem; border-radius: 15px; background: white; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid rgba(25, 135, 84, 0.1); }
            .btn-success { background-color: #198754; border-color: #198754; }
            .btn-success:hover { background-color: #146c43; }
            .text-primary-custom { color: #198754; }
        </style>
    </head>
    <body>
        <div class="login-card text-center">
            <h3 class="mb-2 fw-bold text-primary-custom">Control Panel</h3>
            <p class="text-muted mb-4">تسجيل الدخول لإدارة محتوى الموقع</p>
            <?php if ($error): ?><div class="alert alert-danger py-2"><?php echo $error; ?></div><?php endif; ?>
            <form action="index.php?action=login" method="POST">
                <div class="mb-3 text-start">
                    <label for="password" class="form-label">كلمة المرور</label>
                    <input type="password" class="form-control text-center" id="password" name="password" required placeholder="••••••••">
                </div>
                <button type="submit" class="btn btn-success w-100 py-2 fw-bold">تسجيل الدخول</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit();
}

function read_products() {
    if (!file_exists(PRODUCTS_FILE)) return [];
    return json_decode(file_get_contents(PRODUCTS_FILE), true) ?: [];
}
function save_products($products) {
    file_put_contents(PRODUCTS_FILE, json_encode($products, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}
function read_settings() {
    if (!file_exists(SETTINGS_FILE)) return [];
    return json_decode(file_get_contents(SETTINGS_FILE), true) ?: [];
}
function save_settings_data($settings) {
    file_put_contents(SETTINGS_FILE, json_encode($settings, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}
function read_messages() {
    if (!file_exists(MESSAGES_FILE)) return [];
    return json_decode(file_get_contents(MESSAGES_FILE), true) ?: [];
}
function save_messages($messages) {
    file_put_contents(MESSAGES_FILE, json_encode($messages, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

$message_status = '';
$status_type = 'success';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action'])) {
    $action = $_GET['action'];

    // Save/Edit Product
    if ($action === 'save_product') {
        $products = read_products();
        $id = isset($_POST['id']) && !empty($_POST['id']) ? $_POST['id'] : uniqid('prod_');
        $title = isset($_POST['title']) ? $_POST['title'] : '';
        $scientificName = isset($_POST['scientificName']) ? $_POST['scientificName'] : '';
        $category = isset($_POST['category']) ? $_POST['category'] : '';
        $status = isset($_POST['status']) ? $_POST['status'] : '';
        
        $availableFormsInput = isset($_POST['availableForms']) ? $_POST['availableForms'] : '';
        $availableForms = array_filter(array_map('trim', explode(',', $availableFormsInput)));
        
        $pesticidesStatusInput = isset($_POST['pesticidesStatus']) ? $_POST['pesticidesStatus'] : '';
        $pesticidesStatus = array_filter(array_map('trim', explode(',', $pesticidesStatusInput)));

        $imageName = isset($_POST['existing_image']) ? $_POST['existing_image'] : '';
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['image']['tmp_name'];
            $fileName = $_FILES['image']['name'];
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
            $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
            if (in_array($fileExtension, $allowedExtensions)) {
                $newFileName = uniqid() . '.' . $fileExtension;
                if (move_uploaded_file($fileTmpPath, UPLOAD_DIR . $newFileName)) {
                    $imageName = $newFileName;
                }
            }
        }

        $product_data = [
            "id" => $id,
            "title" => $title,
            "scientificName" => $scientificName,
            "category" => $category,
            "status" => $status,
            "image" => $imageName,
            "availableForms" => array_values($availableForms),
            "pesticidesStatus" => array_values($pesticidesStatus)
        ];

        $found = false;
        foreach ($products as $key => $p) {
            if ($p['id'] === $id) {
                $products[$key] = $product_data;
                $found = true;
                break;
            }
        }
        if (!$found) $products[] = $product_data;

        save_products($products);
        $message_status = 'تم حفظ المنتج بنجاح!';
    }

    // Delete Product
    if ($action === 'delete_product') {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $products = read_products();
        $filtered = array_filter($products, function($p) use ($id) { return $p['id'] !== $id; });
        save_products(array_values($filtered));
        $message_status = 'تم حذف المنتج بنجاح!';
    }

    // Save general settings
    if ($action === 'save_settings') {
        $settings = read_settings();
        $settings['contact']['address'] = isset($_POST['contact_address']) ? $_POST['contact_address'] : '';
        $settings['contact']['email'] = isset($_POST['contact_email']) ? $_POST['contact_email'] : '';
        $settings['contact']['phone'] = isset($_POST['contact_phone']) ? $_POST['contact_phone'] : '';
        $settings['contact']['website'] = isset($_POST['contact_website']) ? $_POST['contact_website'] : '';
        $settings['about']['vision'] = isset($_POST['about_vision']) ? $_POST['about_vision'] : '';
        $settings['about']['mission'] = isset($_POST['about_mission']) ? $_POST['about_mission'] : '';
        $settings['counters']['countries'] = isset($_POST['count_countries']) ? $_POST['count_countries'] : '25';
        $settings['counters']['team'] = isset($_POST['count_team']) ? $_POST['count_team'] : '50';
        $settings['counters']['certificates'] = isset($_POST['count_certificates']) ? $_POST['count_certificates'] : '15';
        $settings['counters']['products'] = isset($_POST['count_products']) ? $_POST['count_products'] : '100';

        save_settings_data($settings);
        $message_status = 'تم حفظ الإعدادات بنجاح!';
    }

    // Delete contact message
    if ($action === 'delete_message') {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $messages = read_messages();
        $filtered = array_filter($messages, function($m) use ($id) { return $m['id'] !== $id; });
        save_messages(array_values($filtered));
        $message_status = 'تم حذف الرسالة!';
    }

    // Add or Edit media item
    if ($action === 'save_media') {
        $settings = read_settings();
        if (!isset($settings['media_items'])) $settings['media_items'] = [];

        $media_id = isset($_POST['media_id']) && !empty($_POST['media_id']) ? $_POST['media_id'] : uniqid('media_');
        $media_type = isset($_POST['media_type']) ? $_POST['media_type'] : 'image';
        $media_title = isset($_POST['media_title']) ? trim($_POST['media_title']) : '';
        $media_description = isset($_POST['media_description']) ? trim($_POST['media_description']) : '';
        $media_content = isset($_POST['media_content']) ? trim($_POST['media_content']) : '';
        $media_file = isset($_POST['existing_media_file']) ? $_POST['existing_media_file'] : '';

        // Image upload
        if ($media_type === 'image' && isset($_FILES['media_image']) && $_FILES['media_image']['error'] === UPLOAD_ERR_OK) {
            $tmpPath = $_FILES['media_image']['tmp_name'];
            $fileName = $_FILES['media_image']['name'];
            $ext = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
            $allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
            if (in_array($ext, $allowed)) {
                $newName = 'media_' . uniqid() . '.' . $ext;
                if (move_uploaded_file($tmpPath, UPLOAD_DIR . $newName)) {
                    $media_file = $newName;
                }
            }
        }

        // Video upload
        if ($media_type === 'video' && isset($_FILES['media_video']) && $_FILES['media_video']['error'] === UPLOAD_ERR_OK) {
            $tmpPath = $_FILES['media_video']['tmp_name'];
            $fileName = $_FILES['media_video']['name'];
            $ext = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
            $allowedVideo = ['mp4', 'webm', 'ogg', 'mov'];
            if (in_array($ext, $allowedVideo)) {
                $newName = 'media_video_' . uniqid() . '.' . $ext;
                if (move_uploaded_file($tmpPath, UPLOAD_DIR . $newName)) {
                    $media_file = $newName;
                }
            }
        }

        $item = [
            'id' => $media_id,
            'type' => $media_type,
            'title' => $media_title,
            'description' => $media_description,
            'content' => $media_content,
            'file' => $media_file,
        ];

        $found = false;
        foreach ($settings['media_items'] as $k => $m) {
            if ($m['id'] === $media_id) {
                $settings['media_items'][$k] = $item;
                $found = true;
                break;
            }
        }
        if (!$found) $settings['media_items'][] = $item;

        save_settings_data($settings);
        $message_status = 'تم حفظ عنصر الميديا بنجاح!';
    }

    // Delete media item
    if ($action === 'delete_media') {
        $mid = isset($_POST['media_id']) ? $_POST['media_id'] : '';
        $settings = read_settings();
        if (isset($settings['media_items'])) {
            $settings['media_items'] = array_values(array_filter($settings['media_items'], function($m) use ($mid) {
                return $m['id'] !== $mid;
            }));
        }
        save_settings_data($settings);
        $message_status = 'تم حذف عنصر الميديا!';
    }
}

$products = read_products();
$settings = read_settings();
$messages = read_messages();
$media_items = isset($settings['media_items']) ? $settings['media_items'] : [];
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة التحكم</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: 'Cairo', sans-serif; background-color: #f8fafc; }
        .sidebar { background: #1e293b; color: #fff; min-height: 100vh; padding: 2rem 1.5rem; }
        .sidebar-link { color: #94a3b8; text-decoration: none; display: block; padding: 0.8rem 1rem; border-radius: 8px; margin-bottom: 0.5rem; transition: 0.3s; }
        .sidebar-link:hover, .sidebar-link.active { background: #334155; color: #fff; }
        .card-custom { border: none; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.02); }
        .product-thumbnail { width: 60px; height: 60px; object-fit: contain; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-3 col-lg-2 sidebar">
                <h4 class="fw-bold mb-4 text-center text-success">Control Panel</h4>
                <div class="nav flex-column" id="adminTabs" role="tablist">
                    <a class="sidebar-link active" data-bs-toggle="tab" href="#products-pane" role="tab">📦 إدارة المنتجات</a>
                    <a class="sidebar-link" data-bs-toggle="tab" href="#settings-pane" role="tab">⚙️ محتوى الصفحات</a>
                    <a class="sidebar-link" data-bs-toggle="tab" href="#media-pane" role="tab">🎥 الصور والفيديوهات</a>
                    <a class="sidebar-link position-relative" data-bs-toggle="tab" href="#messages-pane" role="tab">
                        ✉️ الرسائل 
                        <?php if (count($messages) > 0): ?>
                            <span class="position-absolute top-50 translate-middle-y badge rounded-pill bg-danger" style="left:15px;"><?php echo count($messages); ?></span>
                        <?php endif; ?>
                    </a>
                    <hr class="text-secondary">
                    <a href="index.php?action=logout" class="sidebar-link text-danger"><i class="fa-solid fa-right-from-bracket me-2"></i> خروج</a>
                </div>
            </div>

            <!-- Content Area -->
            <div class="col-md-9 col-lg-10 p-4">
                <?php if ($message_status): ?>
                    <div class="alert alert-<?php echo $status_type; ?> alert-dismissible fade show card-custom shadow-sm mb-4" role="alert">
                        <i class="fa-solid fa-circle-check me-2"></i> <?php echo $message_status; ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                <?php endif; ?>

                <div class="tab-content">
                    <!-- Products Management Pane -->
                    <div class="tab-pane fade show active" id="products-pane" role="tabpanel">
                        <div class="card card-custom p-4 bg-white mb-4">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h4 class="fw-bold m-0"><i class="fa-solid fa-boxes-stacked text-success me-2"></i> المنتجات الحالية (<?php echo count($products); ?>)</h4>
                                <button class="btn btn-success fw-bold" onclick="showAddModal()"><i class="fa-solid fa-plus me-1"></i> إضافة منتج</button>
                            </div>
                            <div class="table-responsive">
                                <table class="table align-middle">
                                    <thead>
                                        <tr>
                                            <th>الصورة</th>
                                            <th>الاسم</th>
                                            <th>الاسم العلمي</th>
                                            <th>الفئة</th>
                                            <th>الحالة</th>
                                            <th>الإجراءات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($products as $p): ?>
                                        <tr>
                                            <td>
                                                <?php if (!empty($p['image'])): ?>
                                                    <img src="uploads/<?php echo htmlspecialchars($p['image']); ?>" class="product-thumbnail" alt="">
                                                <?php else: ?>
                                                    <div class="product-thumbnail d-flex align-items-center justify-content-center bg-light text-muted"><i class="fa-solid fa-image"></i></div>
                                                <?php endif; ?>
                                            </td>
                                            <td class="fw-bold"><?php echo htmlspecialchars($p['title']); ?></td>
                                            <td class="text-muted"><em><?php echo htmlspecialchars($p['scientificName']); ?></em></td>
                                            <td><span class="badge bg-primary-subtle text-primary"><?php echo htmlspecialchars($p['category']); ?></span></td>
                                            <td>
                                                <?php
                                                $badge = 'bg-success';
                                                if ($p['status'] === 'Conventional') $badge = 'bg-secondary';
                                                if ($p['status'] === 'Out of Stock') $badge = 'bg-danger';
                                                ?>
                                                <span class="badge <?php echo $badge; ?>"><?php echo htmlspecialchars($p['status']); ?></span>
                                            </td>
                                            <td>
                                                <button class="btn btn-sm btn-outline-primary" onclick='editProduct(<?php echo htmlspecialchars(json_encode($p)); ?>)'>تعديل</button>
                                                <form action="index.php?action=delete_product" method="POST" class="d-inline" onsubmit="return confirm('حذف هذا المنتج؟')">
                                                    <input type="hidden" name="id" value="<?php echo $p['id']; ?>">
                                                    <button type="submit" class="btn btn-sm btn-outline-danger">حذف</button>
                                                </form>
                                            </td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Settings Pane -->
                    <div class="tab-pane fade" id="settings-pane" role="tabpanel">
                        <form action="index.php?action=save_settings" method="POST">
                            <div class="card card-custom p-4 bg-white mb-4">
                                <h5 class="fw-bold mb-4 text-success border-bottom pb-2"><i class="fa-solid fa-circle-info me-2"></i> معلومات وتفاصيل الاتصال</h5>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label">العنوان</label>
                                        <input type="text" class="form-control" name="contact_address" value="<?php echo htmlspecialchars(isset($settings['contact']['address']) ? $settings['contact']['address'] : ''); ?>">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">البريد الإلكتروني</label>
                                        <input type="email" class="form-control" name="contact_email" value="<?php echo htmlspecialchars(isset($settings['contact']['email']) ? $settings['contact']['email'] : ''); ?>">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">الهاتف</label>
                                        <input type="text" class="form-control" name="contact_phone" value="<?php echo htmlspecialchars(isset($settings['contact']['phone']) ? $settings['contact']['phone'] : ''); ?>">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">الموقع الإلكتروني</label>
                                        <input type="text" class="form-control" name="contact_website" value="<?php echo htmlspecialchars(isset($settings['contact']['website']) ? $settings['contact']['website'] : ''); ?>">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card card-custom p-4 bg-white mb-4">
                                <h5 class="fw-bold mb-4 text-success border-bottom pb-2"><i class="fa-solid fa-leaf me-2"></i> معلومات صفحة من نحن</h5>
                                <div class="mb-3">
                                    <label class="form-label">الرؤية (Vision)</label>
                                    <textarea class="form-control" name="about_vision" rows="3"><?php echo htmlspecialchars(isset($settings['about']['vision']) ? $settings['about']['vision'] : ''); ?></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">الرسالة (Mission)</label>
                                    <textarea class="form-control" name="about_mission" rows="3"><?php echo htmlspecialchars(isset($settings['about']['mission']) ? $settings['about']['mission'] : ''); ?></textarea>
                                </div>
                            </div>

                            <div class="card card-custom p-4 bg-white mb-4">
                                <h5 class="fw-bold mb-4 text-success border-bottom pb-2"><i class="fa-solid fa-chart-simple me-2"></i> إحصائيات وعدادات الأرقام</h5>
                                <div class="row g-3">
                                    <div class="col-md-3">
                                        <label class="form-label">عدد الدول</label>
                                        <input type="text" class="form-control" name="count_countries" value="<?php echo htmlspecialchars(isset($settings['counters']['countries']) ? $settings['counters']['countries'] : '25'); ?>">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label">عدد أعضاء الفريق</label>
                                        <input type="text" class="form-control" name="count_team" value="<?php echo htmlspecialchars(isset($settings['counters']['team']) ? $settings['counters']['team'] : '50'); ?>">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label">عدد الشهادات</label>
                                        <input type="text" class="form-control" name="count_certificates" value="<?php echo htmlspecialchars(isset($settings['counters']['certificates']) ? $settings['counters']['certificates'] : '15'); ?>">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label">إجمالي المنتجات</label>
                                        <input type="text" class="form-control" name="count_products" value="<?php echo htmlspecialchars(isset($settings['counters']['products']) ? $settings['counters']['products'] : '100'); ?>">
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-success fw-bold px-4"><i class="fa-solid fa-floppy-disk me-1"></i> حفظ جميع الإعدادات</button>
                        </form>
                    </div>

                    <!-- Media Panel Pane -->
                    <div class="tab-pane fade" id="media-pane" role="tabpanel">
                        <div class="card card-custom p-4 bg-white">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h4 class="fw-bold m-0"><i class="fa-solid fa-photo-film text-success me-2"></i> الصور والفيديوهات</h4>
                                <button class="btn btn-success fw-bold" onclick="showAddMediaModal()"><i class="fa-solid fa-plus me-1"></i> إضافة ميديا</button>
                            </div>
                            <div class="row g-3">
                                <?php foreach ($media_items as $mi): ?>
                                <div class="col-md-4">
                                    <div class="card border h-100 shadow-sm">
                                        <div style="cursor: pointer;" onclick='viewMediaDetails(<?php echo htmlspecialchars(json_encode($mi)); ?>)'>
                                            <?php if ($mi['type'] === 'image'): ?>
                                                <img src="uploads/<?php echo htmlspecialchars($mi['file']); ?>" class="card-img-top" style="height:180px;object-fit:cover;">
                                            <?php else: ?>
                                                <div class="bg-dark d-flex align-items-center justify-content-center" style="height:180px;"><i class="fa-solid fa-play-circle fa-4x text-success opacity-75"></i></div>
                                            <?php endif; ?>
                                            <div class="card-body">
                                                <span class="badge <?php echo $mi['type']==='video'?'bg-danger':'bg-success'; ?> mb-2"><?php echo $mi['type']==='video'?'فيديو':'صورة'; ?></span>
                                                <h6 class="card-title fw-bold text-dark"><?php echo htmlspecialchars($mi['title']); ?></h6>
                                                <p class="card-text small text-muted"><?php echo htmlspecialchars($mi['description']); ?></p>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex gap-1">
                                            <button class="btn btn-outline-success btn-sm flex-grow-1 px-1" onclick='viewMediaDetails(<?php echo htmlspecialchars(json_encode($mi)); ?>)'><i class="fa-solid fa-circle-info"></i> التفاصيل</button>
                                            <button class="btn btn-outline-primary btn-sm flex-grow-1 px-1" onclick='editMedia(<?php echo htmlspecialchars(json_encode($mi)); ?>)'><i class="fa-solid fa-pen-to-square"></i> تعديل</button>
                                            <form action="index.php?action=delete_media" method="POST" class="d-inline flex-grow-1 mb-0" onsubmit="return confirm('حذف هذا العنصر؟')">
                                                <input type="hidden" name="media_id" value="<?php echo $mi['id']; ?>">
                                                <button type="submit" class="btn btn-outline-danger btn-sm w-100 px-1"><i class="fa-solid fa-trash"></i> حذف</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>

                    <!-- Messages Pane -->
                    <div class="tab-pane fade" id="messages-pane" role="tabpanel">
                        <div class="card card-custom p-4 bg-white">
                            <h4 class="fw-bold mb-4 text-success"><i class="fa-solid fa-envelope me-2"></i> رسائل تواصل العملاء</h4>
                            <?php if (empty($messages)): ?>
                                <p class="text-muted text-center py-5">لا توجد رسائل حالياً.</p>
                            <?php else: ?>
                                <div class="list-group">
                                    <?php foreach ($messages as $m): ?>
                                    <div class="list-group-item list-group-item-action p-3 mb-2 border rounded shadow-sm">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <h6 class="fw-bold text-primary m-0"><?php echo htmlspecialchars($m['name']); ?> (<?php echo htmlspecialchars($m['email']); ?>)</h6>
                                            <span class="text-muted small"><?php echo $m['date']; ?></span>
                                        </div>
                                        <p class="mb-2"><strong>الموضوع:</strong> <?php echo htmlspecialchars($m['subject']); ?></p>
                                        <p class="mb-2 text-dark bg-light p-2 rounded small"><?php echo nl2br(htmlspecialchars($m['message'])); ?></p>
                                        <form action="index.php?action=delete_message" method="POST" class="text-end">
                                            <input type="hidden" name="id" value="<?php echo $m['id']; ?>">
                                            <button type="submit" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash"></i> حذف</button>
                                        </form>
                                    </div>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Media Edit Modal -->
    <div class="modal fade" id="mediaModal" tabindex="-1" aria-hidden="true" dir="rtl">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <form action="index.php?action=save_media" method="POST" enctype="multipart/form-data">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title" id="mediaModalLabel">إضافة ميديا</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-start">
                        <input type="hidden" name="media_id" id="media_id">
                        <input type="hidden" name="existing_media_file" id="existing_media_file">
                        
                        <div class="mb-3">
                            <label class="form-label fw-bold">نوع العنصر</label>
                            <div class="d-flex gap-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="media_type" id="type_image" value="image" checked onchange="toggleMediaType()">
                                    <label class="form-check-label" for="type_image">صورة</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="media_type" id="type_video" value="video" onchange="toggleMediaType()">
                                    <label class="form-check-label" for="type_video">فيديو</label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">العنوان</label>
                            <input type="text" class="form-control" name="media_title" id="media_title" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">الوصف المختصر</label>
                            <textarea class="form-control" name="media_description" id="media_description" rows="2"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">التفاصيل الكاملة</label>
                            <textarea class="form-control" name="media_content" id="media_content" rows="4"></textarea>
                        </div>

                        <div id="image_upload_section">
                            <div class="mb-3">
                                <label class="form-label">ملف الصورة</label>
                                <input type="file" class="form-control" name="media_image" id="media_image" accept="image/*">
                            </div>
                            <div id="media_img_preview_wrap" class="d-none mb-3">
                                <img src="" id="media_img_preview" class="rounded" style="max-height:120px;">
                            </div>
                        </div>

                        <div id="video_url_section" class="d-none">
                            <div class="mb-3">
                                <label class="form-label">ملف الفيديو</label>
                                <input type="file" class="form-control" name="media_video" id="media_video" accept="video/*">
                            </div>
                            <div id="media_video_preview_wrap" class="d-none mb-3">
                                <video src="" id="media_video_preview" controls class="rounded w-100" style="max-height:120px;"></video>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                        <button type="submit" class="btn btn-success fw-bold">حفظ العنصر</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Media Details Preview Modal -->
    <div class="modal fade" id="viewMediaModal" tabindex="-1" aria-hidden="true" dir="rtl">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title" id="viewMediaModalLabel"><i class="fa-solid fa-eye me-1"></i> تفاصيل عنصر الميديا</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-start">
                    <div class="row g-4">
                        <div class="col-md-5 text-center">
                            <div id="view_media_preview_container" class="rounded overflow-hidden border bg-dark d-flex align-items-center justify-content-center" style="min-height: 250px; max-height: 350px; width: 100%;"></div>
                        </div>
                        <div class="col-md-7">
                            <h4 id="view_media_title" class="fw-bold text-success mb-2"></h4>
                            <span id="view_media_type_badge" class="badge mb-3"></span>
                            <div class="mb-3">
                                <h6 class="fw-bold text-dark"><i class="fa-solid fa-align-left me-1"></i> الوصف المختصر:</h6>
                                <p id="view_media_description" class="text-muted small"></p>
                            </div>
                            <div class="mb-3">
                                <h6 class="fw-bold text-dark"><i class="fa-solid fa-paragraph me-1"></i> التفاصيل الكاملة:</h6>
                                <div id="view_media_content" class="bg-light p-3 rounded border text-dark" style="white-space: pre-wrap; font-size: 0.9rem; max-height: 200px; overflow-y: auto;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a id="view_media_site_link" href="" target="_blank" class="btn btn-outline-success fw-bold"><i class="fa-solid fa-square-arrow-up-right me-1"></i> عرض في الموقع</a>
                    <button id="view_media_edit_btn" type="button" class="btn btn-primary fw-bold" data-bs-dismiss="modal"><i class="fa-solid fa-pen-to-square me-1"></i> تعديل هذا العنصر</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Product Edit Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-hidden="true" dir="rtl">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form action="index.php?action=save_product" method="POST" enctype="multipart/form-data">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title" id="productModalLabel">المنتج</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-start">
                        <input type="hidden" name="id" id="prod_id">
                        <input type="hidden" name="existing_image" id="prod_existing_image">
                        
                        <div class="mb-3">
                            <label class="form-label">اسم المنتج</label>
                            <input type="text" class="form-control" name="title" id="prod_title" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">الاسم العلمي</label>
                            <input type="text" class="form-control" name="scientificName" id="prod_scientific">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">الفئة (Category)</label>
                            <select class="form-select" name="category" id="prod_category" required>
                                <option value="Dehydrated">Dehydrated</option>
                                <option value="Roots">Roots</option>
                                <option value="Herbs">Herbs</option>
                                <option value="Flowers">Flowers</option>
                                <option value="Seeds">Seeds</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">حالة التوفر (Status)</label>
                            <select class="form-select" name="status" id="prod_status" required>
                                <option value="Organic">Organic</option>
                                <option value="Conventional">Conventional</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">صورة المنتج</label>
                            <input type="file" class="form-control" name="image" id="prod_image" accept="image/*">
                            <div id="image_preview_container" class="mt-2 d-none">
                                <img src="" id="img_preview" class="product-thumbnail">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">الأشكال المتاحة (فصل بفاصلة ,)</label>
                            <input type="text" class="form-control" name="availableForms" id="prod_forms" placeholder="مثال: Whole, Powder, Cut">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">حالة المبيدات (فصل بفاصلة ,)</label>
                            <input type="text" class="form-control" name="pesticidesStatus" id="prod_pesticides" placeholder="مثال: Conventional, Organic">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                        <button type="submit" class="btn btn-success fw-bold">حفظ التغييرات</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        var productModal = new bootstrap.Modal(document.getElementById('productModal'));
        var mediaModal = new bootstrap.Modal(document.getElementById('mediaModal'));
        var viewMediaModal = new bootstrap.Modal(document.getElementById('viewMediaModal'));

        function showAddModal() {
            document.getElementById('productModalLabel').innerText = 'إضافة منتج جديد';
            document.getElementById('prod_id').value = '';
            document.getElementById('prod_existing_image').value = '';
            document.getElementById('prod_title').value = '';
            document.getElementById('prod_scientific').value = '';
            document.getElementById('prod_category').value = 'Dehydrated';
            document.getElementById('prod_status').value = 'Organic';
            document.getElementById('prod_forms').value = '';
            document.getElementById('prod_pesticides').value = '';
            document.getElementById('image_preview_container').classList.add('d-none');
            productModal.show();
        }

        function editProduct(product) {
            document.getElementById('productModalLabel').innerText = 'تعديل منتج: ' + product.title;
            document.getElementById('prod_id').value = product.id;
            document.getElementById('prod_existing_image').value = product.image || '';
            document.getElementById('prod_title').value = product.title || '';
            document.getElementById('prod_scientific').value = product.scientificName || '';
            document.getElementById('prod_category').value = product.category || 'Dehydrated';
            document.getElementById('prod_status').value = product.status || 'Organic';
            document.getElementById('prod_forms').value = product.availableForms ? product.availableForms.join(', ') : '';
            document.getElementById('prod_pesticides').value = product.pesticidesStatus ? product.pesticidesStatus.join(', ') : '';
            if (product.image) {
                document.getElementById('img_preview').src = 'uploads/' + product.image;
                document.getElementById('image_preview_container').classList.remove('d-none');
            } else {
                document.getElementById('image_preview_container').classList.add('d-none');
            }
            productModal.show();
        }

        function toggleMediaType() {
            var isVideo = document.getElementById('type_video').checked;
            document.getElementById('image_upload_section').classList.toggle('d-none', isVideo);
            document.getElementById('video_url_section').classList.toggle('d-none', !isVideo);
        }

        function showAddMediaModal() {
            document.getElementById('mediaModalLabel').innerText = 'إضافة عنصر ميديا';
            document.getElementById('media_id').value = '';
            document.getElementById('existing_media_file').value = '';
            document.getElementById('media_title').value = '';
            document.getElementById('media_description').value = '';
            document.getElementById('media_content').value = '';
            document.getElementById('type_image').checked = true;
            document.getElementById('image_upload_section').classList.remove('d-none');
            document.getElementById('video_url_section').classList.add('d-none');
            document.getElementById('media_img_preview_wrap').classList.add('d-none');
            document.getElementById('media_video_preview_wrap').classList.add('d-none');
            mediaModal.show();
        }

        function editMedia(item) {
            document.getElementById('mediaModalLabel').innerText = 'تعديل: ' + item.title;
            document.getElementById('media_id').value = item.id;
            document.getElementById('existing_media_file').value = item.file || '';
            document.getElementById('media_title').value = item.title || '';
            document.getElementById('media_description').value = item.description || '';
            document.getElementById('media_content').value = item.content || '';
            if (item.type === 'video') {
                document.getElementById('type_video').checked = true;
                document.getElementById('image_upload_section').classList.add('d-none');
                document.getElementById('video_url_section').classList.remove('d-none');
                document.getElementById('media_img_preview_wrap').classList.add('d-none');
                if (item.file) {
                    document.getElementById('media_video_preview').src = 'uploads/' + item.file;
                    document.getElementById('media_video_preview_wrap').classList.remove('d-none');
                } else {
                    document.getElementById('media_video_preview_wrap').classList.add('d-none');
                }
            } else {
                document.getElementById('type_image').checked = true;
                document.getElementById('image_upload_section').classList.remove('d-none');
                document.getElementById('video_url_section').classList.add('d-none');
                document.getElementById('media_video_preview_wrap').classList.add('d-none');
                if (item.file) {
                    document.getElementById('media_img_preview').src = 'uploads/' + item.file;
                    document.getElementById('media_img_preview_wrap').classList.remove('d-none');
                } else {
                    document.getElementById('media_img_preview_wrap').classList.add('d-none');
                }
            }
            mediaModal.show();
        }

        function viewMediaDetails(item) {
            document.getElementById('view_media_title').innerText = item.title || 'بدون عنوان';
            document.getElementById('view_media_description').innerText = item.description || 'لا يوجد وصف مختصر.';
            document.getElementById('view_media_content').innerText = item.content || 'لا توجد تفاصيل إضافية لهذا البوست.';
            
            var badge = document.getElementById('view_media_type_badge');
            if (item.type === 'video') {
                badge.innerText = 'فيديو تسويقي';
                badge.className = 'badge bg-danger';
            } else {
                badge.innerText = 'صورة معرض';
                badge.className = 'badge bg-success';
            }

            var container = document.getElementById('view_media_preview_container');
            container.innerHTML = '';
            if (item.file) {
                var fileUrl = 'uploads/' + item.file;
                if (item.type === 'video') {
                    var videoEl = document.createElement('video');
                    videoEl.src = fileUrl; videoEl.controls = true; videoEl.className = 'w-100 h-100';
                    videoEl.style.maxHeight = '300px'; videoEl.style.objectFit = 'contain';
                    container.appendChild(videoEl);
                } else {
                    var imgEl = document.createElement('img');
                    imgEl.src = fileUrl; imgEl.className = 'img-fluid rounded';
                    imgEl.style.maxHeight = '300px'; imgEl.style.objectFit = 'contain';
                    container.appendChild(imgEl);
                }
            } else {
                container.innerHTML = '<span class="text-muted">لا يوجد ملف</span>';
            }

            document.getElementById('view_media_site_link').href = '../media/' + item.id;
            document.getElementById('view_media_edit_btn').onclick = function() { editMedia(item); };
            viewMediaModal.show();
        }
    </script>
</body>
</html>
