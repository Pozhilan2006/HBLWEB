import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OrganizedBy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="my-16 z-10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
          data-aos="fade-up"
        >
          <h3 className="text-neutral-400 text-center text-sm mb-8 tracking-widest uppercase font-tomorrow">
            ORGANIZED BY
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-y-6 sm:gap-x-4 md:gap-x-8">
            {/* Left Logo - Rathinam */}
            <div className="cyberpunk-card flex justify-center items-center w-full sm:w-1/2 max-w-md aspect-[4/2] p-4">
              <img 
                src="/assets/images/rathinam-header.png" 
                alt="Rathinam College of Arts & Science" 
                className="w-auto max-h-full object-contain transition-all duration-300 hover:brightness-125"
              />
            </div>
            
            {/* Right Logo - Tech Hub */}
            <div className="cyberpunk-card flex justify-center items-center w-full sm:w-1/2 max-w-md aspect-[4/2] p-4">
              <img 
                src="/assets/images/techhub-logo.png" 
                alt="Tech Hub Logo" 
                className="w-auto max-h-full object-contain transition-all duration-300 hover:brightness-125"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizedBy;