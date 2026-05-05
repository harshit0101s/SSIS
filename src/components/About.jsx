import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Introduction</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            About <span className="text-primary dark:text-accent">Steel Singer Info Services</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* CEO Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-90 h-90 md:w-90 md:h-90 rounded-2xl bg-muted/50 border-4 border-border overflow-hidden relative shadow-2xl flex items-center justify-center">
              {/* Fallback placeholder if image not uploaded yet */}
              <img src="/ceo.png" alt="Mr. Hemant Sharma, CEO" className="w-full h-full object-cover relative z-10" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground">Mr. Hemant Sharma</h4>
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm mt-1">CEO & Founder</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed text-justify"
          >
            <p className="font-semibold text-foreground text-xl mb-6">Dear Subscribers and Readers,</p>

            <p>
              Steel Singer info services is one of the largest integrated steel service provider in India and abroad. Steel Singer Info Services is led by Mr. Hemant Sharma having experience of more than 27 years in Steel Industries. He has done Master of Business Administration and specialisation in Sales and Marketing. He has worked almost in all the leading integrated steel mills in different locations of India.
            </p>

            <p>
              Steel Singer has always tried hard to provide up-to-date information and commentary on domestic and international steel market developments that are of interest to you and have wider market intelligence.
            </p>

            <p>
              As we battle the economic impact of the pandemic, we need your support even more, so that we can continue to offer you more quality content. Our subscription model has seen an encouraging response from many of you, who have subscribed to us.
            </p>

            <p>
              Your encouragement and constant feed back on how to improve our offering has only made us resolve and commitment to these ideals stronger. Even during difficult times arising out of COVID-19, we continued to keep up informed and updated with credible steel news and price authoritative views and incisive commentary on all steel pricing on pan India level.
            </p>

            <p className="font-semibold italic text-foreground mt-8 border-l-4 border-secondary pl-4">
              "We thank you for your support given to us and believe in free, fair and credible news of Steel Industry."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
