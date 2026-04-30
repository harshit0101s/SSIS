import { motion } from 'framer-motion';

const partners = [
  "JSPL", "JSW", "SAIL", "TATA STEEL", "ESSAR", "AMNS", "RINL", "JINDAL"
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-2">Trusted By</h2>
        <h3 className="text-3xl font-bold">Companies We Work With</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {/* Double the array for seamless looping */}
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="mx-12 md:mx-24 text-4xl md:text-6xl font-black text-white/50 hover:text-white transition-colors cursor-default">
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
