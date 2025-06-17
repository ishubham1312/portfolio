import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, BookMarked,} from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Library and Information Science",
      institution: "Banaras Hindu University",
      period: "2023–2025",
      type: "Masters"
    },
    {
      degree: "Bachelor of Commerce (Hons.) in Finance",
      institution: "Banaras Hindu University",
      period: "2019–2022",
      type: "Bachelors"
    },
    {
      degree: "Under Graduate Diploma in Computer Applications",
      institution: "Banaras Hindu University",
      period: "2019–2022",
      type: "Diploma"
    },
    {
      degree: "Intermediate",
      institution: "Swami Harsewanand Public School",
      period: "2019",
      type: "Secondary"
    },
    {
      degree: "High School",
      institution: "Swami Harsewanand Public School",
      period: "2017",
      type: "Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-7xl">
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
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-800 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 mb-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  item.type === 'Masters' ? 'bg-gradient-to-br from-purple-600 to-blue-500' :
                  item.type === 'Bachelors' ? 'bg-gradient-to-br from-blue-500 to-cyan-400' :
                  item.type === 'Diploma' ? 'bg-gradient-to-br from-amber-500 to-orange-500' :
                  'bg-gradient-to-br from-green-500 to-teal-400'
                }`}>
                  {item.type === 'Masters' && <GraduationCap size={28} className="text-white" />}
                  {item.type === 'Bachelors' && <School size={28} className="text-white" />}
                  {item.type === 'Diploma' && <BookOpen size={28} className="text-white" />}
                  {item.type === 'Secondary' && <BookMarked size={28} className="text-white" />}
                </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                    {item.degree}
                  </h3>
                  <p className="text-purple-300 text-base mb-2">{item.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{item.period}</p>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                    {item.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;