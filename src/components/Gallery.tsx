import { MapPin, Zap } from 'lucide-react';

export default function Gallery() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
      size: "5 kW",
      location: "Main Market, Nawalgarh",
      type: "Residential On-Grid"
    },
    {
      img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
      size: "20 kW",
      location: "Industrial Area",
      type: "Commercial On-Grid"
    },
    {
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      size: "3 kW",
      location: "Dundlod",
      type: "Residential (Subsidized)"
    },
    {
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      size: "10 kW",
      location: "Mukundgarh",
      type: "School Roof"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Recent Installations</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Browse through some of our successfully commissioned solar plants across the region.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer relative shadow-md">
              <img src={project.img} alt={`Solar Project in ${project.location}`} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="font-extrabold text-2xl mb-1 text-emerald-400">{project.size}</div>
                <div className="font-semibold text-lg mb-2">{project.type}</div>
                <div className="flex items-center gap-1.5 text-slate-300 text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
