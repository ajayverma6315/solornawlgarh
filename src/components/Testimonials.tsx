import { Star, MapPin, Zap } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Ramesh Singh', 
      location: 'Nawalgarh', 
      size: '5 kW System',
      text: 'Excellent service! The installation was done within 3 days and the team was very professional. My electricity bill is now zero. They also helped with the PM Surya Ghar subsidy process seamlessly.',
      img: 'https://i.pravatar.cc/150?img=11'
    },
    { 
      name: 'Sunita Devi', 
      location: 'Dundlod', 
      size: '3 kW System',
      text: 'Highly recommend Solar Nawalgarh. They explained the whole process clearly and handled all the documentation. The structure quality is very strong.',
      img: 'https://i.pravatar.cc/150?img=5'
    },
    { 
      name: 'Vikram Sharma', 
      location: 'Mukundgarh', 
      size: '15 kW System',
      text: 'Best quality panels and very neat installation on my factory roof. The generation is exactly as they promised in the proposal. Very happy with the after-sales support.',
      img: 'https://i.pravatar.cc/150?img=12'
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Customers Say</h3>
          </div>
          
          <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#fbbc04]">
              {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
            </div>
            <div className="font-bold text-slate-900">4.9/5</div>
            <div className="text-slate-500 text-sm">on Google Reviews</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-slate-100 relative">
              <div className="absolute top-8 right-8 text-emerald-100">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.1726H10.8223V3H21V11.2338L18.4239 21H14.017ZM3 21L5.39294 14.1726H-0.194702V3H9.98297V11.2338L7.40692 21H3Z" />
                </svg>
              </div>
              
              <div className="flex gap-1 mb-6 text-[#fbbc04]">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed italic relative z-10">"{test.text}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img src={test.img} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-emerald-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{test.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {test.location}</span>
                    <span className="flex items-center gap-1 text-emerald-600"><Zap className="w-3 h-3"/> {test.size}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
