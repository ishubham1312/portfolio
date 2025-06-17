import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Leadership: React.FC = () => {
  const activities = [
    {
      role: "Coordinator",
      organization: "Facet Literacy Club",
      department: "Department of Library & Information Science, B.H.U.",
      description: ""
    },
    {
      role: "Organizer",
      organization: "Libfest25",
      department: "Department of Library & Information Science, B.H.U.",
      description: "Organized Libfest25 in April 2025 at Department of Library & Information Science, B.H.U."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Leadership & Co-Curricular Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {activity.role}
                  </h3>
                  <p className="text-purple-300 font-medium mb-2">
                    {activity.organization}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {activity.department}
                  </p>
                  {activity.description && (
                    <p className="text-gray-300">
                      {activity.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
