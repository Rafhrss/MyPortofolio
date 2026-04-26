import React from 'react';
import SpotlightCard from './SpotlightCard';
import { experiences } from '@/data/portfolio';

export default function ExperienceSection() {
  return (
    <div id="experience" className="w-full px-4 md:px-8 py-20 max-w-7xl mx-auto flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 uppercase tracking-wider text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-100">WORK</span>
        <span className="text-white ml-3">EXPERIENCE</span>
      </h2>

      {/* Experience Cards */}
      {/* hapus max-w-5xl untuk memanjang kesamping card */}
      <div className="w-full flex flex-col gap-6">
        {experiences.map((exp) => (
          <SpotlightCard 
            key={exp.id} 
            spotlightColor="rgba(0, 229, 255, 0.2)" // cyan-500 with low opacity
            className="w-full bg-[#0A1128]/80 border border-[#1E3A8A]/40 rounded-2xl p-6 md:p-8 flex flex-col items-start text-left shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {exp.title} <span className="text-cyan-400">{exp.highlight}</span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base font-medium mb-6">
              {exp.date}
            </p>
            
            {exp.bullets ? (
              <ul className="space-y-3">
                {exp.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start text-slate-300 text-base md:text-lg leading-relaxed">
                    <span className="mr-3 text-cyan-500 mt-1.5">-</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                {exp.description}
              </p>
            )}
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
