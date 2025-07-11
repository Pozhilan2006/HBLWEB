import { motion } from 'framer-motion';

const timelineData = [
  {
    phase: "Phase I",
    title: "Registration",
    date: "July 11, 2025",
  },
  {
    phase: "Phase II",
    title: "Registration Ends",
    date: "August 5, 2025",
  },
  {
    phase: "Phase III",
    title: "48-Hour Hack Sprint",
    date: "August 8-10, 2025",
  },
  {
    phase: "Phase IV",
    title: "Project Submission",
    date: "August 10, 2025",
  },
  {
    phase: "Phase V",
    title: "Judging & Awards",
    date: "August 25, 2025",
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Mission Timeline</h2>
        
        {/* Tech Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 italic text-xl font-tomorrow">
            "Code is the currency of the future"
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neon-green/20" />
          
          {/* Timeline Items */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-end' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`relative w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}
                >
                  <div className="cyberpunk-card">
                    <span className="text-neon-green font-bold mb-4 block">
                      {item.phase}
                    </span>
                    <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-4 h-4 bg-space-black border-2 border-neon-green rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 