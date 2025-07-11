import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full space-y-6 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold space-y-4">
              <motion.div 
                className="hackathon-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {'<HACK BEYOND LIMIT$>'}
              </motion.div>
              <motion.div 
                className="text-3xl md:text-4xl lg:text-5xl text-white font-tomorrow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Online Odyssey
              </motion.div>
            </h1>

            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-neon-green font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              48 Hours. Limitless Innovation.
            </motion.h2>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-white italic mt-4 font-tomorrow text-center">
                "Go Beyond Hack Beyond"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 