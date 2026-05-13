import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ravi@srabhiyantra.com',
    href: 'mailto:ravi@srabhiyantra.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9325837755',
    href: 'tel:+919325837755',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Kolaj Business Center, Flat No.1, 1st Floor Paree Priya Apartment, Gokhale Road, Near IDBI Bank, Model Colony, Shivaji Nagar, Pune-411016, Maharashtra, India',
    href: '#',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-neutral-950 py-40 md:py-48 overflow-hidden border-t border-white/5">
      {/* Premium gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-blue-500/4 rounded-full blur-[120px]" />
      </div>
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-40">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase mb-6">
              Let&apos;s Talk
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-[-0.02em] leading-[1.1]">
              Build Your Premium Workspace
            </h2>
            <p className="mt-8 text-base text-neutral-400 leading-relaxed max-w-lg">
              Share your workspace requirements and our infrastructure specialists will craft a comprehensive solution tailored to your enterprise.
            </p>

            <div className="mt-12 space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-5 group p-4 -mx-4 rounded-xl hover:bg-neutral-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-neutral-900 font-medium group-hover:text-blue-600 transition-colors leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="mt-12 rounded-2xl overflow-hidden border border-neutral-200 h-64 bg-neutral-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.071!2d73.837!3d18.527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0801a1a1a1d%3A0x1a1a1a1a1a1a1a1a!2sKolaj%20Business%20Center!5e0!3m2!1sen!2sin!4v1699999999999"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Kolaj Business Center"
              />
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:pt-8"
          >
            <div className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 overflow-hidden">
              {/* Card background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-neutral-500/10 rounded-full blur-[80px]" />
                <div className="grid-pattern opacity-30" />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                  Ready to transform your workspace?
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Get a free consultation and detailed quotation tailored to your corporate office requirements.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919325837755?text=Hello%20SR%20Abhiyantra%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20workspace%20solutions%20and%20dealership%20services."
                    className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/20"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  
                  <a
                    href="tel:+919325837755"
                    className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/10 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                  
                  <a
                    href="mailto:ravi@srabhiyantra.com"
                    className="group flex items-center justify-center gap-2 w-full px-8 py-4 text-neutral-400 hover:text-white font-medium transition-colors duration-300"
                  >
                    Send an Email
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
