import { FileText, IndianRupee, Users, ArrowRightCircle } from 'lucide-react';

export default function GovScheme() {
  const cards = [
    { icon: IndianRupee, title: 'Subsidy Amount', desc: 'Get up to ₹78,000 straight to your bank account for a 3kW residential system.' },
    { icon: Users, title: 'Eligibility', desc: 'Available for all residential homeowners in India with a valid electricity connection.' },
    { icon: FileText, title: 'Required Documents', desc: 'Aadhar card, latest electricity bill, bank passbook, and property tax receipt.' },
    { icon: ArrowRightCircle, title: 'We Handle Everything', desc: 'From portal registration to final inspection, our team manages the entire subsidy process.' },
  ];

  return (
    <section id="subsidy" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-900/60 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-emerald-800/50 backdrop-blur-sm shadow-xl">
            National Portal for Rooftop Solar
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PM Surya Ghar: Muft Bijli Yojana</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            The Government of India provides substantial financial assistance for residential solar installations. Reduce your upfront cost and get free electricity up to 300 units per month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-colors flex flex-col items-start">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5 inline-flex items-center gap-2">
            Check Your Eligibility <ArrowRightCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
