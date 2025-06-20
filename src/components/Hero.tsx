import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titles = [
    "Web Developer",
    "Vibe Coder", 
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
    <section id="home" className="h-16 min-h-screen flex items-center justify-center px-6 pt-20">
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
            className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
              <img
                src="/photo1.png"
                alt="Shubham Yadav"
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: 'center 55%',
                  transform: 'scale(1.2)'
                }}
              />
            </div>
            {/* Floating elements around profile */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80 will-change-transform"
              style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.1, 1],
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80 will-change-transform"
              style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
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
              className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'Sora', fontWeight: 700 }}
            >
              Shubham Yadav
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="h-16 md:h-20 flex items-center justify-center mb-12"
            >
              <span className="text-xl md:text-2xl lg:text-3xl text-gray-300 inline-flex items-center">
                {displayedText}
                <motion.span
                  className="inline-block w-1 h-8 bg-blue-400 ml-1"
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "loop",
                    ease: "ease-in-out",
                    times: [0, 0.1, 0.9, 1]
                  }}
                />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="/SHUBHAM-RESUME.pdf" download="SHUBHAM-RESUME.pdf"
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