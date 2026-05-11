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
          ? 'glass border-b border-neutral-200/50 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group relative z-50">
          <img
            src="/logo-srabhiyantra.png"
            alt="SR Abhiyantra Systems Pvt Ltd"
            className="h-12 w-12 md:h-14 md:w-14 rounded-xl object-contain bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <p className={`font-semibold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-neutral-900' : 'text-white'
            }`}>
              SR Abhiyantra
            </p>
            <p className={`text-[10px] tracking-wide font-medium transition-colors ${
              scrolled ? 'text-neutral-500' : 'text-white/70'
            }`}>
              Govt. Licensed Electrical Contractor
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                scrolled 
                  ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 relative z-50">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                : 'bg-white text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled 
                ? 'text-neutral-700 hover:bg-neutral-100' 
                : 'text-white hover:bg-white/10'
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 z-40 bg-white"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
              <nav className="flex flex-col items-center gap-2 w-full max-w-sm">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full text-center py-4 text-xl font-medium text-neutral-800 hover:text-neutral-600 rounded-xl hover:bg-neutral-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="w-full mt-6 flex items-center justify-center gap-2 py-4 bg-neutral-900 text-white text-lg font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
