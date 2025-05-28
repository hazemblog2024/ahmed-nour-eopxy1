'use client';

import { useState } from 'react';
import { Calculator, Home, Droplets, Palette, Shield } from 'lucide-react';

const CostCalculator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [area, setArea] = useState('');
  const [quality, setQuality] = useState('standard');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const services = [
    {
      id: 'roof-insulation',
      name: 'عزل الأسطح',
      icon: Shield,
      basePrice: 50, // ريال لكل متر مربع
      description: 'عزل مائي وحراري للأسطح'
    },
    {
      id: 'pool-insulation',
      name: 'عزل المسابح',
      icon: Droplets,
      basePrice: 80,
      description: 'عزل احترافي للمسابح'
    },
    {
      id: 'epoxy-flooring',
      name: 'أرضيات إيبوكسي',
      icon: Palette,
      basePrice: 120,
      description: 'أرضيات إيبوكسي ثلاثية الأبعاد'
    },
    {
      id: 'pool-construction',
      name: 'إنشاء المسابح',
      icon: Home,
      basePrice: 200,
      description: 'تصميم وإنشاء مسابح حديثة'
    }
  ];

  const qualityMultipliers = {
    standard: { name: 'جودة عادية', multiplier: 1 },
    premium: { name: 'جودة ممتازة', multiplier: 1.5 },
    luxury: { name: 'جودة فاخرة', multiplier: 2 }
  };

  const calculateCost = () => {
    if (!selectedService || !area) return;

    const service = services.find(s => s.id === selectedService);
    if (!service) return;

    const baseTotal = service.basePrice * parseFloat(area);
    const qualityMultiplier = qualityMultipliers[quality as keyof typeof qualityMultipliers].multiplier;
    const total = baseTotal * qualityMultiplier;

    setEstimatedCost(total);
  };

  return (
    <section id="cost-calculator" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            احسب <span className="gradient-text">التكلفة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            احصل على تقدير فوري لتكلفة مشروعك مع حاسبة التكلفة الذكية
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* نموذج الحاسبة */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">تفاصيل المشروع</h3>

                {/* اختيار الخدمة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    نوع الخدمة
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          selectedService === service.id
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <service.icon className={`w-6 h-6 mx-auto mb-2 ${
                          selectedService === service.id ? 'text-primary' : 'text-gray-400'
                        }`} />
                        <div className="text-sm font-medium text-gray-900">
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {service.basePrice} ر.س/م²
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* المساحة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    المساحة (متر مربع)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="أدخل المساحة بالمتر المربع"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* مستوى الجودة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    مستوى الجودة
                  </label>
                  <div className="space-y-2">
                    {Object.entries(qualityMultipliers).map(([key, value]) => (
                      <label key={key} className="flex items-center">
                        <input
                          type="radio"
                          name="quality"
                          value={key}
                          checked={quality === key}
                          onChange={(e) => setQuality(e.target.value)}
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="mr-3 text-gray-700">{value.name}</span>
                        <span className="text-sm text-gray-500">
                          (×{value.multiplier})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* زر الحساب */}
                <button
                  onClick={calculateCost}
                  disabled={!selectedService || !area}
                  className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  احسب التكلفة
                </button>
              </div>

              {/* النتيجة */}
              <div className="bg-gradient-to-br from-primary to-gold p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">التكلفة المقدرة</h3>

                {estimatedCost > 0 ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">
                        {estimatedCost.toLocaleString('ar-SA')} ر.س
                      </div>
                      <div className="text-lg opacity-90">
                        التكلفة الإجمالية المقدرة
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>المساحة:</span>
                        <span>{area} متر مربع</span>
                      </div>
                      <div className="flex justify-between">
                        <span>السعر الأساسي:</span>
                        <span>
                          {services.find(s => s.id === selectedService)?.basePrice} ر.س/م²
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>مستوى الجودة:</span>
                        <span>
                          {qualityMultipliers[quality as keyof typeof qualityMultipliers].name}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white/20 p-4 rounded-lg mt-6">
                      <p className="text-sm">
                        * هذا تقدير أولي. للحصول على عرض سعر دقيق، يرجى التواصل معنا لمعاينة الموقع.
                      </p>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <a
                        href="tel:+966571935447"
                        className="flex-1 bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                      >
                        اتصل الآن
                      </a>
                      <a
                        href={`https://wa.me/966571935447?text=مرحباً، أريد عرض سعر لمشروع ${services.find(s => s.id === selectedService)?.name} بمساحة ${area} متر مربع`}
                        className="flex-1 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                      >
                        واتساب
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg opacity-90">
                      اختر الخدمة وأدخل المساحة للحصول على تقدير التكلفة
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;