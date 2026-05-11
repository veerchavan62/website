export default function Products() {
  return (
    <section id="products" className="bg-slate-50 py-24 md:py-32 lg:py-40">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">Featured Product</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Premium Ergonomic Seating
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed font-medium">
            Discover our carefully curated selection of high-performance office chairs, designed to support your posture and enhance productivity throughout the workday.
          </p>
        </div>

        {/* Product showcase */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 xl:gap-28 items-center animate-fade-in">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/50 shadow-2xl shadow-slate-200/60 p-4 sm:p-8 group">
            {/* Subtle background element behind the chair */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100/50 opacity-50" />
            
            <img
              src="/product-chair.png"
              alt="Premium Office Chair"
              className="w-full h-auto object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Executive Mesh Series</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Premium ergonomic chairs designed for all-day comfort. Featuring dynamic lumbar support, breathable mesh backs, and highly adjustable components to fit any body type perfectly.
            </p>

            <div className="space-y-5 mb-12">
              {[
                'Dynamic auto-adjusting lumbar support',
                '4D adjustable armrests & seat depth',
                'High-density molded foam cushion',
                'BIFMA certified with up to 5 years warranty'
              ].map(feat => (
                <div key={feat} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100/80 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200/50">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700 font-semibold pt-1">{feat}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#081a43] px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#0a2560] group"
              >
                Request Specifications
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
