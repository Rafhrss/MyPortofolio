import Image from "next/image";
import Lanyard from "@/components/Landyard";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Main Content */}
      <div className="container mx-auto h-screen relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center relative">
          <div className="col-span-1 md:col-span-7 text-white p-8 md:pl-16 pointer-events-auto flex flex-col justify-center">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 border border-blue-800/50 bg-blue-900/20 rounded-full px-4 py-1.5 w-fit mb-8 backdrop-blur-sm">
              <span className="text-yellow-400 text-sm">✨</span>
              <span className="text-blue-300 text-sm font-medium tracking-wide">Innovation For the Future</span>
              <span className="text-blue-400/70 text-sm ml-1">{'>'}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase leading-[1.1] tracking-wide text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" style={{ WebkitTextStroke: "1px #0891b2" }}>
              Welcome to my<br />Portfolio
            </h1>

            {/* Subtitle */}
            <h2 className="text-3xl md:text-4xl font-mono mb-8 text-[#38BDF8]">
              3D Designer<span className="animate-pulse opacity-70">|</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-mono leading-relaxed">
              I craft responsive and visually engaging websites using React, Tailwind CSS, and modern web technologies.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {['React', 'Javascript', 'Node.js', 'Tailwind'].map((tech) => (
                <div key={tech} className="px-5 py-2 rounded-full border border-slate-700/50 bg-slate-800/50 text-slate-200 text-sm backdrop-blur-sm shadow-sm">
                  {tech}
                </div>
              ))}
            </div>

            {/* Social Links */}

          </div>
          <div className="col-span-1 md:col-span-5 h-[80vh] md:h-screen absolute right-0 top-0 w-full md:w-[45%] pointer-events-auto">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto relative z-10 py-20 pointer-events-auto">
        <AboutSection />
      </div>
    </div>
  );
}
