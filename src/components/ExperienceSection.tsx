"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX, IconBriefcase, IconCalendar } from '@tabler/icons-react';
import SpotlightCard from './SpotlightCard';
import { experiences } from '@/data/portfolio';

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<any>(null);

  // Prevent scrolling and hide navbar when modal is open
  useEffect(() => {
    const navbar = document.getElementById('global-navbar');
    if (selectedExp) {
      document.body.style.overflow = 'hidden';
      if (navbar) navbar.style.transform = 'translateY(-150%)';
    } else {
      document.body.style.overflow = 'unset';
      if (navbar) navbar.style.transform = '';
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (navbar) navbar.style.transform = '';
    };
  }, [selectedExp]);

  return (
    <div id="experience" className="w-full px-4 md:px-8 py-20 max-w-7xl mx-auto flex flex-col items-center">
      {/* Title */}
      <h2 
        className="font-moderniz uppercase tracking-wider text-center text-[#00ffdc] drop-shadow-[0_0_15px_rgba(0,255,220,0.8)] mb-16"
        style={{ 
          fontSize: "36px", 
          lineHeight: "40px", 
          fontWeight: 700,
          WebkitTextStroke: "1px #000",
          textShadow: "3px 3px 0px #000"
        }}
      >
        WORK EXPERIENCE
      </h2>

      {/* Experience Cards */}
      <div className="w-full flex flex-col gap-6">
        {experiences.map((exp) => (
          <SpotlightCard 
            key={exp.id}
            onClick={() => setSelectedExp(exp)}
            spotlightColor="rgba(20, 223, 224, 0.8)"
            className="w-full bg-[#0A1128]/80 border border-[#1E3A8A]/40 rounded-2xl p-6 md:p-8 flex flex-col items-start text-left shadow-lg cursor-pointer hover:border-cyan-500/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-2 w-full">
              <span className="p-2 rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-900/50">
                <IconBriefcase size={18} />
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white flex-1">
                {exp.title} <span className="text-cyan-400">{exp.highlight}</span>
              </h3>
              <span className="flex items-center gap-1.5 text-slate-400 text-sm font-medium shrink-0">
                <IconCalendar size={14} />
                {exp.date}
              </span>
            </div>

            {/* Preview */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-3 line-clamp-2">
              {exp.bullets ? exp.bullets[0] : exp.description}
            </p>
            <span className="mt-4 text-xs text-cyan-400/70 border border-cyan-500/20 px-3 py-1 rounded-full">
              Klik untuk detail →
            </span>
          </SpotlightCard>
        ))}
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#060B19]/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedExp(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0F172A] rounded-3xl border border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-56 md:h-auto relative bg-[#060B19] shrink-0">
                <img
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0F172A] to-transparent md:hidden" />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors z-10 border border-slate-700"
                >
                  <IconX size={20} />
                </button>

                {/* Date badge */}
                <span className="flex items-center gap-1.5 text-sm text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-full w-fit mb-4 mt-2 md:mt-0">
                  <IconCalendar size={14} />
                  {selectedExp.date}
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {selectedExp.title}
                </h2>
                <p className="text-cyan-400 font-semibold text-base mb-6">
                  {selectedExp.highlight}
                </p>

                {/* Content */}
                {selectedExp.bullets ? (
                  <ul className="space-y-3 flex-1">
                    {selectedExp.bullets.map((bullet: string, index: number) => (
                      <li key={index} className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                        <span className="mr-3 text-cyan-500 mt-1 shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-1">
                    {selectedExp.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
