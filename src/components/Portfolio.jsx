import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Pan India PEB Erection",
    category: "Pre-Engineering Building",
    image: "/erection_drawing.png",
  },
  {
    id: 2,
    title: "Large Scale Steel Supply",
    category: "Trading & Logistics",
    image: "/steel_factory.png",
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold text-foreground">Our Past Work</h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From preparing drawings to full-scale erection on a Pan India level, and providing comprehensive market intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl aspect-video cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary font-semibold text-sm tracking-wider uppercase mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-bold text-white">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
