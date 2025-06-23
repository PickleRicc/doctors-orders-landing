"use client";

import { motion } from 'framer-motion';
import { Check, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for trying out our AI documentation",
      features: [
        "5 SOAP notes per month",
        "Basic templates",
        "Voice recording",
        "PDF export",
        "Email support"
      ],
      cta: "Start Free",
      popular: false,
      icon: Zap
    },
    {
      name: "Professional",
      price: 65,
      description: "Everything you need for professional PT practice",
      features: [
        "Unlimited SOAP notes",
        "All premium templates",
        "Advanced AI processing",
        "Multiple export formats",
        "Priority support",
        "Custom templates",
        "Usage analytics",
        "EMR integrations"
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: Crown
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const popularBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.8, type: "spring", stiffness: 200 }
    }
  };

  return (
    <section className="w-full py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
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
            Simple, transparent pricing
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-[#1f1f1f] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Choose your plan
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start free and upgrade when you're ready. No hidden fees, cancel anytime.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.name}
                className={`
                  relative rounded-3xl p-8 border transition-all duration-300
                  ${plan.popular 
                    ? 'bg-white border-[#007AFF] shadow-[0_8px_32px_rgba(0,122,255,0.15)] scale-105' 
                    : 'bg-white border-[#e9e9e7] hover:border-[#007AFF]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                  }
                `}
                variants={cardVariants}
                whileHover={!plan.popular ? { 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" }
                } : {}}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    variants={popularBadgeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                    ${plan.popular 
                      ? 'bg-gradient-to-br from-[#007AFF] to-[#4A9EFF]' 
                      : 'bg-[#007AFF]/10'
                    }
                  `}>
                    <IconComponent 
                      size={28} 
                      className={plan.popular ? 'text-white' : 'text-[#007AFF]'} 
                    />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[#1f1f1f] mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-[#64748b] mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    {plan.price === 0 ? (
                      <span className="text-5xl font-bold text-[#1f1f1f]">Free</span>
                    ) : (
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold text-[#1f1f1f]">${plan.price}</span>
                        <span className="text-lg font-medium text-[#64748b]">/month</span>
                      </div>
                    )}
                  </div>
                  
                  {plan.price > 0 && (
                    <p className="text-sm text-[#64748b]">
                      7-day free trial included
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.6 + (featureIndex * 0.1) 
                        }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-[#454440] leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`
                    w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300
                    ${plan.popular
                      ? 'bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-white shadow-[0_4px_20px_rgba(0,122,255,0.25)] hover:shadow-[0_8px_25px_rgba(0,122,255,0.35)]'
                      : 'bg-[#f9fafb] border-2 border-[#e9e9e7] text-[#454440] hover:border-[#007AFF] hover:text-[#007AFF] hover:bg-[#007AFF]/5'
                    }
                  `}
                  whileHover={{ 
                    scale: 1.02,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>

                {/* Additional info for paid plan */}
                {plan.popular && (
                  <motion.p 
                    className="text-center text-sm text-[#64748b] mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 }}
                  >
                    Cancel anytime • No setup fees
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-[#64748b] mb-4">
            Need a custom solution for your practice?
          </p>
          <motion.button
            className="text-[#007AFF] font-medium hover:text-[#4A9EFF] transition-colors underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact our sales team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}