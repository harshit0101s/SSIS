import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Market Intelligence is <span className="text-primary dark:text-accent">Indispensable</span>
          </h3>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            <p>
              As market intelligence is indispensable to business today, it helps you make decisions to run your business smoothly. In an era of competition, gaining information and analyzing the essentials of the market from the Iron and Steel sectors is paramount.
            </p>
            <p>
              Steel Singer Info Services provides real-time data and essential information such as daily steel prices across major Pan India cities. Our accurate data is based on real-time demand and supply dynamics.
            </p>
            <p className="font-semibold text-foreground border-l-4 border-secondary pl-4 italic text-left mt-8">
              "Creating opportunities across the Globe 🌎 by our large steel buyers and sellers to enhance your business smoothly."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
