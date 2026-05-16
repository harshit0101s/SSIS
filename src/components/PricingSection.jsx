import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingSection() {
  return (
    <section className="py-24 bg-[#0a0e17]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-4">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Unlock Full Market Intelligence</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Become an SSIS Subscriber to gain exclusive access to daily reports, WhatsApp updates,
            and full trading privileges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 items-stretch">
          {/* Basic Plan */}
          <div className="bg-[#131823] rounded-2xl p-10 border border-slate-800 flex flex-col">
            <h4 className="text-2xl font-bold text-white mb-2">Basic Access</h4>
            <p className="text-slate-400 mb-8">For small businesses tracking trends.</p>
            
            <div className="text-5xl font-bold text-white mb-10 flex items-baseline gap-1">
              Free<span className="text-xl text-slate-500 font-medium">/always</span>
            </div>
            
            <ul className="space-y-5 mb-10 flex-grow">
              <li className="flex items-center text-slate-300">
                <Check className="text-green-500 mr-4" size={20} strokeWidth={3} /> Weekly Market Summaries
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="text-green-500 mr-4" size={20} strokeWidth={3} /> Access to public news
              </li>
              <li className="flex items-center text-slate-600">
                <Check className="text-slate-700 mr-4" size={20} strokeWidth={3} /> <del className="decoration-slate-700">Real-time Daily Pricing</del>
              </li>
              <li className="flex items-center text-slate-600">
                <Check className="text-slate-700 mr-4" size={20} strokeWidth={3} /> <del className="decoration-slate-700">Trading Platform Access</del>
              </li>
            </ul>
            
            <Link to="/consultation" className="w-full py-4 bg-[#1e2433] hover:bg-[#2a3143] text-white rounded-xl font-bold transition-colors text-center block">
              Get Started
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#131823] rounded-2xl p-10 border-[1.5px] border-blue-500 relative flex flex-col">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
              Subscriber
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-2">SSIS Subscriber</h4>
            <p className="text-slate-400 mb-8">Complete intelligence & trading access.</p>
            
            <div className="text-5xl font-bold text-white mb-10">
              Custom
            </div>
            
            <ul className="space-y-5 mb-10 flex-grow">
              <li className="flex items-center text-slate-300">
                <Check className="text-blue-500 mr-4" size={20} strokeWidth={3} /> Real-time Daily Prices (Pan India)
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="text-blue-500 mr-4" size={20} strokeWidth={3} /> WhatsApp Market Alerts
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="text-blue-500 mr-4" size={20} strokeWidth={3} /> Unlimited Buy/Sell Trading Access
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="text-blue-500 mr-4" size={20} strokeWidth={3} /> Full Consultation Privileges
              </li>
            </ul>
            
            <Link to="/contact" className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold transition-colors text-center block shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
