import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  const areas = [
    "Nawalgarh", "Dundlod", "Mukundgarh", "Mandawa", 
    "Sikar", "Jhunjhunu", "Fatehpur", "Lachhmangarh"
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">Service Area</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Proudly Serving Shekhawati Region</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Our local presence ensures rapid response times for site surveys, installation, and after-sales support. We understand the local grid conditions and weather patterns perfectly.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  {area}
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
            {/* Embedded Google Map placeholder for UI purposes. In real app, use actual embed code. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113427.69755490075!2d75.19124483321523!3d27.848834450379853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cbf20bcbc79ab%3A0xc66465dd1e23dbfb!2sNawalgarh%2C%20Rajasthan%20333042!5e0!3m2!1sen!2sin!4v1709723000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
