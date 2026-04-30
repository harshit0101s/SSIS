import { motion } from 'framer-motion';
import heroBg from '/hero_bg.png'; // Will copy generated image to public

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('/hero_bg.png')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 uppercase"
        >
          Forging The <span className="text-secondary">Future</span> <br/> Of Steel
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
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#services" className="px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
            Explore Services
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
