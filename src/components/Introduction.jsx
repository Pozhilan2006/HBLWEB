import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-neon-green mb-10 font-tomorrow">
            Inside Odyssey
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg md:text-xl text-gray-300"
          >
            <p>
            Hack Beyond Limits: Online Odyssey isn’t just an event — it’s a 48-hour tech uprising. A space where code turns into action, ideas break free, and passion becomes product.
            </p>
            
            <p>
            Curated by Tech Hub, this is where rule-breakers, builders, and boundary-pushers unite to innovate without limits, sleep less, and dream louder. Whether you're crafting the future of AI, reshaping the Web3 world, or building something too bold to name this is your zone.
            </p>
            
            <div className="mt-8">
              <p>
              No templates. No hand-holding. 
              Just raw energy, real people, and relentless creation.
              </p>
              <p className="font-bold text-neon-green mt-2">
                You bring the spark. We bring the storm.
              </p>
              <p className="text-white font-bold mt-2">
                Let's build something unforgettable.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction; 