"use client";
import Image from "next/image";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconCode, 
  IconHexagon, 
  IconLayersOff, 
  IconExternalLink, 
  IconBrandGithub, 
  IconX,
  IconDownload,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVite,
  IconDatabase,
  IconShieldCheck,
  IconPencil,
  IconBrandNodejs,
  IconBrandFigma,
  IconBrandGit,
  IconBrandVscode
} from '@tabler/icons-react';

// --- Helper for Icons ---
const getTagIcon = (tag: string, size = 14) => {
  const t = tag.toLowerCase();
  if (t.includes('react')) return <IconBrandReact size={size} />;
  if (t.includes('next.js')) return <IconBrandNextjs size={size} />;
  if (t.includes('tailwind')) return <IconBrandTailwind size={size} />;
  if (t.includes('vite')) return <IconBrandVite size={size} />;
  if (t.includes('node.js') || t.includes('express')) return <IconBrandNodejs size={size} />;
  if (t.includes('figma')) return <IconBrandFigma size={size} />;
  if (t.includes('github')) return <IconBrandGithub size={size} />;
  if (t.includes('git')) return <IconBrandGit size={size} />;
  if (t.includes('vs code')) return <IconBrandVscode size={size} />;
  if (t.includes('drizzle') || t.includes('neon') || t.includes('mysql') || t.includes('api')) return <IconDatabase size={size} />;
  if (t.includes('auth')) return <IconShieldCheck size={size} />;
  if (t.includes('tip tap')) return <IconPencil size={size} />;
  return <IconCode size={size} />;
};

// Removed static data import: import { projects, certificates, techStack as fallbackTechStack } from '@/data/portfolio';
import {
  ReactIcon,
  NextjsIcon,
  JavaScriptIcon,
  TailwindCSSIcon,
  HTML5Icon,
  CSSIcon,
  NodejIcon,
  FlaskIcon,
  DjangoIcon,
  MySQLIcon,
  PythonIcon,
  DrizzleORMIcon,
  NeonIcon,
  GitIcon,
  GitHubIcon,
  FigmaIcon,
  PostmanIcon,
} from '@/components/ui/icons';

// Kamus Ikon
const iconMap: Record<string, React.ReactNode> = {
  "React": <ReactIcon className="w-8 h-8 mb-2" />,
  "Next.js": <NextjsIcon className="w-8 h-8 mb-2" />,
  "JavaScript": <JavaScriptIcon className="w-8 h-8 mb-2" />,
  "Tailwind CSS": <TailwindCSSIcon className="w-8 h-8 mb-2" />,
  "HTML5": <HTML5Icon className="w-8 h-8 mb-2" />,
  "CSS3": <CSSIcon className="w-8 h-8 mb-2" />,
  "Node.js": <NodejIcon className="w-8 h-8 mb-2" />,
  "Flask": <FlaskIcon className="w-8 h-8 mb-2" />,
  "Django": <DjangoIcon className="w-8 h-8 mb-2" />,
  "MySQL": <MySQLIcon className="w-8 h-8 mb-2" />,
  "Python": <PythonIcon className="w-8 h-8 mb-2" />,
  "Drizzle": <DrizzleORMIcon className="w-8 h-8 mb-2" />,
  "Neon": <NeonIcon className="w-8 h-8 mb-2" />,
  "Git": <GitIcon className="w-8 h-8 mb-2" />,
  "GitHub": <GitHubIcon className="w-8 h-8 mb-2" />,
  "Figma": <FigmaIcon className="w-8 h-8 mb-2" />,
  "Postman": <PostmanIcon className="w-8 h-8 mb-2" />,
};

interface PortfolioShowcaseProps {
  initialTechStack?: { id?: number; category: string; items: string[] | null }[];
  initialProjects?: { id: number; title: string; image: string | null; description: string | null; fullDescription: string | null; liveDemo: string | null; sourceCode: string | null; tags: string[] | null }[];
  initialCertificates?: { id: number; title: string; image: string | null; date: string | null; issuer: string | null }[];
}

