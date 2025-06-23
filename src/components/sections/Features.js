"use client";

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Target, 
  Smartphone, 
  Brain, 
  FileText 
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "2-Minute Documentation",
      description: "Transform patient sessions into professional SOAP notes in under 2 minutes",
      highlight: true
    },
    {
      icon: Shield,
      title: "Zero PHI Storage",
      description: "Complete privacy protection with no patient data stored anywhere"
    },
    {
      icon: Target,
      title: "Professional Quality",
      description: "AI-generated notes that meet clinical documentation standards"
    },
    {
      icon: Smartphone,
      title: "Works Everywhere",
      description: "Compatible with any EMR system or documentation workflow"
    },
    {
      icon: Brain,
      title: "PT-Specialized AI",
      description: "Trained specifically on physical therapy terminology and protocols"
    },
    {
      icon: FileText,
      title: "Smart Templates",
      description: "Automatically selects the right template based on session type"
    }
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

  const cardHoverVariants = {
    hover: {
      y: -4,
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p 
            className="text-[#007AFF] font-medium text-sm md:text-base mb-4 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            The complete solution
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-[#1f1f1f] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            AI Documentation
            <br />
            <span className="font-medium">(and a whole lot more)</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Doctors Order AI is designed for modern physical therapy practices. 
            You'll be documenting faster with a solution built specifically for PTs.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                className={`
                  relative rounded-2xl p-8 border transition-all duration-200
                  ${feature.highlight 
                    ? 'bg-gradient-to-br from-[#007AFF] to-[#4A9EFF] text-white border-transparent shadow-[0_8px_32px_rgba(0,122,255,0.25)]' 
                    : 'bg-white border-[#e9e9e7] hover:border-[#007AFF]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                  }
                `}
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-6
                  ${feature.highlight 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-[#007AFF]/10'
                  }
                `}>
                  <IconComponent 
                    size={24} 
                    className={feature.highlight ? 'text-white' : 'text-[#007AFF]'} 
                  />
                </div>

                {/* Content */}
                <h3 className={`
                  text-xl font-semibold mb-3 leading-tight
                  ${feature.highlight ? 'text-white' : 'text-[#1f1f1f]'}
                `}>
                  {feature.title}
                </h3>

                <p className={`
                  leading-relaxed
                  ${feature.highlight ? 'text-white/90' : 'text-[#64748b]'}
                `}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-white font-semibold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,122,255,0.25)] hover:shadow-[0_8px_25px_rgba(0,122,255,0.35)] transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Try All Features Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}