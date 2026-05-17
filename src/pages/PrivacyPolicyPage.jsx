import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Contact Information',
        items: ['Full Name', 'Email Address', 'Contact Number'],
      },
      {
        subtitle: 'Business Information',
        items: [
          'Company Name',
          'Product category / steel requirements',
          'Quantity requirements',
          'Pricing expectations',
          'Delivery locations',
          'Additional product specifications',
        ],
      },
      {
        subtitle: 'Consultation Information',
        intro: 'When booking a consultation, we may collect:',
        items: ['Consultation topic', 'Business objectives', 'Project requirements'],
      },
      {
        subtitle: 'General Messages',
        intro: 'When contacting us, we may collect:',
        items: ['Message content', 'Inquiry details'],
      },
      {
        subtitle: 'Automatically Collected Information',
        intro: 'When you visit our website, we may automatically collect:',
        items: [
          'IP address',
          'Browser type',
          'Device information',
          'Pages visited',
          'Website usage data',
          'Cookies and analytics information',
        ],
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    prose: 'We use the information collected to:',
    bullets: [
      'Respond to inquiries and quote requests',
      'Process buy/sell steel requests',
      'Schedule consultations',
      'Communicate regarding business opportunities',
      'Provide requested information about products and services',
      'Improve website performance and user experience',
      'Maintain website security',
      'Analyse website traffic and engagement',
      'Follow up on submitted requests',
    ],
    footnote: 'We do not sell, rent, or trade your personal information to third parties.',
  },
  {
    title: '3. Cookies and Tracking Technologies',
    prose:
      'Our website may use cookies and analytics tools to improve user experience and understand website performance. These may include:',
    bullets: ['Essential cookies', 'Performance cookies', 'Analytics tracking tools'],
    footnote:
      'You may disable cookies through your browser settings; however, some parts of the website may not function properly as a result.',
  },
  {
    title: '4. Information Sharing',
    prose:
      'We may share your information only where necessary with trusted service providers, including:',
    bullets: [
      'Website hosting providers',
      'Email communication platforms',
      'CRM / inquiry management systems',
      'Analytics providers',
    ],
    footnote:
      'Such parties are contractually required to handle information securely and solely for legitimate business purposes.',
  },
  {
    title: '5. Data Security',
    prose:
      'We implement reasonable technical and organisational safeguards to protect your personal information from unauthorised access, misuse, disclosure, or loss. However, no online transmission or storage method can be guaranteed as completely secure, and we cannot warrant absolute security.',
  },
  {
    title: '6. Third-Party Services',
    prose:
      'Our website may contain links to third-party platforms or services, including WhatsApp, LinkedIn, and external communication tools. We are not responsible for the privacy practices of those third-party websites and recommend that you review their respective privacy policies.',
  },
  {
    title: '7. Data Retention',
    prose: 'We retain submitted information only as long as necessary for:',
    bullets: [
      'Responding to inquiries',
      'Maintaining business communication',
      'Operational records',
      'Legal or compliance purposes',
    ],
  },
  {
    title: '8. Your Rights',
    prose: 'Subject to applicable laws, you may request to:',
    bullets: [
      'Access your personal information',
      'Correct inaccurate information',
      'Request deletion of your data',
      'Withdraw communication consent',
    ],
    footnote: 'To exercise any of these rights, please contact us using the details provided below.',
  },
  {
    title: '9. Consent',
    prose:
      'By submitting any form on this website, you consent to the collection and use of your information as described in this Privacy Policy.',
  },
  {
    title: '10. Contact Us',
    prose: 'For privacy-related questions or requests, please contact:',
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
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
              <Lock size={22} className="text-orange-400" />
            </div>
            <div>
              <p className="text-orange-400 text-[11px] font-black uppercase tracking-[0.35em] mb-1">Legal</p>
              <h1 className="text-3xl md:text-4xl font-black text-white">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Last updated: May 2025</p>
          <div className="mt-6 h-px bg-gradient-to-r from-orange-500/30 via-orange-500/10 to-transparent" />
        </motion.div>

        {/* Intro */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-10 space-y-3 text-gray-400 leading-relaxed">
          <p>
            <strong className="text-white">Steel Singer Info Services</strong> ("we," "our," "us") values your privacy and is committed to protecting the personal information you provide through our website.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and submit inquiries through our forms.
          </p>
          <p>By using this website, you agree to the practices described in this Privacy Policy.</p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="border-t border-white/[0.06] pt-8"
            >
              <h2 className="text-lg font-bold text-white mb-4">{sec.title}</h2>

              {sec.prose && <p className="text-gray-400 leading-relaxed mb-4">{sec.prose}</p>}

              {sec.content &&
                sec.content.map((block, j) => (
                  <div key={j} className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-300 mb-2">{block.subtitle}</h3>
                    {block.intro && <p className="text-gray-500 text-sm mb-2">{block.intro}</p>}
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm pl-2">
                      {block.items.map((item, k) => <li key={k}>{item}</li>)}
                    </ul>
                  </div>
                ))}

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
                  <p>Email: <span className="text-orange-400">steelsingertrade@gmail.com</span></p>
                  <p>Phone: <span className="text-orange-400">+91 9840 669339</span></p>
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
