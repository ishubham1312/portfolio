import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Motivated and detail-oriented postgraduate student in Library and Information Science at BHU, 
              with a strong foundation in digital technologies, web development, and information systems. 
              I am passionate about building efficient digital experiences, transforming libraries, and 
              integrating creative tech solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;