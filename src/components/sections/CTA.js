"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react';

export default function CTA() {
  const benefits = [
    { icon: Clock, text: "2-minute documentation" },
    { icon: Shield, text: "Zero PHI storage" },
    { icon: Zap, text: "Professional quality" }
  ];

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#007AFF] via-[#4A9EFF] to-[#007AFF] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        
        {/* Floating medical icons */}
        <motion.div
          className="absolute top-20 right-1/4 text-white/10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 00-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2z" clipRule="evenodd" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/4 text-white/10"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-white/80 font-medium text-sm md:text-base mb-4 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Join 1,000+ Physical Therapists
          </motion.p>

          <motion.h2 
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to Transform Your
            <br />
            <span className="font-medium">PT Documentation?</span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start documenting faster today. Professional SOAP notes in under 2 minutes 
            with complete privacy protection.
          </motion.p>
        </motion.div>

        {/* Quick Benefits */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-3 text-white/90"
                variants={benefitVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (index * 0.1) }}
              >
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <IconComponent size={16} className="text-white" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            className="bg-white text-[#007AFF] font-semibold px-8 py-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group"
            whileHover={{ 
              scale: 1.02,
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = "https://doctors-orders-v1.vercel.app/"}
          >
            <span className="flex items-center gap-2">
              Start Free Trial
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            className="bg-white/10 backdrop-blur-[16px] border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            whileHover={{ 
              scale: 1.02,
              y: -1
            }}
            whileTap={{ scale: 0.98 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#10b981] rounded-full" />
            <span>No credit card required</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#10b981] rounded-full" />
            <span>7-day free trial</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#10b981] rounded-full" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>

        {/* Final urgency message */}
        <motion.div
          className="mt-8 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-white/90 text-sm">
            <span className="font-semibold">Limited Time:</span> Get your first month free when you start your trial this week
          </p>
        </motion.div>
      </div>
    </section>
  );
}