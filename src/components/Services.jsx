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
    <section id="services" className="relative bg-neutral-950 py-40 md:py-48 overflow-hidden border-t border-white/5">
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neutral-800/5 rounded-full blur-[100px]" />
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
            Our Capabilities
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-[-0.02em] leading-[1.1]">
            Comprehensive Enterprise Solutions
          </h2>
          <p className="mt-8 text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            From strategic infrastructure planning to complete implementation. We deliver world-class workspace solutions tailored to your enterprise needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-xl border border-white/8 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/15"
            >
              {/* Premium glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent" />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-current/20 transition-all duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
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
