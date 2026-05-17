import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);

    // IMPORTANT: Replace this placeholder with your actual Web3Forms access key
    // You can get one for free at https://web3forms.com/
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResultMessage("Message sent successfully! We'll get back to you soon.");
        e.target.reset();
      } else {
        setStatus('error');
        setResultMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setResultMessage("Failed to send message. Please check your connection.");
    }
  };

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
                  <h5 className="font-bold text-foreground">Head Office</h5>
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
                  <p className="text-muted-foreground">steelsingertrade@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone />
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Phone</h5>
                  <p className="text-muted-foreground">+91 9840 669339</p>
                  <p className="text-muted-foreground">+91 6384 111100</p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input id="firstName" name="first_name" type="text" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input id="lastName" name="last_name" type="text" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="How can we help you?"></textarea>
              </div>
              
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center space-x-3 text-green-600 dark:text-green-400">
                  <CheckCircle2 size={20} />
                  <span>{resultMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center space-x-3 text-red-600 dark:text-red-400">
                  <AlertCircle size={20} />
                  <span>{resultMessage}</span>
                </div>
              )}

              {/* Honeypot anti-spam field — must stay hidden */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-primary hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-lg font-bold flex items-center justify-center space-x-2 transition-colors"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
