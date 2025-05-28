# دليل ربط الموقع بـ Google Search Console

## 🔍 خطوات ربط الموقع

### 1. الدخول إلى Google Search Console
- اذهب إلى: https://search.google.com/search-console/
- سجل الدخول بحساب Google الخاص بك

### 2. إضافة الموقع
- اضغط على "إضافة موقع" أو "Add Property"
- اختر "URL prefix" 
- أدخل رابط الموقع: `https://ahmed-nour-eopxy1.vercel.app`

### 3. التحقق من الملكية
الموقع يحتوي على verification tag جاهز:
```html
<meta name="google-site-verification" content="FBiMz6zQj-MuAD1n-R4anDiArI6BfrnvwqoN95fSc6s" />
```

**خطوات التحقق:**
1. اختر "HTML tag" كطريقة التحقق
2. انسخ الكود: `FBiMz6zQj-MuAD1n-R4anDiArI6BfrnvwqoN95fSc6s`
3. تأكد أن الكود موجود في الموقع (موجود بالفعل!)
4. اضغط "Verify"

### 4. إرسال Sitemap
بعد التحقق من الملكية:
1. اذهب إلى "Sitemaps" في القائمة الجانبية
2. أضف sitemap جديد: `https://ahmed-nour-eopxy1.vercel.app/sitemap.xml`
3. اضغط "Submit"

### 5. فحص robots.txt
تأكد من أن robots.txt يعمل:
- رابط robots.txt: `https://ahmed-nour-eopxy1.vercel.app/robots.txt`

## 📊 الملفات المُحسنة للـ SEO

### ✅ الملفات الموجودة:
- **layout.tsx**: يحتوي على verification tag
- **robots.ts**: ملف robots.txt ديناميكي
- **sitemap.ts**: خريطة موقع شاملة
- **StructuredData**: بيانات منظمة للأعمال

### 🎯 الصفحات المُفهرسة:
- الصفحة الرئيسية (Priority: 1.0)
- صفحة من نحن (Priority: 0.8)
- صفحة الخدمات (Priority: 0.9)
- صفحة معرض الأعمال (Priority: 0.8)
- صفحة المدونة (Priority: 0.7)
- صفحة التواصل (Priority: 0.6)
- مقالات المدونة (Priority: 0.6)
- صفحات الخدمات التفصيلية (Priority: 0.7)

## 🚀 نصائح لتحسين الأداء

### 1. مراقبة الأداء
- تابع "Performance" في Search Console
- راقب "Coverage" للتأكد من فهرسة جميع الصفحات
- تحقق من "Mobile Usability"

### 2. تحسين المحتوى
- أضف محتوى جديد بانتظام في المدونة
- استخدم الكلمات المفتاحية المناسبة
- حسن من سرعة تحميل الصفحات

### 3. المتابعة الدورية
- تحقق من Search Console أسبوعياً
- راقب الأخطاء والتحذيرات
- حدث sitemap عند إضافة صفحات جديدة

## 📞 معلومات الاتصال للدعم
- الهاتف: +966571935447
- الموقع: https://ahmed-nour-eopxy1.vercel.app
- المطور: المهندس حازم الهواري

---
تم إعداد هذا الدليل لضمان ربط ناجح مع Google Search Console
