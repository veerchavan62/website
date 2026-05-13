import { motion } from 'framer-motion';
import { Armchair, Zap, Network, Layout, Archive, Building } from 'lucide-react';

const services = [
  {
    icon: Armchair,
    title: 'Office Furniture Solutions',
    description: 'Premium ergonomic seating, modular workstations, and executive furniture from authorized brands.',
    gradient: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'from-blue-500 to-blue-600',
    border: 'group-hover:border-blue-200',
  },
  {
    icon: Zap,
    title: 'Electrical Contracting',
    description: 'Government licensed electrical infrastructure, power distribution, and safety systems.',
    gradient: 'from-amber-500/10 to-amber-600/5',
    iconBg: 'from-amber-500 to-amber-600',
    border: 'group-hover:border-amber-200',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Enterprise-grade structured cabling, data centers, and connectivity solutions.',
    gradient: 'from-emerald-500/10 to-emerald-600/5',
    iconBg: 'from-emerald-500 to-emerald-600',
    border: 'group-hover:border-emerald-200',
  },
  {
    icon: Layout,
    title: 'Workspace Planning',
    description: 'Space optimization, floor planning, and ergonomic workplace design consultation.',
    gradient: 'from-violet-500/10 to-violet-600/5',
    iconBg: 'from-violet-500 to-violet-600',
    border: 'group-hover:border-violet-200',
  },
  {
    icon: Archive,
    title: 'Enterprise Storage Systems',
    description: 'Secure lockers, filing systems, and modular storage solutions from Gunnebo and Godrej.',
    gradient: 'from-rose-500/10 to-rose-600/5',
    iconBg: 'from-rose-500 to-rose-600',
    border: 'group-hover:border-rose-200',
  },
  {
    icon: Building,
    title: 'Turnkey Corporate Setup',
    description: 'End-to-end office infrastructure from concept to completion with single-point accountability.',
    gradient: 'from-cyan-500/10 to-cyan-600/5',
    iconBg: 'from-cyan-500 to-cyan-600',
    border: 'group-hover:border-cyan-200',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-50 py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern-light opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-200/50 rounded-full blur-[120px] translate-y-1/2" />
      
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
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-[-0.02em] leading-[1.15]">
            Complete Workspace Solutions
          </h2>
          <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
            From furniture procurement to full-scale infrastructure deployment, 
            we deliver comprehensive solutions for modern enterprises.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative p-8 rounded-2xl bg-white border border-neutral-100 ${service.border} transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
