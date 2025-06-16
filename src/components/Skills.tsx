import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Database, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Version Control & Deployment",
      icon: <GitBranch size={24} />,
      skills: ["Git", "GitHub", "Netlify", "Vercel", "Render"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Library Technology",
      icon: <Database size={24} />,
      skills: ["Koha", "DSpace", "CDS/ISIS", "MARC21"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Design Tools",
      icon: <Palette size={24} />,
      skills: ["Figma", "Canva", "Adobe Illustrator"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Other Skills",
      icon: <Zap size={24} />,
      skills: ["Responsive Design", "Troubleshooting", "UI/UX", "AI Prompts", "Vibe Coder"],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-800 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-gray-700/50 transition-colors duration-200 border border-gray-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;