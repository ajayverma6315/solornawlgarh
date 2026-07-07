import { Search, Calculator, FileText, CheckSquare, Hammer, Zap, ArrowRightLeft, ThumbsUp, Headset } from 'lucide-react';

export default function Process() {
  const steps = [
    { icon: Search, title: '1. Free Site Survey', desc: 'Detailed roof and shadow analysis.' },
    { icon: Calculator, title: '2. Energy Analysis', desc: 'Reviewing past bills and sizing the plant.' },
    { icon: FileText, title: '3. Custom Quotation', desc: 'Detailed ROI and pricing proposal.' },
    { icon: CheckSquare, title: '4. Subsidy Docs', desc: 'Filing for PM Surya Ghar Yojana.' },
    { icon: Hammer, title: '5. Installation', desc: 'Professional structure and panel mounting.' },
    { icon: Zap, title: '6. Testing', desc: 'Electrical safety and generation checks.' },
    { icon: ArrowRightLeft, title: '7. Net Metering', desc: 'DISCOM bidirectional meter setup.' },
    { icon: ThumbsUp, title: '8. Final Handover', desc: 'App setup and user training.' },
    { icon: Headset, title: '9. Lifetime Support', desc: 'Ongoing maintenance and remote monitoring.' },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Hassle-Free Process</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We handle everything from start to finish, so you can sit back and watch your electricity bills disappear.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
