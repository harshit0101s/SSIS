import { motion } from 'framer-motion';
import { LineChart, Users, Megaphone, HardHat, Globe, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: "Market Intelligence",
    icon: <LineChart className="w-8 h-8 text-secondary" />,
    desc: "Daily prices of Raw materials, Semis, and Finished steel products (Melting, sponge, Ingot, Billet, TMT, HR/CR Coils, Colour coated, Structural steels). Prices based on a weighted average of low transaction values.",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="w-8 h-8 text-secondary" />,
    desc: "Providing digital marketing strategy with Branding to help organizations grow their reach and establish market dominance.",
  },
  {
    title: "Manpower Management",
    icon: <Users className="w-8 h-8 text-secondary" />,
    desc: "Consultation to manage manpower efficiently, working in the right direction to achieve sales targets and maximize organizational output.",
  },
  {
    title: "Procurement Consulting",
    icon: <ShoppingCart className="w-8 h-8 text-secondary" />,
    desc: "Expert consultation for procuring both Raw material and finished steel at the best market rates.",
  },
  {
    title: "Pan India Trading",
    icon: <Globe className="w-8 h-8 text-secondary" />,
    desc: "Buying and selling platform on a Pan India level, trading all Mild steel with our extensive database of customers dealing in steel.",
  },
  {
    title: "Pre-Engineering Building",
    icon: <HardHat className="w-8 h-8 text-secondary" />,
    desc: "Doing Pre-Engineering Building with competent vendors, including preparing drawings and erection on a Pan India level.",
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">What We Do</h2>
          <h3 className="text-4xl font-bold text-foreground">Our Comprehensive Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
