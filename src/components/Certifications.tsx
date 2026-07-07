import { ShieldCheck, Award, FileBadge } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { icon: ShieldCheck, name: "MNRE Approved", desc: "Ministry of New and Renewable Energy" },
    { icon: Award, name: "BIS Certified Parts", desc: "Bureau of Indian Standards" },
    { icon: FileBadge, name: "ISO 9001:2015", desc: "Quality Management System" }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {certs.map((cert, i) => (
            <div key={i} className={`flex flex-col items-center justify-center ${i !== 0 ? 'pt-8 md:pt-0' : ''}`}>
              <cert.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h4 className="font-bold text-slate-900 text-lg mb-1">{cert.name}</h4>
              <p className="text-sm text-slate-500">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
