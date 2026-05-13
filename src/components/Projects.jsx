import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Corporate Headquarters',
    category: 'Office Infrastructure',
    description: '200+ workstation deployment with complete electrical and networking setup',
  },
  {
    title: 'Banking Operations Center',
    category: 'Financial Services',
    description: 'Secure workspace with Gunnebo storage solutions and structured cabling',
  },
  {
    title: 'Co-working Space',
    category: 'Flexible Workspace',
    description: 'Modern collaborative environment with ergonomic Wipro furniture',
  },
  {
    title: 'Government Office',
    category: 'Public Sector',
    description: 'Large-scale modular workstation installation with IT infrastructure',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-28 md:py-36">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium tracking-widest text-blue-600 uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-snug">
            Project Showcase
          </h2>
          <p className="mt-5 text-base text-neutral-500 leading-relaxed">
            Explore our portfolio of successfully delivered corporate infrastructure projects 
            across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl bg-neutral-50 border border-neutral-200 p-7 cursor-pointer hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-600 mb-4">
                {project.category}
              </span>
              <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-neutral-400 group-hover:text-blue-600 transition-colors">
                View Details
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
