"use client";

import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Templates', href: '#templates' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'HIPAA Compliance', href: '/hipaa' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@doctorsorderai.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="w-full bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Column */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/ChatGPT Image Jun 12, 2025, 07_39_20 PM.png" 
                  alt="Doctors Order Logo" 
                  width={32} 
                  height={32} 
                  className="object-cover" 
                />
              </div>
              <span className="text-xl font-semibold">Doctors Order AI</span>
            </div>

            <p className="text-[#a8a29e] leading-relaxed mb-6 max-w-sm">
              AI-powered SOAP note generation for physical therapists. 
              Professional documentation in under 2 minutes with zero PHI storage.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">Stay updated</h4>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#a8a29e] focus:outline-none focus:border-[#007AFF] transition-colors"
                />
                <motion.button
                  className="px-6 py-2.5 bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-[#a8a29e] hover:text-white transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-[#a8a29e] hover:text-white transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-[#a8a29e] hover:text-white transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Copyright */}
          <div className="text-[#a8a29e] text-sm">
            © {new Date().getFullYear()} Doctors Order AI. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-[#a8a29e] hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <IconComponent size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-[#a8a29e] text-sm">
            <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>HIPAA Compliant</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}