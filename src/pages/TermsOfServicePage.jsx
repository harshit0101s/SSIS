import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    prose:
      'By accessing or using the Steel Singer Info Services website ("Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please discontinue use of this Site immediately. These Terms apply to all visitors, subscribers, buyers, and sellers who access or use our services.',
  },
  {
    title: '2. Description of Services',
    prose: 'Steel Singer Info Services ("SSIS") provides the following services through this platform:',
    bullets: [
      'Steel market intelligence reports and price trend data (available to subscribers)',
      'A buy/sell platform for connecting steel buyers and sellers',
      'Consultation scheduling for steel procurement and trading advisory',
      'General information about steel products, grades, and market conditions',
      'Annual subscriptions'
    ],
    footnote:
      'All market intelligence and data provided are for informational and decision-support purposes only. They do not constitute professional financial, legal, or trading advice.',
  },
  {
    title: '3. Eligibility',
    prose:
      'Our services are intended for businesses and professionals operating within the steel and related industries. By using this Site, you confirm that you are at least 18 years of age and are accessing the platform in a legitimate business capacity.',
  },
  {
    title: '4. Subscriber Obligations',
    prose: 'As a subscriber or registered user of SSIS, you agree to:',
    bullets: [
      'Provide accurate and complete information when submitting forms or registrations',
      'Use SSIS market reports and data solely for your own business decision-making',
      'Not reproduce, redistribute, publish, or share SSIS proprietary reports without express written consent',
      'Not use the platform for unlawful, fraudulent, or harmful activities',
      'Notify SSIS promptly of any unauthorised use of your account or access credentials',
    ],
  },
  {
    title: '5. Intellectual Property',
    prose:
      'All content on this Site — including but not limited to market reports, price data, graphics, text, logos, and software — is the proprietary property of Steel Singer Info Services and is protected by applicable intellectual property laws.',
    footnote:
      'Unauthorised reproduction, distribution, or commercial use of any SSIS content is strictly prohibited and may result in legal action.',
  },
  {
    title: '6. Buy / Sell Platform',
    prose:
      'SSIS provides a platform to facilitate connections between buyers and sellers of steel products. SSIS acts solely as an intermediary and is not a party to any transaction executed between buyers and sellers.',
    bullets: [
      'SSIS does not guarantee the quality, quantity, or delivery of any products traded',
      'Users are responsible for conducting their own due diligence prior to any transaction',
      'SSIS is not liable for any loss or dispute arising from buy/sell activities conducted through the platform',
    ],
  },
  {
    title: '7. Disclaimer of Warranties',
    prose:
      'The Site and all its content are provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. SSIS does not warrant that:',
    bullets: [
      'The Site will be uninterrupted or error-free',
      'Market data or intelligence will be completely accurate or up-to-date at all times',
      'The results obtained from using the Site will meet your specific requirements',
    ],
  },
  {
    title: '8. Limitation of Liability',
    prose:
      'To the fullest extent permitted by applicable law, Steel Singer Info Services shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or reliance on, this Site or its content — including but not limited to business loss, data loss, or financial loss resulting from market decisions.',
  },
  {
    title: '9. Third-Party Links and Services',
    prose:
      'The Site may contain links to third-party websites or platforms, including WhatsApp, LinkedIn, and external communication tools. SSIS has no control over the content or practices of those sites and is not responsible for any harm or loss arising from your use of them.',
  },
  {
    title: '10. Modifications to Terms',
    prose:
      'SSIS reserves the right to revise these Terms of Service at any time without prior notice. Updated Terms will be posted on this page with a revised effective date. Continued use of the Site following any changes constitutes acceptance of the revised Terms.',
  },
  {
    title: '11. Governing Law',
    prose:
      'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu.',
  },
  {
    title: '12. Contact Us',
    prose: 'For questions or concerns regarding these Terms of Service, please contact:',
    contact: true,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-3xl py-20 md:py-28">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-400 transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
              <FileText size={22} className="text-orange-400" />
            </div>
            <div>
              <p className="text-orange-400 text-[11px] font-black uppercase tracking-[0.35em] mb-1">Legal</p>
              <h1 className="text-3xl md:text-4xl font-black text-white">Terms of Service</h1>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Last updated: May 2025</p>
          <div className="mt-6 h-px bg-gradient-to-r from-orange-500/30 via-orange-500/10 to-transparent" />
        </motion.div>

        {/* Intro */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-10 p-5 rounded-xl bg-orange-500/5 border border-orange-500/15">
          <p className="text-gray-400 text-sm leading-relaxed">
            Please read these Terms of Service carefully before using the Steel Singer Info Services website. These Terms govern your access to and use of our website, market intelligence platform, and related services.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.04 * i }}
              className="border-t border-white/[0.06] pt-8"
            >
              <h2 className="text-lg font-bold text-white mb-4">{sec.title}</h2>

              {sec.prose && <p className="text-gray-400 leading-relaxed mb-4">{sec.prose}</p>}

              {sec.bullets && (
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm pl-2 mb-4">
                  {sec.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}

              {sec.footnote && (
                <p className="text-gray-500 text-sm italic border-l-2 border-orange-500/30 pl-4">{sec.footnote}</p>
              )}

              {sec.contact && (
                <div className="mt-2 text-gray-400 text-sm space-y-1">
                  <p className="font-semibold text-white">Steel Singer Info Services</p>
                  <p>Email: <span className="text-orange-400">info@steelsinger.com</span></p>
                  <p>Phone: <span className="text-orange-400">+91 6384 111100</span></p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Steel Singer Info Services. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
