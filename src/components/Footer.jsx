import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const footerLinks = {
  Services: [
    'Office Furniture',
    'Electrical Contracting',
    'Network Infrastructure',
    'Workspace Planning',
  ],
  Company: [
    'About Us',
    'Projects',
    'Testimonials',
    'Contact',
  ],
  Support: [
    'Get a Quote',
    'Bulk Orders',
    'Installation Support',
    'Warranty Info',
  ],
};

const socialLinks = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/sr-abhiyantra-systems-pvt.-ltd./about/', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/919325837755', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-neutral-400 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>
      
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider-dark" />
      
      <div className="section-container relative py-32 md:py-40">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo-srabhiyantra.png"
                alt="SR Abhiyantra"
                className="h-12 w-12 rounded-xl object-contain bg-white p-1.5 shadow-lg"
              />
              <div>
                <p className="text-white font-semibold text-lg tracking-tight">SR Abhiyantra</p>
                <p className="text-xs text-neutral-500 tracking-wide">System Pvt Ltd</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-8 text-neutral-400">
              Authorized dealer of premium office furniture and workspace solutions 
              for corporate & institutional clients across India.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-neutral-800/50 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-800 hover:text-white hover:border-neutral-700 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-5">{title}</h4>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800/50">
        <div className="section-container relative py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-neutral-500">&copy; {new Date().getFullYear()} SR Abhiyantra System Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
