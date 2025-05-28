import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية - أحمد نور للإيبوكسي',
  description: 'سياسة الخصوصية وحماية البيانات في شركة أحمد نور للإيبوكسي',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              سياسة الخصوصية
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">مقدمة</h2>
                <p>
                  نحن في شركة أحمد نور للإيبوكسي نلتزم بحماية خصوصيتك وأمان بياناتك الشخصية.
                  توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية المعلومات التي تقدمها لنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">المعلومات التي نجمعها</h2>
                <ul className="list-disc pr-6 space-y-2">
                  <li>الاسم الكامل</li>
                  <li>رقم الهاتف</li>
                  <li>عنوان البريد الإلكتروني</li>
                  <li>عنوان الموقع للخدمة</li>
                  <li>تفاصيل المشروع المطلوب</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">التواصل معنا</h2>
                <p>
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p><strong>الهاتف:</strong> +966 57 193 5447</p>
                  <p><strong>البريد الإلكتروني:</strong> info@ahmed-nour-epoxy.com</p>
                  <p><strong>العنوان:</strong> جدة، المملكة العربية السعودية</p>
                </div>
              </section>

              <div className="text-center mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
