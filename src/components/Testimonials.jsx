import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'SR Abhiyantra delivered our entire 200-seat office setup within the committed timeline. The quality is excellent and their team was extremely professional throughout.',
    name: 'Rajesh Menon',
    role: 'Admin Head',
    company: 'IT Solutions Pvt Ltd',
  },
  {
    quote: 'We have been working with them for 3 years for our branch network furniture. Competitive pricing and prompt after-sales service. Highly recommended.',
    name: 'Sneha Patil',
    role: 'Procurement Manager',
    company: 'National Finance Corp',
  },
  {
    quote: 'The ergonomic chairs transformed our co-working space. Clean installation, zero hassle, and top-notch furniture quality. Our members love the new seating.',
    name: 'Amit Sharma',
    role: 'Operations Director',
    company: 'WorkHub Spaces',
  },
  {
    quote: 'Fantastic experience from start to finish. Their consultation helped us optimize our floor plan, and the Godrej products were exactly as promised.',
    name: 'Priya Desai',
    role: 'HR Director',
    company: 'TechFlow Analytics',
  },
  {
    quote: 'We ordered custom executive seating for our boardrooms. The premium feel and sturdy build quality exceeded our expectations. Great partner to work with.',
    name: 'Vikram Singh',
    role: 'Managing Director',
    company: 'Apex Logistics Group',
  },
];

const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-900 py-24 md:py-32 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Hear what our corporate partners have to say about our workspace solutions 
            and delivery excellence.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-48 bg-gradient-to-r from-neutral-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-48 bg-gradient-to-l from-neutral-900 to-transparent" />

        <div className="marquee-track flex items-stretch gap-6">
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-shrink-0 w-[340px] md:w-[400px] p-8 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-300 leading-relaxed mb-8 min-h-[96px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-700/50">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
