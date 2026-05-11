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
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo-srabhiyantra.png"
                alt="SR Abhiyantra"
                className="h-10 w-10 rounded-lg object-contain bg-white p-1"
              />
              <div>
                <p className="text-white font-semibold">SR Abhiyantra</p>
                <p className="text-xs text-neutral-500">System Pvt Ltd</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Authorized dealer of premium office furniture and workspace solutions 
              for corporate & institutional clients across India.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
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
      <div className="border-t border-neutral-800">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} SR Abhiyantra System Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
