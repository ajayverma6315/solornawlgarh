import { Phone } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex gap-3">
      <a 
        href="tel:+919876543210" 
        className="flex-1 bg-emerald-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm"
      >
        <Phone className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
