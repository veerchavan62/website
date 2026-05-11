import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Calendar } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Building2 },
  { value: '50+', label: 'Enterprise Clients', icon: Users },
  { value: '10+', label: 'Years Experience', icon: Calendar },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neutral-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative section-container w-full py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-800/50 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
                Authorized OEM Partner
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
              Premium Workspace{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                Infrastructure
              </span>{' '}
              for Modern Enterprises
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Authorized dealer for Wipro, Godrej Interio, and leading enterprise brands. 
              Complete office solutions from ergonomic furniture to network infrastructure.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-900 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919325837755?text=Hello%20SR%20Abhiyantra%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20workspace%20solutions%20and%20dealership%20services."
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-neutral-600 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
              >
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[500px]">
              {/* Card 1 - Office Furniture */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-8 w-64 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Office Furniture</h3>
                <p className="text-sm text-neutral-400">Premium ergonomic solutions from Wipro & Godrej</p>
              </motion.div>

              {/* Card 2 - Network Infrastructure */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-28 right-0 w-64 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Network Infrastructure</h3>
                <p className="text-sm text-neutral-400">Cisco, D-Link & CommScope solutions</p>
              </motion.div>

              {/* Card 3 - Electrical */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-16 w-64 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Electrical Contracting</h3>
                <p className="text-sm text-neutral-400">Govt. licensed electrical services</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-12 border-t border-neutral-800"
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
