import { motion } from 'framer-motion';
import { CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const domains = [
  {
    title: "AI & Machine Learning",
    description: "Push the boundaries of artificial intelligence and machine learning to create innovative solutions.",
    icon: CpuChipIcon,
    color: "neon-green"
  },
  {
    title: "Web3 & Blockchain",
    description: "Explore the decentralized future with blockchain technology and Web3 applications.",
    icon: GlobeAltIcon,
    color: "neon-green"
  }
];

const Domains = () => {
  return (
    <section id="domains" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Innovation Domains</h2>

        {/* Tech Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 italic text-xl font-tomorrow">
            "Innovation is the outcome of a habit, not a random act"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="cyberpunk-card group relative overflow-hidden"
            >
              {/* Background Tech Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#39FF14" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100" height="100" fill={`url(#grid-${index})`} />
                </svg>
              </div>

              <div className="relative z-10">
                <domain.icon 
                  className="w-12 h-12 mb-4 text-neon-green"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold mb-4 text-neon-green">
                  {domain.title}
                </h3>
                <p className="text-gray-300">
                  {domain.description}
                </p>
              </div>

              {/* Glowing Corner */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <svg viewBox="0 0 64 64" className="w-full h-full text-neon-green opacity-30">
                  <path d="M64 0L42.67 21.33V0H64z" fill="currentColor"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains; 