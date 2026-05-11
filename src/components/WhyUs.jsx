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
  },
  {
    icon: Wallet,
    title: 'Enterprise Pricing',
    description: 'Direct-to-business pricing with transparent cost structures optimized for bulk acquisitions.',
    span: 'col-span-1 md:col-span-2',
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
    <section id="why-us" className="bg-neutral-50 py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium tracking-widest text-blue-600 uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
            Built on Trust, Engineered for Scale
          </h2>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            SR Abhiyantra serves as a strategic infrastructure partner for enterprises, 
            combining rigorous execution with top-tier asset procurement.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group ${item.span} p-8 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center mb-5 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
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
