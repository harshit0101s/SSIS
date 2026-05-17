import { motion } from 'framer-motion';

const partners = [
  { name: "JSP", file: "jsp.svg", scale: "scale-110" },
  { name: "JSW", file: "jsw.png", scale: "scale-100" },
  { name: "SAIL", file: "sail.png", scale: "scale-125" },
  { name: "TATA STEEL", file: "tata_steel.png", scale: "scale-100" },
  { name: "IOCL", file: "iocl.png", scale: "scale-150" },
  { name: "CPCL", file: "cpcl.png", scale: "scale-125" },
  { name: "BPCL", file: "bpcl.svg", scale: "scale-125" },
  { name: "HPCL", file: "hpcl.png", scale: "scale-125" },
  { name: "Apollo", file: "apollo.png", scale: "scale-100" },
  { name: "VSP", file: "vsp.svg", scale: "scale-125" },
  { name: "NMDC", file: "nmdc.png", scale: "scale-125" },
  { name: "L&T Hydro Carbons", file: "l_t.png", scale: "scale-150" },
  { name: "Manaksia Coated Steel", file: "manaksia.png", scale: "scale-150" },
  { name: "GoodLuck Steels", file: "goodluck.png", scale: "scale-150" },
  { name: "JINDAL SAW", file: "jindal_saw.png", scale: "scale-150" },
  { name: "JSL", file: "jsl.png", scale: "scale-150" },
  { name: "Bridge & Roof", file: "bridge_roof.png", scale: "scale-125" },
  { name: "Steel 1", file: "steel_1.png", scale: "scale-125" },
  { name: "JB Infra", file: "jb_infra.png", scale: "scale-110" }
];

export default function Partners() {
  return (
    <section id="partners" className="py-10 bg-[#0d1117] border-y border-white/[0.06] overflow-hidden relative">
      <style>
        {`
          @keyframes custom-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-custom-marquee {
            animation: custom-marquee 80s linear infinite;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      <div className="container mx-auto px-6 mb-8 text-center relative z-20">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]"
        >
          Trusted By Industry Leaders
        </motion.h3>
      </div>

      {/* Gradient Mask for fading edges to make it look premium */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#0d1117] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#0d1117] to-transparent z-10 pointer-events-none" />

      {/* Group allows us to pause the inner marquee on hover, overflow-x-auto allows manual scrolling */}
      <div className="relative flex overflow-x-auto no-scrollbar group cursor-grab active:cursor-grabbing">
        <div className="flex whitespace-nowrap items-center animate-custom-marquee group-hover:[animation-play-state:paused] w-max py-4">
          {/* Double the array for seamless looping */}
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center mx-8 md:mx-12">
              {/* Increased height and width for a common larger photo size */}
              <div className="relative h-20 w-40 md:h-24 md:w-56 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex items-center justify-center">
                {/* Image tag with a smart fallback to text in case the image file is missing */}
                <img
                  src={`/partners/${partner.file}`}
                  alt={partner.name}
                  className={`max-h-full max-w-full object-contain ${partner.scale}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-xl md:text-2xl font-extrabold text-slate-500 hover:text-slate-300 transition-colors duration-500 uppercase tracking-widest text-center whitespace-normal leading-tight">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
