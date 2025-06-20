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

  const scrollToSection = (href: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    const element = document.querySelector(href);
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Force focus for accessibility
        (element as HTMLElement).focus({ preventScroll: true });
      }
    }, 100);
  };

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      const isClickInside = target.closest('nav') || target.closest('.mobile-menu');
      
      if (!isClickInside) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Use capture phase for better mobile support
    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    
    // Use passive scroll for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity:
          isVisible || isHovered || window.location.hash === '#home' ? 1 : 0,
        y:
          isVisible || isHovered || window.location.hash === '#home' ? 0 : -20,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md py-2 md:py-3"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div className="relative">
        <nav className="container mx-auto px-4 sm:px-6 py-1 md:py-2 flex justify-between md:justify-center items-center text-base md:text-lg relative">
          {/* Logo or Brand - Add your logo here if needed */}
          <div className="w-6 h-6 md:w-8 md:h-8"></div>
          {/* Mobile Menu Button - Only on mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-1 -ml-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </motion.button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group font-medium text-base lg:text-lg"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -10,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
            display: isMobileMenuOpen ? 'block' : 'none'
          }}
          transition={{ 
            duration: 0.2,
            ease: 'easeInOut'
          }}
          className="mobile-menu fixed top-14 left-0 right-0 overflow-y-auto bg-black/95 backdrop-blur-sm shadow-lg z-50 md:hidden"
          style={{
            borderBottomLeftRadius: '0.5rem',
            borderBottomRightRadius: '0.5rem',
            WebkitBackdropFilter: 'blur(12px)',
            WebkitOverflowScrolling: 'touch',
            maxHeight: 'calc(100vh - 3.5rem)'
          }}
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left px-5 py-2.5 text-gray-300 hover:text-white hover:bg-gray-800/40 transition-colors duration-200 font-medium rounded-md active:bg-gray-800/60 text-base leading-snug"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

    </motion.header>
  );
};

export default Header;