export default function PortfolioShowcase({ 
  initialTechStack = [], 
  initialProjects = [], 
  initialCertificates = [] 
}: PortfolioShowcaseProps) {
  const currentTechStack = initialTechStack;
  const currentProjects = initialProjects;
  const currentCertificates = initialCertificates;
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates' | 'techStack'>('projects');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Prevent scrolling and hide navbar when modal is open
  useEffect(() => {
    const navbar = document.getElementById('global-navbar');
    if (selectedProject) {
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
  }, [selectedProject]);

  return (
    // max-w-7xl untuk melebarkan showcase
    <div id="project" className="w-full px-4 md:px-8 py-20 max-w-7xl mx-auto flex flex-col items-center">
      {/* Title */}
      <h2 
      // Tailwind untuk mengatur besar size text
        className="font-moderniz uppercase tracking-wider text-center text-[#00ffdc] drop-shadow-[0_0_15px_rgba(0,255,220,0.8)] mb-12 text-[28px] leading-[36px] sm:text-[36px] sm:leading-[42px] md:text-[46px] md:leading-[50px]"
        style={{ 
          fontWeight: 700,
          WebkitTextStroke: "1px #000",
          textShadow: "3px 3px 0px #000"
        }}
      >
        PORTFOLIO SHOWCASE
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center p-2 bg-[#0A1128]/80 backdrop-blur-md rounded-2xl mb-12 border border-[#1E3A8A]/50 max-w-3xl w-full mx-auto relative gap-2 md:gap-0">
        {(['projects', 'certificates', 'techStack'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-[130px] md:min-w-0 relative flex items-center justify-center gap-2 py-3 md:py-4 px-3 md:px-6 rounded-xl text-sm md:text-base font-bold transition-all duration-300 z-10 whitespace-nowrap
              ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}
            `}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-slate-800/40 rounded-xl z-[-1] border border-slate-500/40 shadow-md"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {tab === 'projects' && <IconCode size={20} />}
            {tab === 'certificates' && <IconHexagon size={20} />}
            {tab === 'techStack' && <IconLayersOff size={20} />}
            <span className="capitalize">{tab === 'techStack' ? 'Tech Stack' : tab}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      {/* rounded-[2rem] p-4 md:p-6 untuk melebarkan showcase */}
      <div className="w-full min-h-[400px] bg-[#0A1128]/40 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-[2rem] p-4 md:p-6 shadow-2xl">
        <AnimatePresence mode="wait">
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#0A1128]/60 border-2 border-transparent rounded-2xl overflow-hidden cursor-pointer group hover:border-white transition-all duration-300 shadow-lg relative aspect-4/3"
                >
                  <Image fill src={project.image?.startsWith('/') ? project.image : `/${project.image || ''}`} alt={project.title} className="object-cover group-hover:scale-105 transition-all duration-500 brightness-90 group-hover:brightness-110" />
                </div>
              ))}
            </motion.div>
          )}

          {/* CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentCertificates.map((cert) => (
                <div key={cert.id} className="bg-[#0A1128]/60 border border-[#1E3A8A]/40 rounded-2xl overflow-hidden group hover:border-[#1E3A8A] transition-all duration-300 shadow-lg">
                  <div className="h-52 relative overflow-hidden bg-slate-800">
                    <Image fill src={cert.image?.startsWith('http') ? cert.image : (cert.image?.startsWith('/') ? cert.image : `/${cert.image || ''}`)} alt={cert.title} className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                    <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {cert.date}
                    </div>
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full border border-slate-700/50 shadow-lg">
                      {cert.issuer}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4 bg-[#0A1128]">
                    <h3 className="text-lg font-bold text-slate-100 line-clamp-2 leading-snug">{cert.title}</h3>
                    <button className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors w-fit mt-2">
                      <IconDownload size={18} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TECH STACK TAB */}
          {activeTab === 'techStack' && (
            <motion.div
              key="techStack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              {currentTechStack.map((stack) => (
                <div key={stack.category} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,220,0.5)]">
                    {stack.category}
                  </h3>
                  
                  {/* Horizontal Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {(stack.items || []).map((item) => (
                      <div 
                        key={item} 
                        className="flex flex-col items-center justify-center p-4 bg-[#0A1128]/80 border border-[#1E3A8A]/50 rounded-xl hover:border-cyan-400/50 hover:bg-[#1E3A8A]/20 transition-all duration-300 shadow-sm group"
                      >
                        <div className="group-hover:scale-110 transition-transform duration-300 text-slate-300 group-hover:text-cyan-300 flex flex-col items-center">
                          {iconMap[item] || <IconCode size={32} className="mb-2 text-cyan-400" />}
                        </div>
                        <span className="text-lg font-medium text-slate-300 group-hover:text-white text-center mt-1 line-clamp-1">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#060B19]/80 backdrop-blur-sm cursor-pointer" 
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0F172A] rounded-3xl border border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#060B19]">
                <Image 
                  fill
                  src={selectedProject.image?.startsWith('/') ? selectedProject.image : `/${selectedProject.image || ''}`} 
                  alt={selectedProject.title} 
                  // kalo object-cover tampilan project bakal full dan terpotong
                  className="object-contain p-4 md:p-6"
                />
                {/* Gradient overlay on mobile to transition into content */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0F172A] to-transparent md:hidden" />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors z-10 border border-slate-700"
                >
                  <IconX size={20} />
                </button>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6 pr-8 mt-2 md:mt-0">
                  {selectedProject.tags.map((tag: string) => (
                    <span key={tag} className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-[#1E3A8A]/20 text-cyan-300 border border-[#1E3A8A]/50">
                      {getTagIcon(tag, 14)}
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>
                
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 flex-1">
                  {selectedProject.fullDescription}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a 
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white py-3.5 px-6 rounded-xl font-bold transition-colors flex-1 shadow-lg shadow-teal-500/20"
                  >
                    <IconExternalLink size={20} />
                    Live Demo
                  </a>
                  <a 
                    href={selectedProject.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#1E293B] hover:bg-[#334155] text-white py-3.5 px-6 rounded-xl font-bold transition-colors flex-1 border border-slate-600 shadow-lg"
                  >
                    <IconBrandGithub size={20} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
