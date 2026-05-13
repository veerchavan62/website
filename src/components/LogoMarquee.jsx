const brands = [
  { name: 'Wipro', logo: '/logo-wipro.webp' },
  { name: 'Godrej Interio', logo: '/logo-godrej.png' },
  { name: 'Gunnebo', logo: '/logo-gunnebo.svg' },
  { name: 'Cisco', logo: '/logo-cisco.png' },
  { name: 'D-Link', logo: '/logo-dlink.png' },
  { name: 'CommScope', logo: '/logo-commscope.png' },
  { name: 'Digisol', logo: '/logo-digisol.svg' },
  { name: 'R&M', logo: '/logo-rm.png' },
];

const doubled = [...brands, ...brands, ...brands];

export default function LogoMarquee() {
  return (
    <section className="relative bg-neutral-950 py-32 md:py-40 overflow-hidden border-t border-white/5">
      {/* Decorative gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="section-container relative">
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
            Trusted by Enterprise Leaders
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Premium edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 md:w-72 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 md:w-72 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent" />

        <div className="marquee-track flex items-center gap-24 md:gap-32">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-7 md:h-8 w-auto object-contain max-w-[140px] md:max-w-[160px] opacity-35 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-400"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
