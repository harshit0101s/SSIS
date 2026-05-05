import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BuySellForm() {
  const [status, setStatus] = useState('idle');
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
    formData.append("subject", "New Buy/Sell Inquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setResultMessage("Inquiry submitted successfully! Our trading team will contact you shortly.");
        e.target.reset();
      } else {
        setStatus('error');
        setResultMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus('error');
      setResultMessage("Failed to submit inquiry. Check your connection.");
    }
  };

  return (
    <div className="bg-background p-8 rounded-2xl shadow-xl border border-border w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground">Buy / Sell Steel</h3>
        <p className="text-muted-foreground mt-2">Trade Mild Steel and other products with our Pan India network.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Intent */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">Intent</label>
            <select name="intent" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none">
              <option value="">Select an option</option>
              <option value="Buy">I want to Buy</option>
              <option value="Sell">I want to Sell</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">Product Category</label>
            <select name="product" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none">
              <option value="">Select product</option>
              <option value="Melting">Melting</option>
              <option value="Sponge">Sponge</option>
              <option value="Ingot">Ingot</option>
              <option value="Billet">Billet</option>
              <option value="TMT">TMT</option>
              <option value="HR Coils">HR Coils</option>
              <option value="CR Coils">CR Coils</option>
              <option value="Colour Coated">Colour Coated</option>
              <option value="Structural Steel">Structural Steel</option>
            </select>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Quantity (in MT)</label>
            <input type="number" name="quantity" required min="1" className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="e.g. 50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Expected Price (Optional)</label>
            <input type="text" name="expected_price" className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="₹/MT" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
            <input type="text" name="company" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="Your Company Ltd." />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Contact Number</label>
            <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="+91 XXXXX XXXXX" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="you@company.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Additional Specifications</label>
          <textarea name="specifications" rows="3" className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="Grades, delivery locations, etc."></textarea>
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

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full py-4 bg-secondary hover:bg-orange-600 disabled:opacity-70 text-white rounded-lg font-bold flex items-center justify-center space-x-2 transition-colors"
        >
          <span>{status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}</span>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
