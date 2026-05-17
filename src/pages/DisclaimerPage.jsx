import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white">
      {/* Top decorative bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-3xl py-20 md:py-28">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-400 transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldAlert size={22} className="text-orange-400" />
            </div>
            <div>
              <p className="text-orange-400 text-[11px] font-black uppercase tracking-[0.35em] mb-1">Legal</p>
              <h1 className="text-3xl md:text-4xl font-black text-white">Disclaimer</h1>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-orange-500/30 via-orange-500/10 to-transparent" />
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg italic"
        >
          <p>
            The information about steel market prices and market trends that SSIS provides is only for
            subscribers' decision-making and will not constitute a direct suggestion for the final
            decision-making. Subscribers should not use it to replace their own judgements, and Steel
            Singer Info Services accepts no responsibility for consequences caused by the usage of the data.
          </p>
          <p>
            The copyright of this report belongs to Steel Singer Info Services and the report is
            exclusively used by SSIS subscribers. Any form of spreading, publishing or copying the
            report without the permission of Steel Singer Info Services is strictly prohibited.
          </p>
          <p>
            All market data, pricing indices, and trade intelligence provided through the SSIS platform
            are compiled from sources believed to be reliable, but no warranty, express or implied, is
            made as to their accuracy, completeness, or fitness for any particular purpose.
          </p>
          <p>
            Steel Singer Info Services shall not be liable for any direct, indirect, incidental, or
            consequential loss or damage arising out of the use of, or reliance on, any information
            provided through this platform or its associated communications.
          </p>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/[0.06] text-gray-600 text-sm"
        >
          <p>© {new Date().getFullYear()} Steel Singer Info Services. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
