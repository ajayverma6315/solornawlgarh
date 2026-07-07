export default function Brands() {
  const brands = [
    { name: "Waaree", logo: "WAAREE" },
    { name: "Adani Solar", logo: "ADANI" },
    { name: "Tata Power Solar", logo: "TATA" },
    { name: "Vikram Solar", logo: "VIKRAM" },
    { name: "LONGi", logo: "LONGi" },
    { name: "JA Solar", logo: "JA SOLAR" }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase">Premium Brands We Install</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <div key={i} className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tighter">
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
