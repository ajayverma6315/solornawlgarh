import { SunMedium, HardHat, MapPin, IndianRupee, Zap, ArrowRightLeft, FileCheck2, Wrench, Shield, CheckCircle } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    { icon: SunMedium, title: 'Tier-1 Solar Panels', desc: 'We only use top-rated panels from trusted brands for maximum efficiency.' },
    { icon: HardHat, title: 'Certified Engineers', desc: 'Installations are planned and executed by qualified solar professionals.' },
    { icon: MapPin, title: 'Local Installation Team', desc: 'Based in Nawalgarh, providing fast support when you need it.' },
    { icon: IndianRupee, title: 'Transparent Pricing', desc: 'No hidden costs. Detailed quotation before you sign anything.' },
    { icon: Zap, title: 'Fast Installation', desc: 'From approval to commissioning, we ensure the fastest turnaround time.' },
    { icon: ArrowRightLeft, title: 'Net Metering Assistance', desc: 'We handle DISCOM liaising for a seamless bidirectional meter setup.' },
    { icon: FileCheck2, title: 'Government Subsidy Support', desc: 'End-to-end processing of your PM Surya Ghar subsidy application.' },
    { icon: Wrench, title: 'After Sales Service', desc: 'Prompt troubleshooting and maintenance support post-installation.' },
    { icon: Shield, title: 'Long Warranty', desc: '25-year performance warranty on panels and 5-10 years on inverters.' },
    { icon: CheckCircle, title: 'Premium Components', desc: 'High-quality cables, structures, and safety switches for long life.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Solar Nawalgarh Difference</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We don't just sell solar panels; we deliver a premium energy experience built on trust and quality.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {advantages.map((adv, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group text-center lg:text-left">
              <div className="mx-auto lg:mx-0 w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <adv.icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{adv.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
