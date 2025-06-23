"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
  ];

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      color: "#007AFF",
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      y: -1,
      boxShadow: "0 8px 25px rgba(0, 122, 255, 0.35)",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const secondaryButtonVariants = {
    hover: {
      scale: 1.01,
      backgroundColor: "#f1f1ef",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: {
      scale: 0.99,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-[20px] border-b border-[#e9e9e7] shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            variants={logoVariants}
            whileHover="hover"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
              <Image 
                src="/u9354481378_Modern_logo_design_compact_robot_head_in_circular_98ac6e0b-5d09-4f6a-980b-cfc4d4af2c9c_3.png" 
                alt="Doctors Order Logo" 
                width={40} 
                height={40} 
                className="object-cover" 
              />
            </div>
            <span className="text-xl md:text-2xl font-semibold text-[#1f1f1f]">
              Doctors Orders
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[#454440] font-medium relative group cursor-pointer"
                variants={navItemVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
                {/* Hover underline effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#007AFF] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="text-[#454440] font-medium hover:text-[#007AFF] transition-colors"
              variants={secondaryButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => window.location.href = "https://doctors-orders-v1.vercel.app/"}
            >
              Sign In
            </motion.button>
            
            <motion.button
              className="bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-white font-semibold py-2 px-6 rounded-lg shadow-[0_4px_20px_rgba(0,122,255,0.25)]"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => window.location.href = "https://doctors-orders-v1.vercel.app/"}
            >
              Start Free Trial
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu relative w-8 h-8 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-[#454440] rounded-full"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#454440] rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#454440] rounded-full"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ overflow: 'hidden' }}
            >
              <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-[12px] border border-[#e9e9e7] rounded-xl mt-2 shadow-lg">
                {/* Mobile Navigation Items */}
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-[#454440] font-medium hover:text-[#007AFF] hover:bg-[#007AFF]/5 rounded-lg transition-colors"
                    variants={mobileItemVariants}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Mobile CTA Buttons */}
                <motion.div 
                  className="pt-4 space-y-3 border-t border-[#e9e9e7]"
                  variants={mobileItemVariants}
                >
                  <motion.button
                    className="w-full text-left px-4 py-3 text-[#454440] font-medium hover:text-[#007AFF] hover:bg-[#007AFF]/5 rounded-lg transition-colors"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = "https://doctors-orders-v1.vercel.app/";
                    }}
                  >
                    Sign In
                  </motion.button>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-white font-semibold py-3 px-4 rounded-lg shadow-[0_4px_20px_rgba(0,122,255,0.25)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = "https://doctors-orders-v1.vercel.app/";
                    }}
                  >
                    Start Free Trial
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}