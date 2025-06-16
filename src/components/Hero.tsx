import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titles = [
    "Web Developer",
    "React Enthusiast", 
    "Library Technologist",
    "Creative Designer",
    "Problem Solver",
    "UI/UX Explorer",
    "Digital Content Editor",
    "AI Prompt Engineer",
    "Full-Stack Learner",
    "Multi-Instrumentalist"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTitleIndex, titles]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shubham Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating elements around profile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-4"
            >
              Hi, I am
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'Sora', fontWeight: 600 }}
            >
              Shubham Yadav
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="h-16 md:h-20 flex items-center justify-center mb-12"
            >
              <span className="text-xl md:text-2xl lg:text-3xl text-gray-300">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="/SHUBHAM-RESUME.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;