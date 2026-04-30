import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Build The Future Together</h3>
            <p className="text-muted-foreground text-lg mb-10 text-balance">
              Whether you need market intelligence, manpower consultation, or large-scale steel procurement, Steel Singer Info Services is ready to assist you on a global scale.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin />
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Headquarters</h5>
                  <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Email</h5>
                  <p className="text-muted-foreground">info@steelsinger.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone />
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Phone</h5>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background p-8 rounded-2xl shadow-xl border border-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-primary hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center space-x-2 transition-colors">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
