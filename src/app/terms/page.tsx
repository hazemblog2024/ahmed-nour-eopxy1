import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'شروط الاستخدام - أحمد نور للإيبوكسي',
  description: 'شروط وأحكام استخدام خدمات شركة أحمد نور للإيبوكسي',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              شروط الاستخدام
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">مقدمة</h2>
                <p>
                  مرحبا بك في موقع شركة أحمد نور للإيبوكسي. باستخدامك لهذا الموقع أو خدماتنا 
                  فإنك توافق على الالتزام بهذه الشروط والأحكام.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">خدماتنا</h2>
                <p>نقدم الخدمات التالية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>عزل الأسطح المائي والحراري</li>
                  <li>عزل المسابح والخزانات</li>
                  <li>أرضيات الإيبوكسي ثلاثية الأبعاد</li>
                  <li>إنشاء وتصميم المسابح</li>
                  <li>صيانة المكيفات</li>
                  <li>أعمال السباكة والهدم</li>
                  <li>كشف تسريبات المياه</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">التواصل معنا</h2>
                <p>
                  لأي استفسارات حول هذه الشروط يمكنك التواصل معنا:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p><strong>الهاتف:</strong> +966 57 193 5447</p>
                  <p><strong>البريد الإلكتروني:</strong> info@ahmed-nour-epoxy.com</p>
                  <p><strong>العنوان:</strong> جدة المملكة العربية السعودية</p>
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
