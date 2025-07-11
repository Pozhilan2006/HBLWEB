import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* College Header Image */}
          <div className="mb-12">
            <img 
              src="/assets/images/rathinam-header.png" 
              alt="Rathinam College of Arts & Science" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold space-y-4">
            <div className="hackathon-title">
              {'<HACK BEYOND LIMIT$>'}
            </div>
            <div className="text-4xl md:text-5xl text-white font-tomorrow">
              Online Odyssey
            </div>
          </h1>

          <h2 className="text-2xl md:text-3xl text-neon-green font-semibold">
            48 Hours. Limitless Innovation.
          </h2>

          <div className="text-lg md:text-xl text-gray-300 font-tomorrow">
            Organized by
            <br />
            <span className="text-white font-semibold">
              <div className="flex justify-center items-center mt-2">
                <img 
                  src="/assets/images/techhub-logo.png" 
                  alt="Tech Hub Logo" 
                  className="w-32 h-auto brightness-125"
                />
              </div>
            </span>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-white text-center italic mt-4 font-tomorrow">
              "Every keystroke writes the future"
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-space-black to-transparent" />
    </section>
  );
};

export default Hero; 