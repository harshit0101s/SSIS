import { motion } from 'framer-motion';

const products = [
  { name: "Ferro Silico Manganese", image: "/products/ferro_silico_manganese.png", description: "Essential ferroalloy used as a deoxidizer and alloying element in steel manufacturing." },
  { name: "Ferro Silicon", image: "/products/ferro_silicon.png", description: "High-quality silicon-iron alloy used to improve the strength and quality of steel." },
  { name: "Melting Scrap", image: "/products/melting_scrap.png", description: "Premium recyclable scrap steel ready for induction and electric arc furnace melting." },
  { name: "Iron Ore (Pellet and Lumps)", image: "/products/iron_ore.png", description: "High-grade iron ore pellets and calibrated lumps for blast furnaces and DRI plants." },
  { name: "Steel Billet", image: "/products/steel_billet.png", description: "Continuous-cast semi-finished steel forms, perfect for rolling into long products." },
  { name: "HR Coils", image: "/products/steel_coils.png", description: "Hot Rolled steel coils providing excellent formability for heavy industrial fabrication." },
  { name: "CR Coils", image: "/products/cr_coils.png", description: "Cold Rolled coils featuring superior surface finish and precise thickness tolerances." },
  { name: "GP Coils", image: "/products/gp_coils.png", description: "Galvanized Plain coils with robust zinc coating for maximum corrosion resistance." },
  { name: "Colour Coated Coils", image: "/products/colour_coated_coils.png", description: "Durable, weather-resistant pre-painted steel sheets for roofing and architectural applications." },
  { name: "TMT Bars", image: "/products/tmt_bars.png", description: "High-strength Thermo Mechanically Treated (TMT) bars for critical construction projects." },
  { name: "Jindal Section - UB/UC & WPB", image: "/products/jindal_section.png", description: "Premium Universal Beams, Universal Columns, and Wide Flange Beams by Jindal Steel." },
  { name: "Beam / Channel / Angle / Flat", image: "/products/steel_channels.png", description: "Heavy-duty structural steel profiles designed for maximum load-bearing capabilities." },
  { name: "Stainless & Mild Steel Pipes", image: "/products/steel_pipes.png", description: "High-quality industrial pipes and tubes for fluid transfer and structural frameworks." },
  { name: "All Kind of Metals", image: "/products/all_metals.png", description: "Comprehensive trading of various ferrous and non-ferrous industrial metals." },
  { name: "Metal Scrap", image: "/products/metal_scrap.png", description: "Bulk supply of assorted metal scrap for efficient and sustainable recycling." },
];

export default function Products() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Our Catalog</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Premium Steel Products</h3>
          <div className="inline-block bg-primary/10 border border-primary/20 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            All Integrated Trading House
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide a comprehensive range of raw materials, semi-finished, and finished steel products to meet the diverse needs of the global industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/10 rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-3">{product.name}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
