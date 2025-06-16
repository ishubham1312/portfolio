import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TestGenius",
      description: "AI-powered test generator (React + Gemini API)",
      github: "#",
      live: "#"
    },
    {
      title: "BingeBoard", 
      description: "Movie/series tracker (React + Next.js)",
      github: "#",
      live: "#"
    },
    {
      title: "Sky of Thoughts",
      description: "Thought-sharing full-stack app",
      github: "#",
      live: "#"
    },
    {
      title: "Libfest Website",
      description: "Event website (HTML, CSS, JS)",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-poppins">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-800 hover:border-purple-400/30 transition-all duration-300 group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 border border-gray-700"
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <ExternalLink size={18} />
                  View Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;