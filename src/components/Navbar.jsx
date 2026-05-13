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
        <a href="#" className="flex items-center gap-3 group relative z-50 flex-shrink-0">
          <img
            src="/logo-srabhiyantra.png"
            alt="SR Abhiyantra Systems Pvt Ltd"
            className="h-10 w-10 md:h-11 md:w-11 rounded-lg object-contain bg-gradient-to-br from-blue-50 to-white p-1 shadow-xs transition-all duration-300 group-hover:shadow-sm"
          />
          <div className="hidden sm:block">
            <p className={`font-semibold text-sm md:text-base tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-neutral-950' : 'text-white'
            }`}>
              SR Abhiyantra
            </p>
            <p className={`text-xs tracking-wide font-medium transition-colors duration-300 ${
              scrolled ? 'text-neutral-500' : 'text-white/70'
            }`}>
              Infrastructure Solutions
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled 
                  ? 'text-neutral-600 hover:text-neutral-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-neutral-900' : 'bg-white'
              }`} />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 relative z-50">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              scrolled
                ? 'bg-neutral-900 text-white hover:bg-neutral-950 shadow-sm hover:shadow-md'
                : 'bg-white text-neutral-900 hover:bg-neutral-50 shadow-sm hover:shadow-md'
            }`}
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled 
                ? 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900' 
                : 'text-white hover:bg-white/15 hover:text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden fixed inset-0 top-20 z-40 bg-white/98 backdrop-blur-sm border-t border-neutral-200/50"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-8 pt-8">
              <nav className="flex flex-col items-center gap-2 w-full max-w-sm">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="w-full text-center py-3 text-lg font-medium text-neutral-800 hover:text-neutral-950 rounded-lg hover:bg-neutral-100 transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  className="w-full mt-6 flex items-center justify-center gap-2 py-3 bg-neutral-900 text-white text-base font-medium rounded-lg hover:bg-neutral-950 transition-all shadow-sm hover:shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
