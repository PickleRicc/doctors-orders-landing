"use client";

import { motion } from 'framer-motion';
import { 
  Mic, 
  Brain, 
  FileText, 
  Download 
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: "Record Session",
      description: "Voice recording during or after patient treatment"
    },
    {
      icon: Brain,
      title: "AI Processing", 
      description: "Speech-to-text conversion and intelligent analysis"
    },
    {
      icon: FileText,
      title: "Generate SOAP",
      description: "Professional documentation created automatically"
    },
    {
      icon: Download,
      title: "Export & Use",
      description: "Download or copy to your EMR system"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stackVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-24 bg-[#1f1f1f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#007AFF]/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#4A9EFF]/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#007AFF]/3 rounded-full blur-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className="text-[#007AFF] font-medium text-sm md:text-base mb-4 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              The modern solution for
            </motion.p>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-transparent bg-clip-text font-medium">
                PT documentation
              </span>
              <br />
              & clinical workflow
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-[#a8a29e] mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Doctors Order AI transforms the way physical therapists document patient sessions. 
              Record naturally, get professional results in minutes, not hours.
            </motion.p>

            <motion.p 
              className="text-lg text-[#a8a29e] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Your patients benefit from more focused care. 
              <br />
              <span className="text-white font-medium">You benefit from streamlined documentation.</span>
            </motion.p>

            {/* Demo CTA */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center cursor-pointer group"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5-7-5z" />
                </svg>
              </motion.div>
              
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Watch: 2-Minute Documentation
                </h4>
                <p className="text-[#a8a29e] text-sm">
                  See how AI transforms your workflow
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Process Stack */}
          <motion.div
            className="relative"
            variants={stackVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <span className="text-[#64748b] text-sm font-medium tracking-wide uppercase">
                The AI Process
              </span>
            </div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isLast = index === steps.length - 1;
                
                return (
                  <motion.div
                    key={step.title}
                    className="relative"
                    variants={itemVariants}
                  >
                    {/* Connecting line */}
                    {!isLast && (
                      <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-[#007AFF]/30 to-[#4A9EFF]/30" />
                    )}
                    
                    {/* Step card */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 cursor-pointer group"
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 8px 32px rgba(0, 122, 255, 0.15)"
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                          ${index === 0 ? 'bg-gradient-to-br from-[#007AFF] to-[#4A9EFF]' : 'bg-white/10 group-hover:bg-white/15'}
                        `}>
                          <IconComponent 
                            size={20} 
                            className={index === 0 ? 'text-white' : 'text-[#007AFF]'} 
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[#64748b] text-xs font-medium">
                              STEP {index + 1}
                            </span>
                          </div>
                          
                          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#007AFF] transition-colors">
                            {step.title}
                          </h3>
                          
                          <p className="text-[#a8a29e] text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Step number */}
                        <div className="text-[#64748b] text-sm font-bold opacity-40">
                          0{index + 1}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom highlight */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-[#007AFF] text-sm font-medium">
                Average completion time: 2 minutes
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}