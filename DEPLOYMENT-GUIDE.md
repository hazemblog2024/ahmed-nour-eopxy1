# دليل النشر - شركة أحمد نور للإيبوكسي

## 📋 قائمة التحقق قبل النشر

### ✅ تم التحقق من:
- [x] **المطور موجود في Footer** - المهندس حازم الهواري
- [x] **صفحات الخصوصية والشروط موجودة** - `/privacy` و `/terms`
- [x] **خط Cairo مُطبق بقوة** - لن يتغير أبداً
- [x] **حذف العروض والنشرة الإخبارية** - تم الحذف نهائياً
- [x] **جميع أرقام الهواتف صحيحة** - +966571935447
- [x] **لا توجد خرائط** - تم التأكد
- [x] **الكود نظيف ومحسن** - جاهز للنشر

## 🚀 خطوات النشر

### 1. إنشاء Repository جديد على GitHub
```bash
# في GitHub Desktop أو GitHub.com
# إنشاء repository جديد باسم: ahmed-nour-epoxy
```

### 2. رفع المشروع
```bash
# في مجلد المشروع
git init
git add .
git commit -m "Initial commit - موقع شركة أحمد نور للإيبوكسي"
git branch -M main
git remote add origin https://github.com/hazemblog2024/ahmed-nour-epoxy.git
git push -u origin main
```

### 3. النشر على Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط "New Project"
3. اختر repository: `ahmed-nour-epoxy`
4. اضغط "Deploy"

### 4. ربط النطاق المخصص
1. في لوحة تحكم Vercel
2. اذهب إلى Settings > Domains
3. أضف: `www.3azlepoxy.com`

## 🔧 إعدادات Vercel

### متغيرات البيئة (Environment Variables)
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.3azlepoxy.com
```

### إعدادات البناء
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## 📱 اختبار ما بعد النشر

### تحقق من:
- [ ] الموقع يعمل على الرابط الجديد
- [ ] خط Cairo يظهر بشكل صحيح
- [ ] المطور موجود في Footer
- [ ] صفحات الخصوصية والشروط تعمل
- [ ] لا توجد عروض أو نشرة إخبارية
- [ ] جميع النماذج تعمل
- [ ] الموقع متجاوب على الجوال

## 🔍 Google Search Console

### بعد النشر:
1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. أضف الموقع الجديد
3. تحقق من الملكية باستخدام meta tag الموجود
4. أرسل sitemap: `https://www.3azlepoxy.com/sitemap.xml`

## 📞 معلومات الدعم

**المطور:** المهندس حازم الهواري
**واتساب:** +201151580130

---

**ملاحظة:** هذا المشروع جاهز للنشر بدون أي تعديلات إضافية.
