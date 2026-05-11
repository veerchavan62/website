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
    <section className="bg-neutral-50 py-16 md:py-20 border-b border-neutral-100">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
            Authorized Dealers & Technology Partners
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-48 bg-gradient-to-r from-neutral-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-48 bg-gradient-to-l from-neutral-50 to-transparent" />

        <div className="marquee-track flex items-center gap-8 md:gap-12">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-[140px] md:w-[160px] h-[64px] md:h-[72px] bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 md:h-7 w-auto object-contain max-w-[100px] md:max-w-[120px] opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
