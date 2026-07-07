import { useState, useEffect } from 'react';
import { Sun, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white/80 backdrop-blur-md border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Sun className="h-8 w-8 text-emerald-700" />
            <span className="font-bold text-xl text-slate-900 leading-tight">Solar<br/>Nawalgarh</span>
          </div>
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#services" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Services</a>
            <a href="#subsidy" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Government Subsidy</a>
            <a href="#projects" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Projects</a>
            <a href="#reviews" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Reviews</a>
            <a href="#faq" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">FAQ</a>
            <a href="#contact" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center">
            <a href="tel:+919876543210" className="bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-800 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:+919876543210" className="md:hidden bg-emerald-100 text-emerald-800 p-2 rounded-full">
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-emerald-700 focus:outline-none bg-slate-50 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#services" className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors">Services</a>
            <a href="#subsidy" className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors">Government Subsidy</a>
            <a href="#projects" className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors">Projects</a>
            <a href="#reviews" className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors">Reviews</a>
            <a href="#faq" className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors">FAQ</a>
            <a href="#contact" className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors">Contact</a>
            <div className="pt-4 pb-2 px-2">
              <a href="tel:+919876543210" className="w-full bg-emerald-700 text-white flex justify-center items-center gap-2 px-5 py-3.5 rounded-xl font-semibold hover:bg-emerald-800 transition-colors shadow-sm">
                <PhoneCall className="w-5 h-5" />
                Call Now (+91 98765 43210)
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
