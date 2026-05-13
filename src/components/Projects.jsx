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
    <section id="projects" className="relative bg-neutral-50 py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern-light opacity-40" />
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
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-[-0.02em] leading-[1.15]">
            Project Showcase
          </h2>
          <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
            Explore our portfolio of successfully delivered corporate infrastructure projects 
            across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-white border border-neutral-100 p-8 cursor-pointer hover:border-neutral-200 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]"
            >
              {/* Project number */}
              <span className="absolute top-8 right-8 text-6xl font-bold text-neutral-100 group-hover:text-blue-50 transition-colors duration-500">
                {project.number}
              </span>
              
              <div className="relative">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-600 tracking-wide uppercase mb-5">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                  {project.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-blue-600 transition-colors duration-300">
                  View Details
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
