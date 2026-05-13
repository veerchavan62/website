import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-100 shadow-xs py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group relative z-50 flex-shrink-0">
          <img
            src="/logo-srabhiyantra.png"
            alt="SR Abhiyantra Systems Pvt Ltd"
            className="h-9 w-9 md:h-10 md:w-10 rounded-md object-contain transition-all duration-300 group-hover:opacity-80"
          />
          <div className="hidden sm:flex flex-col">
            <p className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
              scrolled ? 'text-neutral-950' : 'text-white'
            }`}>
              SR Abhiyantra
            </p>
            <p className={`text-xs font-normal transition-colors duration-300 ${
              scrolled ? 'text-neutral-400' : 'text-white/60'
            }`}>
              Infrastructure
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-current ${
                scrolled 
                  ? 'text-neutral-600 hover:text-neutral-900'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                : 'bg-white text-neutral-900 hover:bg-neutral-50 shadow-sm'
            }`}
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              scrolled 
                ? 'text-neutral-700 hover:bg-neutral-200/50' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 stroke-2" /> : <Menu className="w-6 h-6 stroke-2" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[68px] z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200/40"
          >
            <div className="flex flex-col px-6 pt-6">
              <nav className="flex flex-col gap-1 w-full">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="py-3 px-4 text-base font-medium text-neutral-800 hover:text-neutral-950 rounded-lg hover:bg-neutral-100 transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                className="mt-6 flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
