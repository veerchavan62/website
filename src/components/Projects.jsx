import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Corporate Headquarters',
    category: 'Office Infrastructure',
    description: '200+ workstation deployment with complete electrical and networking setup',
    number: '01',
  },
  {
    title: 'Banking Operations Center',
    category: 'Financial Services',
    description: 'Secure workspace with Gunnebo storage solutions and structured cabling',
    number: '02',
  },
  {
    title: 'Co-working Space',
    category: 'Flexible Workspace',
    description: 'Modern collaborative environment with ergonomic Wipro furniture',
    number: '03',
  },
  {
    title: 'Government Office',
    category: 'Public Sector',
    description: 'Large-scale modular workstation installation with IT infrastructure',
    number: '04',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-neutral-950 py-40 md:py-48 overflow-hidden border-t border-white/5">
      {/* Premium gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-blue-500/4 rounded-full blur-[120px]" />
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
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-[-0.02em] leading-[1.1]">
            Delivered Projects
          </h2>
          <p className="mt-8 text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Award-winning infrastructure deployments serving Fortune 500 enterprises across banking, government, and corporate sectors.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-xl border border-white/8 bg-gradient-to-br from-white/5 to-transparent p-8 cursor-pointer hover:from-white/10 hover:to-white/5 hover:border-white/15 transition-all duration-500"
            >
              {/* Project number - large ghost number */}
              <span className="absolute top-0 right-0 text-9xl font-light text-white/5 group-hover:text-white/10 transition-colors duration-500 leading-none">
                {project.number}
              </span>
              
              <div className="relative">
                <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-500/10 text-xs font-medium text-blue-400 tracking-wide uppercase mb-6 border border-blue-500/20">
                  {project.category}
                </span>
                <h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                  {project.description}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-neutral-400 group-hover:text-blue-400 transition-colors duration-300">
                  Explore
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
