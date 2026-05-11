import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    <section id="contact" className="bg-neutral-50 py-24 md:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-medium tracking-widest text-blue-600 uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
              Let&apos;s Build Your Workspace
            </h2>
            <p className="mt-4 text-neutral-500 leading-relaxed max-w-md">
              Tell us about your requirements. Our corporate team is available to provide 
              a comprehensive quotation and consultation.
            </p>

            <div className="mt-12 space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-neutral-900 font-medium group-hover:text-blue-600 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-12 rounded-2xl overflow-hidden border border-neutral-200 h-48 bg-neutral-200">
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


        </div>
      </div>
    </section>
  );
}
