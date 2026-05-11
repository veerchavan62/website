import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-neutral-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Ready to Upgrade Your Workspace Infrastructure?
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Get a free consultation and detailed quotation for your corporate office requirements. 
            Let&apos;s build something great together.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919325837755?text=Hello%20SR%20Abhiyantra%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20workspace%20solutions%20and%20dealership%20services."
              className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-600 text-white rounded-full font-medium hover:bg-white/5 transition-colors"
            >
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
