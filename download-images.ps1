# تحميل جميع الصور للموقع

# إنشاء مجلدات إذا لم تكن موجودة
New-Item -ItemType Directory -Force -Path "public/images/services"
New-Item -ItemType Directory -Force -Path "public/images/portfolio" 
New-Item -ItemType Directory -Force -Path "public/images/blog"
New-Item -ItemType Directory -Force -Path "public/images/company"

Write-Host "بدء تحميل الصور..." -ForegroundColor Green

# البنر الرئيسي
Write-Host "تحميل البنر الرئيسي..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/RFcWN3zF/epoxy-roof-insulation-company-jeddah.jpg" -OutFile "public/images/hero-bg.jpg"

# صور الخدمات
Write-Host "تحميل صور الخدمات..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/J0MGJ11Q/roof-insulation-team-jeddah-jpg.jpg" -OutFile "public/images/services/roof-insulation.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/gctxrbC3/roof-insulation-materials.jpg" -OutFile "public/images/services/roof-materials.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/Rh1dvVF5/swimming-pool-insulation-process-jpg.jpg" -OutFile "public/images/services/pool-insulation.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg" -OutFile "public/images/services/tank-insulation.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/yNbsT77H/interior-tank-insulation.jpg" -OutFile "public/images/services/interior-tank.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/MZsbb4QY/3d-epoxy-floor-glossy-jpg.jpg" -OutFile "public/images/services/epoxy-flooring.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/Qt0BrFGW/ac-unit-check.jpg" -OutFile "public/images/services/ac-maintenance.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/kMYV1Rv0/wall-demolition-safety.jpg" -OutFile "public/images/services/demolition.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/BtWJW36K/image.jpg" -OutFile "public/images/services/plumbing.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/T1vTFGhW/leak-detection-device.jpg" -OutFile "public/images/services/leak-detection.jpg"

# معرض الأعمال - عزل الأسطح
Write-Host "تحميل معرض الأعمال - عزل الأسطح..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/k5dxgP07/roof-villa-before-after-insulation.jpg" -OutFile "public/images/portfolio/roof-villa.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/vBTDQPZQ/commercial-building-roof-insulation.jpg" -OutFile "public/images/portfolio/commercial-roof.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/7Ls0MJCZ/roof-insulation-layer-finished.jpg" -OutFile "public/images/portfolio/roof-finished.jpg"

# معرض الأعمال - أرضيات إيبوكسي
Write-Host "تحميل معرض الأعمال - أرضيات إيبوكسي..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/XJBGfHSs/epoxy-3d-floor-restaurant.jpg" -OutFile "public/images/portfolio/epoxy-restaurant.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/TYd2G77B/epoxy-floor-office.jpg" -OutFile "public/images/portfolio/epoxy-office.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/6QsD6T6T/epoxy-floor-warehouse.jpg" -OutFile "public/images/portfolio/epoxy-warehouse.jpg"

# معرض الأعمال - عزل المسابح
Write-Host "تحميل معرض الأعمال - عزل المسابح..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/CxbcN7YL/villa-pool-insulated.jpg" -OutFile "public/images/portfolio/villa-pool.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/XvQcHDP3/commercial-pool-insulation.jpg" -OutFile "public/images/portfolio/commercial-pool.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/MHpQcybD/kids-pool-safe-insulation.jpg" -OutFile "public/images/portfolio/kids-pool.jpg"

# معرض الأعمال - عزل الخزانات
Write-Host "تحميل معرض الأعمال - عزل الخزانات..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/jqJ32t97/top-water-tank-insulated.jpg" -OutFile "public/images/portfolio/top-tank.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/6qs0n4SG/underground-tank-insulation.jpg" -OutFile "public/images/portfolio/underground-tank.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/WzM7nbLY/industrial-tank-insulation.jpg" -OutFile "public/images/portfolio/industrial-tank.jpg"

# صور المقالات
Write-Host "تحميل صور المقالات..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/CxM4GgvJ/roof-insulation-guide-saudi.jpg" -OutFile "public/images/blog/roof-guide.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/05dmc4K4/3d-epoxy-floor-complete-guide.jpg" -OutFile "public/images/blog/epoxy-guide.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/Ls1gfQMN/pool-leak-detection.jpg" -OutFile "public/images/blog/pool-leak.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/DyNzgQ6D/image.jpg" -OutFile "public/images/blog/tank-mistakes.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/qvL4F8x4/image.jpg" -OutFile "public/images/blog/materials-comparison.jpg"
Invoke-WebRequest -Uri "https://i.postimg.cc/2y7Zy0Z3/epoxy-floor-maintenance.jpg" -OutFile "public/images/blog/epoxy-maintenance.jpg"

# صور الشركة
Write-Host "تحميل صور الشركة..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://i.postimg.cc/4xqmJDSB/image.jpg" -OutFile "public/images/company/team.jpg"

Write-Host "تم تحميل جميع الصور بنجاح!" -ForegroundColor Green
