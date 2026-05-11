import { motion } from 'framer-motion';
import { Armchair, Zap, Network, Layout, Archive, Building } from 'lucide-react';

const services = [
  {
    icon: Armchair,
    title: 'Office Furniture Solutions',
    description: 'Premium ergonomic seating, modular workstations, and executive furniture from authorized brands.',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Electrical Contracting',
    description: 'Government licensed electrical infrastructure, power distribution, and safety systems.',
    color: 'amber',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Enterprise-grade structured cabling, data centers, and connectivity solutions.',
    color: 'emerald',
  },
  {
    icon: Layout,
    title: 'Workspace Planning',
    description: 'Space optimization, floor planning, and ergonomic workplace design consultation.',
    color: 'violet',
  },
  {
    icon: Archive,
    title: 'Enterprise Storage Systems',
    description: 'Secure lockers, filing systems, and modular storage solutions from Gunnebo and Godrej.',
    color: 'rose',
  },
  {
    icon: Building,
    title: 'Turnkey Corporate Setup',
    description: 'End-to-end office infrastructure from concept to completion with single-point accountability.',
    color: 'cyan',
  },
];

const colorVariants = {
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
  amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-100',
  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
  violet: 'bg-violet-50 text-violet-600 group-hover:bg-violet-100',
  rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-100',
  cyan: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100',
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium tracking-widest text-blue-600 uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
            Complete Workspace Solutions
          </h2>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            From furniture procurement to full-scale infrastructure deployment, 
            we deliver comprehensive solutions for modern enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-neutral-100 bg-white hover:border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${colorVariants[service.color]}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
