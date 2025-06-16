import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    let timeout: number;

    if (isHovered) {
      timeout = setTimeout(() => setIsHovered(false), 4000);
    }

    return () => clearTimeout(timeout);
  }, [isHovered]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#internships', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity:
          isVisible || isHovered || window.location.hash === '#home' ? 1 : 0,
        y:
          isVisible || isHovered || window.location.hash === '#home' ? 0 : -20,
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50"
      onMouseEnter={() => setIsHovered(true)}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-center items-center space-x-8 text-lg">
        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        </motion.button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 py-4 bg-black/95 backdrop-blur-md rounded-lg border border-gray-800"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white transition-colors duration-200 relative group font-medium"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;