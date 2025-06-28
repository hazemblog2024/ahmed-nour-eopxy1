# ربط الدومين بـ Vercel

## خطوات ربط الدومين:

### 1. في لوحة تحكم Vercel:
1. اذهب إلى Project Settings
2. اضغط على "Domains"
3. اضغط "Add Domain"
4. أدخل اسم الدومين (مثل: ahmednourepoxy.com)
5. اضغط "Add"

### 2. إعداد DNS:
Vercel سيعطيك إعدادات DNS:

#### للدومين الرئيسي (ahmednourepoxy.com):
```
Type: A
Name: @
Value: 76.76.19.61
```

#### للـ subdomain (www.ahmednourepoxy.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. في لوحة تحكم الدومين:
1. اذهب إلى DNS Management
2. أضف السجلات المطلوبة
3. احفظ التغييرات
4. انتظر 24-48 ساعة للانتشار

### 4. التحقق:
- في Vercel ستظهر علامة ✅ عند نجاح الربط
- الموقع سيعمل على الدومين الجديد
- سيتم إنشاء شهادة SSL تلقائياً

## نصائح:
- استخدم دومين .com أو .sa للمصداقية
- تأكد من تجديد الدومين سنوياً
- احتفظ بنسخة احتياطية من إعدادات DNS

## أمثلة دومينات مناسبة:
- ahmednourepoxy.com
- ahmednour-epoxy.sa
- epoxy-jeddah.com
- nour-epoxy.net
