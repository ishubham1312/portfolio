import React from 'react';
import { motion } from 'framer-motion';
import libfest25 from '../../public/libfest25.png';
import facet from '../../public/facet.png';

const Leadership: React.FC = () => {
  const activities = [
    {
      role: "Coordinator",
      organization: "Facet Literacy Club",
      department: "Department of Library & Information Science, B.H.U.",
      description: "Literary Club of Dept. of Library & Information Science, Banaras Hindu University",
      logo: "/facet.png"
    },
    {
      role: "Organizer",
      organization: "Libfest25",
      department: "Department of Library & Information Science, B.H.U.",
      description: "Organized Libfest25 in April 2025 at Department of Library & Information Science, B.H.U.",
      logo: "/libfest25.png"
    }
  ];

  return (
    <section id="leadership" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Sora', fontWeight: 900 }}
          >
            Leadership & Co-Curricular Activities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-5">
                  <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden">
                    {activity.organization === 'Facet Literacy Club' && (
                      <img 
                        src={facet} 
                        alt="Facet Literacy Club" 
                        className="w-full h-full object-contain"
                      />
                    )}
                    {activity.organization === 'Libfest25' && (
                      <img 
                        src={libfest25} 
                        alt="Libfest25" 
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full mb-2">
                      {activity.role}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {activity.organization}
                    </h3>
                    <p className="text-purple-200 font-medium text-sm mb-2">
                      {activity.department}
                    </p>
                  </div>
                </div>
                {activity.description && (
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
