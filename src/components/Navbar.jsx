import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Buy/Sell', path: '/buy-sell' },
    { name: 'Consulting', path: '/consultation' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter flex items-center"
        >
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Steel Singer Logo" className="w-10 h-10 object-contain rounded-full" />
            <span><span className="text-orange-600">STEEL SINGER</span> INFO SERVICES</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-6">
          {links.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors uppercase tracking-wider ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background/95 backdrop-blur-md border-b border-border mt-4"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors uppercase tracking-wider ${location.pathname === link.path ? 'text-primary' : 'hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
