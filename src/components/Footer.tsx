import { Sun, Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-24 lg:pb-8 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Sun className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-2xl text-white">Solar Nawalgarh</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-sm">
              The leading solar installation company in Nawalgarh, providing top-quality residential and commercial solar solutions with government subsidies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">Our Services</a></li>
              <li><a href="#subsidy" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">PM Surya Ghar Yojana</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">Recent Projects</a></li>
              <li><a href="#reviews" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">Customer Reviews</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Service Areas</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Nawalgarh City</li>
              <li className="text-slate-400">Dundlod</li>
              <li className="text-slate-400">Mukundgarh</li>
              <li className="text-slate-400">Mandrarella</li>
              <li className="text-slate-400">Jhunjhunu District</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">Main Market, near Bus Stand, Nawalgarh, Rajasthan 333042</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-emerald-400">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a href="mailto:info@solarnawalgarh.com" className="text-slate-400 hover:text-emerald-400">info@solarnawalgarh.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM<br/>Sunday: Closed</span>
              </li>
            </ul>
            <a href="#" className="inline-block mt-6 text-emerald-400 font-medium hover:text-emerald-300 underline underline-offset-4">Find us on Google Maps &rarr;</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Solar Nawalgarh. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
