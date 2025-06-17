import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TestGenius",
      description: "AI-powered test generator (React + Gemini API)",
      github: "https://github.com/ishubham1312/testgenius.git",
      live: "https://test-genius-901303989177.us-west1.run.app/",
      image: "/testgenius.jpg"
    },
    {
      title: "BingeBoard", 
      description: "Movie/series tracker (React + Next.js)",
      github: "https://github.com/ishubham1312/bingeboard.git",
      live: "https://bingeboard.netlify.app/",
      image: "/bingeboard.jpg"
    },
    {
      title: "Sky of Thoughts",
      description: "Thought-sharing full-stack app",
      github: "https://github.com/ishubham1312/skyofthoughts.git",
      live: "https://skyofthoughts.netlify.app/",
      image: "/sot.jpg"
    },
    {
      title: "Libfest Website",
      description: "Event website (HTML, CSS, JS)",
      github: "https://github.com/ishubham1312/libfest25.git", 
      live: "https://ishubham1312.github.io/libfest25/",
      image: "/libfest.jpg"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'Sora', fontWeight: 800 }}
          >
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
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-purple-400/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative pt-[56.25%] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-gray-900"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-1">{project.description}</p>
              
              <div className="mt-auto pt-4">
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700/90 text-white rounded-lg transition-all duration-200 border border-gray-700/50 text-xs sm:text-sm font-medium shadow-sm"
                  >
                    <Github size={14} className="flex-shrink-0" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-500/90 hover:to-purple-600/90 text-white rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md hover:shadow-blue-500/20"
                  >
                    <ExternalLink size={14} className="flex-shrink-0" />
                    <span>View Live</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;