"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Waveform Visualization Component
function WaveformVisualization({ 
  bars = 50, 
  height = 140, 
  isActive = true,
  className = "" 
}) {
  const [amplitudes, setAmplitudes] = useState([]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setAmplitudes(prev => 
        Array.from({ length: bars }, (_, i) => {
          // Create subtle, smooth audio-like patterns
          const baseAmplitude = Math.sin(Date.now() * 0.001 + i * 0.2) * 0.3 + 0.4;
          const smoothVariation = Math.sin(Date.now() * 0.0005 + i * 0.15) * 0.2;
          const gentleRandom = (Math.random() - 0.5) * 0.1;
          return Math.max(0.15, Math.min(0.85, baseAmplitude + smoothVariation + gentleRandom));
        })
      );
    }, 120); // Slower update for smoother motion

    return () => clearInterval(interval);
  }, [bars, isActive]);

  return (
    <div className={`flex items-end justify-center gap-[2px] ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-gradient-to-t from-[#007AFF] to-[#4A9EFF] rounded-full shadow-sm"
          style={{
            width: '3px',
            minHeight: '8px',
          }}
          animate={{
            height: isActive ? `${(amplitudes[i] || 0.2) * height}px` : '8px',
            opacity: isActive ? [0.7, 0.9, 0.8] : 0.4,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            opacity: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
          }}
        />
      ))}
    </div>
  );
}

// AI Status Indicator Component
function AIStatusIndicator() {
  const [status, setStatus] = useState('Listening');
  
  useEffect(() => {
    const statuses = ['Listening', 'Processing', 'Analyzing', 'Generating'];
    let index = 0;
    
    const interval = setInterval(() => {
      setStatus(statuses[index]);
      index = (index + 1) % statuses.length;
    }, 3000); // Slower transitions
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="flex items-center gap-2 text-sm text-[#007AFF] font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div 
        className="w-2 h-2 bg-[#007AFF] rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span>AI {status}...</span>
    </motion.div>
  );
}

// Floating Elements Component
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating medical icons - more subtle */}
      <motion.div
        className="absolute top-20 right-20 w-6 h-6 text-[#007AFF]/15"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 00-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2z" clipRule="evenodd" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-12 w-5 h-5 text-[#64748b]/10"
        animate={{ 
          y: [0, 10, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-8 w-4 h-4 text-[#64748b]/8"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [isWaveformActive, setIsWaveformActive] = useState(true);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white overflow-hidden">
      {/* Subtle floating background elements */}
      <FloatingElements />
      
      {/* Left: Headline, subheadline, CTAs */}
      <motion.div 
        className="flex-1 flex flex-col items-start justify-center max-w-2xl z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20">
            ✨ Zero PHI Storage • HIPAA Safe
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-light leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-[#1f1f1f]">Your notes,</span>
          <br />
          <span className="bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-transparent bg-clip-text font-medium">
            AI Powered.
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-[#454440] mb-10 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transform patient sessions into professional SOAP notes in{' '}
          <span className="font-semibold text-[#007AFF]">under 2 minutes</span>. 
          Built for physical therapists.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-[#007AFF] to-[#4A9EFF] text-white font-semibold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,122,255,0.25)] hover:shadow-[0_8px_25px_rgba(0,122,255,0.35)] transition-all duration-300 ease-out group relative overflow-hidden"
            whileHover={{ 
              scale: 1.02, 
              y: -1,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Free Trial
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.button>
          
          <motion.button 
            className="bg-[#f9fafb] border border-[#e9e9e7] text-[#454440] font-medium px-6 py-4 rounded-xl hover:bg-[#f1f1ef] hover:scale-[1.01] transition-all duration-200 ease-out shadow-sm"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex items-center gap-6 text-sm text-[#64748b]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#007AFF] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>5 sessions free</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right: AI Waveform Visualization */}
      <motion.div 
        className="flex-1 flex items-center justify-center mt-16 md:mt-0 relative z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className="relative">
          {/* Main waveform container */}
          <motion.div 
            className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-white/80 backdrop-blur-[12px] border border-[#e9e9e7] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-8 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 via-transparent to-[#f9fafb] rounded-3xl"></div>
            
            {/* AI Status Indicator */}
            <div className="absolute top-6 left-6">
              <AIStatusIndicator />
            </div>

            {/* Central microphone icon */}
            <motion.div 
              className="relative z-10 w-16 h-16 bg-white/90 backdrop-blur-[8px] border border-[#e9e9e7] rounded-full flex items-center justify-center mb-8 shadow-sm"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="w-7 h-7 text-[#007AFF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </motion.div>

            {/* Waveform Visualization */}
            <div className="relative z-10 mb-6">
              <WaveformVisualization
                bars={40}
                height={100}
                isActive={isWaveformActive}
                className="px-4"
              />
            </div>

            {/* AI Processing Text */}
            <motion.p 
              className="text-sm text-[#64748b] text-center max-w-xs leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              AI analyzing speech patterns and generating professional SOAP documentation
            </motion.p>

            {/* Subtle animated border */}
            <motion.div 
              className="absolute inset-0 border border-[#007AFF]/20 rounded-3xl"
              animate={{ 
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Floating confidence badge */}
          <motion.div
            className="absolute -top-3 -right-3 bg-[#10b981] text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            98% Accuracy
          </motion.div>

          {/* Floating time badge */}
          <motion.div
            className="absolute -bottom-2 -left-4 bg-[#007AFF] text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, duration: 0.6 }}
          >
            2 Min Generation
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}