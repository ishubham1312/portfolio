import React from 'react';
import { motion } from 'framer-motion';
import { Calendar} from 'lucide-react';
import pristine from '../../public/1.png';
import clarity from '../../public/2.png';
import bee from '../../public/bee.png';

const Internships: React.FC = () => {
  const experiences = [
    {
      company: "Pristine Classes (YouTube Channel)",
      role: "Graphic Designer & Video Editor",
      duration: "Currently Working",
      description: "Creating engaging visual content, thumbnails, and promotional materials for educational YouTube channel",
      status: "current"
    },
     {
      company: "Bee Food Pvt. Ltd.",
      role: "Freelancer Graphic Designer",
      duration: "2 Month", 
      description: "Creating engaging visual content, and promotional materials for social media and marketing campaigns for the Startup",
      status: "completed",
     
    }, 
    {
      company: "Clarity by WeHeal",
      role: "HR Executive Intern",
      duration: "1 Month", 
      description: "Recruitment assistance, communication support",
      status: "completed"
    },
    {
      company: "Clarity by WeHeal",
      role: "Marketing Research Intern",
      duration: "1 Month",
      description: "Market surveys, user data analysis, reports",
      status: "completed"
    }
   
  ];

  return (
    <section id="internships" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-poppins">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl border border-gray-800 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    {experience.company === 'Pristine Classes (YouTube Channel)' && (
                      <img src={clarity} alt="Pristine Classes" className="w-full h-full object-cover" />
                    )}
                    {experience.company === 'Bee Food Pvt. Ltd.' && (
                      <img src={bee} alt="Bee Food Pvt. Ltd." className="w-full h-full object-cover" />
                    )}
                    {experience.company === 'Clarity by WeHeal' && (
                      <img src={pristine} alt="Clarity by WeHeal" className="w-full h-full object-cover" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {experience.role}
                    </h3>
                    {experience.status === 'current' && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-purple-300 text-lg mb-2">{experience.company}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-400">{experience.duration}</span>
                  </div>
                  <p className="text-gray-300">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;