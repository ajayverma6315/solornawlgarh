import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Calculator } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Nawalgarh's #1 Solar Choice
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Save Up to <span className="text-emerald-700">90%</span> on Your Electricity Bills
            </h1>
            
            <h2 className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              We provide professional rooftop solar installation for homes and businesses in Nawalgarh with complete subsidy assistance, premium solar panels, expert installation, and long-term after-sales support.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Government Subsidy Support',
                'Free Site Survey',
                '25-Year Warranty',
                'Local Expert Team'
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#calculator" className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-0.5">
                <Calculator className="h-5 w-5" /> Get Free Site Survey
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-0.5">
                <Phone className="h-5 w-5" /> WhatsApp Expert
              </a>
            </div>
            
            <div className="flex items-center gap-3 text-slate-600">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5"><Phone className="w-4 h-4 text-emerald-700"/> +91 98765 43210</span>
              <span className="hidden sm:inline-block text-slate-300">|</span>
              <span className="text-sm">Available Mon-Sat, 9 AM - 6 PM</span>
            </div>
          </div>
          
          <div className="relative lg:ml-10">
            {/* Decorative blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-200/50 rounded-full blur-3xl -z-10 opacity-70"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000"
                alt="Professional solar panel installation workers on a residential roof"
                className="w-full object-cover h-[400px] lg:h-[550px] transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating trust badge */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-[-2rem] bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 animate-bounce-slow">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">MNRE</div>
                  <div className="text-xs text-slate-500 font-medium">Approved Vendor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
