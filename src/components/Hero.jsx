import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SteelCanvas from './SteelCanvas';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050810]">
      {/* Animated Steel Canvas Background */}
      <SteelCanvas />
      
      {/* Gradient Overlay — pointer-events-none so mouse events reach the canvas */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#050810]/30 via-transparent to-[#050810]" />

      <div className="container mx-auto px-6 relative z-[2] text-center pointer-events-none">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 flex flex-wrap justify-center leading-tight gap-x-[0.25em]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {/* Each word wrapped in whitespace-nowrap so letters never split mid-word */}
          {[
            { word: "FORGING", cls: "text-white" },
            { word: "THE", cls: "text-white" },
            { word: "FUTURE", cls: "text-secondary" },
            { word: "OF", cls: "text-white" },
            { word: "STEEL", cls: "text-white" },
          ].map((group, wi) => (
            <span key={wi} className="whitespace-nowrap inline-flex">
              {Array.from(group.word).map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  className={group.cls}
                  variants={{
                    hidden: { opacity: 0, display: 'none' },
                    visible: { opacity: 1, display: 'inline-block' }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 text-balance"
        >
          One of the largest integrated steel service providers based in Chennai, delivering market intelligence, trading, and engineering solutions on a global scale.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto"
        >
          <Link to="/services" className="px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
            Explore Services
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
