import { Home, Factory, Zap, Shield, Sun, Droplets, BatteryCharging, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Home, title: 'Residential Solar', desc: 'Power your home with clean energy and reduce your monthly electricity bills by up to 90% with government subsidy support.' },
    { icon: Factory, title: 'Commercial Solar', desc: 'Boost your bottom line with large-scale solar solutions for businesses. Claim accelerated depreciation benefits.' },
    { icon: Zap, title: 'Industrial Solar', desc: 'Heavy-duty solar installations designed to meet massive energy requirements for manufacturing units and factories.' },
    { icon: Zap, title: 'On Grid Solar', desc: 'Grid-connected systems that allow you to export excess power via net-metering and reduce your bills.' },
    { icon: BatteryCharging, title: 'Off Grid Solar', desc: 'Completely independent setups with battery backup, ideal for areas with frequent power cuts or no grid access.' },
    { icon: Shield, title: 'Hybrid Solar', desc: 'The best of both worlds: grid connection for net-metering and battery backup for uninterrupted power.' },
    { icon: Droplets, title: 'Solar Water Pumps', desc: 'Reliable and cost-effective solar pumping solutions under PM-KUSUM for agricultural and farming needs.' },
    { icon: Wrench, title: 'Annual Maintenance', desc: 'Comprehensive cleaning and maintenance services to ensure your solar plant operates at peak efficiency.' },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Solar Solutions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We provide comprehensive solar solutions tailored to your specific needs, ensuring maximum efficiency and highest ROI.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-2 leading-relaxed text-sm flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
