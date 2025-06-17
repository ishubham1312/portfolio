import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Music, Film, Palette, Code } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      title: "Photography & Digital Content Editing",
      icon: <Camera size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Music Performance & Composition",
      icon: <Music size={24} />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Watching & Analyzing Films",
      icon: <Film size={24} />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "UI/UX Design Exploration",
      icon: <Palette size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Creative Coding & AI Tools",
      icon: <Code size={24} />,
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'Sora', fontWeight: 800 }}
          >
            Interests
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-800 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${interest.color} rounded-lg flex items-center justify-center mb-4`}>
                {interest.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{interest.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;