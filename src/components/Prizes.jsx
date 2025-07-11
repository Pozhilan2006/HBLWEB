import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';
import PrizeBadge from './PrizeBadge';

const Prizes = () => {
  const prizes = [
    {
      place: '1st Prize',
      amount: '₹30,000',
      description: 'worth gift voucher',
      color: 'from-yellow-400 to-yellow-600',
      rank: 1
    },
    {
      place: '2nd Prize',
      amount: '₹20,000',
      description: 'worth gift voucher',
      color: 'from-gray-300 to-gray-500',
      rank: 2
    },
    {
      place: '3rd Prize',
      amount: '₹10,000',
      description: 'worth gift voucher',
      color: 'from-amber-600 to-amber-800',
      rank: 3
    },
  ];

  return (
    <section id="prizes" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Prize Pool ₹60,000
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="cyberpunk-card text-center"
            >
              <div className="mb-4">
                <PrizeBadge rank={prize.rank} />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                <span className={`bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                  {prize.place}
                </span>
              </h3>
              <div className="text-3xl font-bold text-white mb-2">
                {prize.amount}
              </div>
              <p className="text-gray-400">{prize.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cyberpunk-card text-center"
          >
            <SparklesIcon className="h-12 w-12 mx-auto text-neon-green mb-4" />
            <h3 className="text-2xl font-bold text-neon-green mb-2">
              Perks
            </h3>
            <p className="text-gray-300">
              Best startup model gets seed funding from Rathinam Group of Institutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-300"
          >
            E-certificates for all participants
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prizes; 