import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Factory, Cog, Truck, Package, Building2,
  ChevronRight, Car, Layers, HardHat, Zap,
  Settings, ArrowRight,
} from 'lucide-react';

// ── Isolated stat card (hooks must not be inside .map) ──────────────────────
function StatCard({ value, suffix, label, detail, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const duration = 2200;
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setCount(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-orange-500/30 transition-all duration-300 text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <p className="text-4xl md:text-5xl font-black text-white tabular-nums mb-1">
          {count.toLocaleString()}{suffix}
        </p>
        <p className="font-semibold text-gray-300 text-sm mb-1">{label}</p>
        <p className="text-gray-600 text-xs font-mono tracking-wider">{detail}</p>
      </div>
    </motion.div>
  );
}

// ── Supply chain steps ───────────────────────────────────────────────────────
const chainSteps = [
  { icon: Factory,   label: 'Steel Mill',      sub: 'Global sourcing'      },
  { icon: Cog,       label: 'Processing',       sub: 'Quality control'      },
  { icon: Truck,     label: 'Logistics',        sub: 'Fast dispatch'        },
  { icon: Package,   label: 'Delivery',         sub: 'On-time, every time'  },
  { icon: Building2, label: 'Client Factory',   sub: 'Production ready'     },
];

// ── Industry cards ───────────────────────────────────────────────────────────
const industries = [
  {
    icon: HardHat, title: 'Construction',
    desc: 'TMT bars, beams, channels and structural steel for every scale of construction project.',
    accent: '#f97316', bg: 'rgba(249,115,22,0.08)',
  },
  {
    icon: Car, title: 'Automotive',
    desc: 'High-grade CR/HR coils and precision steel strip for automotive body and component manufacturing.',
    accent: '#06b6d4', bg: 'rgba(6,182,212,0.08)',
  },
  {
    icon: Cog, title: 'Manufacturing',
    desc: 'Billets, HR coils and alloy steels for general manufacturing, forging and fabrication.',
    accent: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: Layers, title: 'Infrastructure',
    desc: 'Heavy sections, plates and structural steel for bridges, ports and public infrastructure.',
    accent: '#10b981', bg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: Zap, title: 'Appliances',
    desc: 'GP coils and colour-coated steel for white goods, electronics and consumer appliance panels.',
    accent: '#f59e0b', bg: 'rgba(245,158,11,0.08)',
  },
  {
    icon: Settings, title: 'Engineering',
    desc: 'Stainless and mild steel pipes, tubes and sections for precision engineering applications.',
    accent: '#f43f5e', bg: 'rgba(244,63,94,0.08)',
  },
];

// ── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  { value: 35,  suffix: '+', label: 'Years Experience'},
  { value: 5000, suffix: '+', label: 'MT Delivered'},
  { value: 3,  suffix: '+', label: 'Countries Served'},
  { value: 150, suffix: '+', label: 'Industrial Clients'},
];

// ────────────────────────────────────────────────────────────────────────────
export default function IndustrialSection() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          1. VIDEO / HERO BANNER
      ───────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#050810]">
        {/* Atmospheric gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#060b14] to-black" />

        {/* Animated scan-line overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,150,50,0.015) 3px, rgba(255,150,50,0.015) 4px)',
          }}
        />

        {/* Left-side orange glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-orange-500/10 blur-[100px] rounded-full" />

        {/* Gradient vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050810] to-transparent" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-16 py-32">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 font-mono text-[11px] tracking-[0.35em] uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-orange-400/60" />
            Steel Singer Info Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] mb-8 max-w-3xl"
          >
            From Global Mills
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              to Your Production Line
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
          >
            Integrated steel service provider, market intelligence and publishing prices on PAN India Level -
            connecting the world's best mills directly to your facility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-400/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request a Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              View Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          2. SUPPLY CHAIN IN MOTION
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#070c18] relative overflow-hidden">
        {/* Subtle industrial grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,150,50,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,150,50,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              Operational Flow
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Supply Chain in Motion</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
              End-to-end steel supply from source to factory floor.
            </p>
          </motion.div>

          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-center justify-between gap-2">
            {chainSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex items-center flex-1">
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    whileHover={{ y: -8 }}
                    className="group relative flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white/[0.04] border border-white/[0.09] hover:border-orange-500/50 hover:bg-orange-500/[0.07] transition-all duration-300 cursor-default min-w-[150px] flex-shrink-0 shadow-lg"
                  >
                    <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-orange-500 text-black text-xs font-black flex items-center justify-center z-10 shadow-md shadow-orange-500/30">
                      {i + 1}
                    </span>
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 group-hover:bg-orange-500/20 flex items-center justify-center mb-4 transition-all">
                      <Icon size={30} className="text-orange-400" />
                    </div>
                    <p className="font-bold text-white text-sm mb-1">{step.label}</p>
                    <p className="text-gray-500 text-xs leading-snug">{step.sub}</p>
                  </motion.div>

                  {/* Animated connector */}
                  {i < chainSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                      className="relative flex-1 mx-3 h-px origin-left"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 to-orange-500/20" />
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-orange-400 shadow shadow-orange-400/70"
                        animate={{ x: ['0%', '300%'] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                      />
                      <ChevronRight
                        size={16}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-500/60"
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden flex flex-col items-center gap-0 w-full">
            {chainSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center w-full max-w-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group flex items-center gap-5 w-full p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-orange-500/30 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={26} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">{step.label}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{step.sub}</p>
                    </div>
                    <span className="ml-auto text-orange-500/50 text-sm font-black tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  </motion.div>
                  {i < chainSteps.length - 1 && (
                    <div className="flex flex-col items-center py-2">
                      <div className="w-px h-6 bg-gradient-to-b from-orange-500/40 to-orange-500/10" />
                      <ChevronRight size={14} className="text-orange-500/40 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          3. TRUST METRICS COUNTER
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#050810] border-y border-gray-900/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              Our Track Record
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Trusted by Industry</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          4. INDUSTRY APPLICATIONS
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#070c18]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-400 text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              Sectors We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Industry Applications</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Precision steel solutions engineered for every industry's unique demands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="group relative p-6 rounded-2xl border border-white/[0.07] hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default"
                  style={{ background: `linear-gradient(135deg, ${ind.bg} 0%, rgba(7,12,24,0.8) 100%)` }}
                >
                  {/* Inner glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                    style={{ boxShadow: `inset 0 0 50px ${ind.accent}12` }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${ind.accent}20` }}
                    >
                      <Icon size={20} style={{ color: ind.accent }} />
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">{ind.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>

                    {/* Expanding accent underline */}
                    <div
                      className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ backgroundColor: ind.accent, opacity: 0.35 }}
                    />


                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
