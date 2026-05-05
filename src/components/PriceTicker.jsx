import { motion } from 'framer-motion';

const prices = [
  { item: "Sponge Iron", price: "₹28,500", trend: "+1.2%" },
  { item: "Billet", price: "₹42,100", trend: "-0.5%" },
  { item: "TMT Bar", price: "₹46,800", trend: "+2.1%" },
  { item: "HR Coil", price: "₹53,200", trend: "+0.8%" },
  { item: "CR Coil", price: "₹58,900", trend: "-1.1%" },
  { item: "Ingot", price: "₹41,500", trend: "+0.3%" },
  { item: "Structural Steel", price: "₹48,000", trend: "0.0%" },
];

export default function PriceTicker() {
  return (
    <div className="bg-black text-white py-2 border-b border-white/10 overflow-hidden text-xs md:text-sm font-mono tracking-wider z-50 relative">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Loop twice for smooth infinite scroll */}
          {[...prices, ...prices].map((data, i) => {
            const isPositive = data.trend.startsWith('+');
            const isNegative = data.trend.startsWith('-');
            return (
              <div key={i} className="flex items-center mx-6">
                <span className="text-white/60 mr-2">{data.item}:</span>
                <span className="font-bold mr-2">{data.price}</span>
                <span className={`${isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-gray-500'}`}>
                  {data.trend}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
