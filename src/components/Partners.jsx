import { motion } from 'framer-motion';

const partners = [
  "JSP", "JSW", "SAIL", "TATA STEEL", "IOCL", "CPCL", "BPCL", "HPCL", "Appollo", "VSP", "NMDC", "L&T Hydro Carbons", "Manaksia Coated Steel", "GoodLuck Steels", "JINDAL SAW", "JSL", "Bridge & Roof", "Steel 1", "JB Infra"
];

export default function Partners() {
  return (
    <section id="partners" className="py-18 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
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
