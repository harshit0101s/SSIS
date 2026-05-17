import { motion } from 'framer-motion';

export default function Disclaimer() {
  return (
    <section className="bg-[#0B1121] py-16 border-t border-gray-800/50 w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-stretch justify-start w-full">
          
          {/* Vertical rotated text (Desktop) / Normal text (Mobile) */}
          <div className="flex-shrink-0 flex items-center justify-center md:border-r md:border-gray-800/80 md:pr-12 mb-6 md:mb-0 md:min-h-[160px]">
            {/* Desktop Typewriter (Vertical) */}
            <motion.div 
              className="hidden md:flex flex-col-reverse text-sm font-black text-gray-500 tracking-[0.4em] uppercase opacity-70"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {Array.from("DISCLAIMER").map((char, index) => (
                <motion.span 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, display: 'none' },
                    visible: { opacity: 1, display: 'block', rotate: -90 }
                  }}
                  className="mb-2 last:mb-0"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Mobile Typewriter (Horizontal) */}
            <motion.div 
              className="md:hidden flex text-sm font-black text-gray-500 tracking-[0.4em] uppercase opacity-70"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {Array.from("DISCLAIMER").map((char, index) => (
                <motion.span 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, display: 'none' },
                    visible: { opacity: 1, display: 'inline-block' }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          {/* The actual disclaimer text */}
          <div className="flex-grow flex items-center md:pl-12 max-w-7xl">
            <p className="text-gray-400 text-sm md:text-base leading-loose italic font-medium">
              The information about steel market prices and market trend that SSIS provides only for subscribers decision making and will not constitute a direct suggestion for the final decision making. Subscribers should not use it to replace their own judgements and Steel Singer Info Services accepts no responsibility for consequences caused by the usage of the data. The copyright of this report belongs to Steel Singer Info Services and the report is exclusively used by SSIS subscribers. Any form of spreading, publishing or copying the report without the permission of the Steel Singer Info Services is strictly prohibited.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
