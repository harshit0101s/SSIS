import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, CalendarClock } from 'lucide-react';

export default function ConsultationForm() {
  const [status, setStatus] = useState('idle');
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
    formData.append("subject", "New Consultation Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setResultMessage("Consultation booked successfully! We will reach out to confirm the schedule.");
        e.target.reset();
      } else {
        setStatus('error');
        setResultMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus('error');
      setResultMessage("Failed to submit booking. Check your connection.");
    }
  };

  return (
    <div className="bg-background p-8 rounded-2xl shadow-xl border border-border w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
          <CalendarClock size={32} />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Book a Consultation</h3>
        <p className="text-muted-foreground mt-2">Get expert guidance on Manpower Management, Digital Marketing, or Procurement strategy.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
          <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="John Doe" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="john@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Contact Number</label>
            <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="+91 XXXXX XXXXX" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Topic of Consultation</label>
          <select name="topic" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none">
            <option value="">Select a topic</option>
            <option value="Manpower Management">Manpower Management</option>
            <option value="Procurement Strategy">Procurement Strategy (Raw material/Finished steel)</option>
            <option value="Digital Marketing">Digital Marketing & Branding</option>
            <option value="General Market Intelligence">General Market Intelligence</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Details / Objectives to Discuss</label>
          <textarea name="details" rows="4" required className="w-full px-4 py-3 rounded-lg bg-muted border-transparent focus:border-primary focus:bg-background focus:ring-0 transition-all outline-none" placeholder="Briefly describe what you would like to achieve..."></textarea>
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
          className="w-full py-4 bg-primary hover:bg-blue-700 disabled:opacity-70 text-white rounded-lg font-bold flex items-center justify-center space-x-2 transition-colors"
        >
          <span>{status === 'submitting' ? 'Booking...' : 'Book Call'}</span>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
