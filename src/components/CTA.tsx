import { Phone, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const benefits = [
    "No Hidden Charges",
    "Subsidy Assistance",
    "Expert Consultation",
    "Fast Installation"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emerald-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Ready to Reduce Your Electricity Bills?</h2>
            <p className="text-emerald-100 mb-10 max-w-2xl mx-auto text-xl leading-relaxed">
              Book Your <span className="font-bold text-white">FREE Site Survey</span> Today. Join hundreds of happy customers in Nawalgarh enjoying free electricity.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-emerald-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919876543210" className="bg-white text-emerald-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
