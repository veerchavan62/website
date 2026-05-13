import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Clock, Wallet, Headphones, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Certified OEM Partner',
    description: 'Authorized procurement channel for industry-leading manufacturers with comprehensive OEM warranties.',
    span: 'col-span-1',
  },
  {
    icon: Building2,
    title: 'Turnkey Execution',
    description: 'Complete project delivery from spatial planning to final installation, managed by dedicated infrastructure specialists.',
    span: 'col-span-1 md:col-span-2',
    featured: true,
  },
  {
    icon: Wallet,
    title: 'Enterprise Pricing',
    description: 'Direct-to-business pricing with transparent cost structures optimized for bulk acquisitions.',
    span: 'col-span-1 md:col-span-2',
    featured: true,
  },
  {
    icon: Clock,
    title: 'Precision Logistics',
    description: 'Strict adherence to deployment schedules with optimized supply chain workflows.',
    span: 'col-span-1',
  },
  {
    icon: Headphones,
    title: 'Lifecycle Support',
    description: 'Dedicated post-deployment SLAs ensuring rapid-response maintenance and asset longevity.',
    span: 'col-span-1',
  },
  {
    icon: Sparkles,
    title: 'Tailored Integration',
    description: 'Custom infrastructure configurations engineered for your architectural constraints and corporate identity.',
    span: 'col-span-1',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-white py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern-light opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-100/50 rounded-full blur-[150px]" />
      
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="section-container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase mb-5">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-[-0.02em] leading-[1.15]">
            Built on Trust, Engineered for Scale
          </h2>
          <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
            SR Abhiyantra serves as a strategic infrastructure partner for enterprises, 
            combining rigorous execution with top-tier asset procurement.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group ${item.span} relative p-8 rounded-2xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50/50 hover:border-neutral-200 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]`}
            >
              {/* Featured indicator */}
              {item.featured && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500" />
              )}
              
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
