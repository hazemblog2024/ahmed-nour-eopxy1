import { Award, Users, Clock, Shield } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      number: "500+",
      label: "مشروع مكتمل",
      description: "مشاريع عزل ناجحة"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      number: "15+",
      label: "سنة خبرة",
      description: "في مجال العزل والإيبوكسي"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      number: "300+",
      label: "عميل راضي",
      description: "عملاء سعداء بخدماتنا"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      number: "24/7",
      label: "دعم فني",
      description: "خدمة عملاء متواصلة"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">إنجازاتنا في أرقام</h2>
          <p className="text-xl text-blue-100">نفخر بثقة عملائنا وإنجازاتنا المتميزة</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-blue-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
