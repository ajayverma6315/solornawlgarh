import { Landmark, CreditCard, CalendarDays, Zap } from 'lucide-react';

export default function Financing() {
  const options = [
    { icon: Landmark, title: 'Bank Loan Support', desc: 'We assist with fast-track loans from nationalized banks under priority sector lending.' },
    { icon: CreditCard, title: 'Easy EMI Options', desc: 'Pay for your solar plant in easy monthly installments that are often less than your electricity bill.' },
    { icon: CalendarDays, title: 'Flexible Payments', desc: 'Customized milestone-based payment plans during the installation process.' },
    { icon: Zap, title: 'Quick Approval', desc: 'Partnered with leading NBFCs for instant loan approvals with minimal documentation.' }
  ];

  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-3">Financing Options</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Make Solar Affordable</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg">Don't let upfront costs hold you back. We offer multiple financing options to help you switch to solar smoothly.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt, i) => (
            <div key={i} className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center text-white mb-4">
                <opt.icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">{opt.title}</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
