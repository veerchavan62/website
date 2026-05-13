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
    <section id="why-us" className="relative bg-neutral-950 py-40 md:py-48 overflow-hidden border-t border-white/5">
      {/* Premium gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-neutral-800/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="section-container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase mb-6">
            Why Work With Us
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-[-0.02em] leading-[1.1]">
            Built on Trust. Engineered for Scale.
          </h2>
          <p className="mt-8 text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Strategic infrastructure partnership combining precision execution with direct OEM access to enterprise-grade assets.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group ${item.span} relative p-8 rounded-xl border border-white/8 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/15`}
            >
              {/* Featured indicator */}
              {item.featured && (
                <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50" />
              )}
              
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-blue-600/20 group-hover:text-blue-300 transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
