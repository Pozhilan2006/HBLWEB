import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Arun Kumar K',
      role: 'Community Lead',
      image: '/assets/images/team/Arun Kumar.jpg',
    },
    {
      name: 'Pozhilan A',
      role: 'Technical Lead',
      image: '/assets/images/team/Pozhilan.jpg',
    },
    {
      name: 'Aasil Ahamed S',
      role: 'Event Manager',
      image: '/assets/images/team/Aasil Ahammed.jpg',
    },
    {
      name: 'Mohamed Naseem M',
      role: 'Technical Director',
      image: '/assets/images/team/Naseem.jpg',
    },
    {
      name: 'Mayur Karthick P',
      role: 'Mentorship Manager',
      image: '/assets/images/team/Mayur.jpg',
    },
    {
      name: 'Liejo S',
      role: 'Brand Manager',
      image: '/assets/images/team/Liejo.jpg',
    },
    {
      name: 'Mohammed Irfan S',
      role: 'Event Coordinator',
      image: '/assets/images/team/Irfan.jpg',
    },
    {
      name: 'Praveen R',
      role: 'Event Director',
      image: '/assets/images/team/Praveen.jpg',
    },
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Command Crew</h2>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 italic text-xl font-tomorrow">
            "The future is debugged here"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyberpunk-card group"
            >
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-lg overflow-hidden ring-1 ring-electric-blue/20 transition-all duration-300 group-hover:ring-2 group-hover:ring-electric-blue group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-semibold text-electric-blue text-center transition-colors duration-300 group-hover:text-neon-green">
                {member.name}
              </h3>
              <p className="text-gray-400 text-center mt-2">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 