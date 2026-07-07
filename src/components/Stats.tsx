import { Award, CheckCircle2, Shield, Users } from 'lucide-react';

export default function Stats() {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: Award },
    { value: '500+', label: 'Installations', icon: CheckCircle2 },
    { value: '100%', label: 'Customer Satisfaction', icon: Users },
    { value: '25-Year', label: 'Performance Warranty', icon: Shield },
  ];

  return (
    <section className="py-12 relative -mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
