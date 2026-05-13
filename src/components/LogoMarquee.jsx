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
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern-light opacity-50" />
      
      <div className="section-container relative">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            Authorized Dealers & Technology Partners
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Premium edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div className="marquee-track flex items-center gap-16 md:gap-20">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-40 md:w-44 h-16 md:h-20 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 md:h-7 w-auto object-contain max-w-[120px] md:max-w-[140px] opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}
