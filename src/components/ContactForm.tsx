import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request a Free Site Survey</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Fill out the form below and our solar experts will contact you to discuss your requirements.</p>
        </div>

        <div className="bg-white p-6 sm:p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 max-w-3xl mx-auto relative">
          {isSubmitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-300">
              <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h3>
              <p className="text-lg text-slate-600 mb-8">Your request has been successfully submitted. We will contact you soon.</p>
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 border-t-transparent animate-spin"></div>
                <span className="text-sm">Redirecting to home page...</span>
              </div>
            </div>
          ) : (
            <form className="space-y-6 animate-in fade-in duration-300" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Rahul Sharma" 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-slate-700 placeholder:text-slate-400"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                <div className="flex rounded-xl border border-slate-200 focus-within:ring-4 focus-within:ring-emerald-500/10 focus-within:border-emerald-500 transition-all overflow-hidden bg-white">
                  <div className="bg-slate-50 px-4 py-3.5 border-r border-slate-200 text-slate-600 font-medium flex items-center justify-center">
                    +91
                  </div>
                  <input 
                    type="tel" 
                    placeholder="98765 43210" 
                    className="w-full px-4 py-3.5 focus:outline-none text-slate-700 placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Property Location */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Property Location</label>
              <input 
                type="text" 
                placeholder="e.g. Nawalgarh, Sikar Road" 
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message / Specific Requirements</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your roof space or energy goals..." 
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-slate-700 placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                Submit Request <Send className="w-5 h-5" />
              </button>
              <p className="text-center text-sm text-slate-500 font-medium mt-4">
                We usually respond within 24 business hours.
              </p>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
