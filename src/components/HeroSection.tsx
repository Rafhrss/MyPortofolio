import Lanyard from "@/components/Landyard";
import TextType from "@/components/TextType";
import { GitHubIcon, Instagram, LinkedIn } from "@/components/ui/icons";

export default function HeroSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 min-h-[75vh] md:h-screen relative pointer-events-none pt-28 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full items-center relative">
        <div className="col-span-1 md:col-span-7 text-white w-full py-8 md:pl-16 pointer-events-auto flex flex-col justify-center items-center md:items-start text-center md:text-left">

          {/* Title */}
          <h1
            className="font-moderniz mb-6 uppercase tracking-wider text-[#00ffdc] drop-shadow-[0_0_15px_rgba(0,255,220,0.8)] text-[32px] leading-10 sm:text-[36px] sm:leading-10.5 md:text-[46px] md:leading-12.5"
            style={{ 
              fontWeight: 700,
              WebkitTextStroke: "1px #000",
              textShadow: "3px 3px 0px #000"
            }}
          >
            Welcome to my
            <br />
            Portfolio
          </h1>

          {/* Subtitle */}
          <div className="text-4xl md:text-4xl font-mono mb-8 text-[#38BDF8]">
            <TextType
              text={["Network Engineer", "Data Analyst", "Junior Programming"]}
              typingSpeed={80}
              pauseDuration={2900}
              showCursor
              cursorCharacter="_"
              deletingSpeed={65}
              cursorBlinkDuration={0.6}
            />
          </div>


          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-mono leading-relaxed">
            Building business-driven full-stack web solutions with modern technologies like Next.js & ORM databases, backed by hands-on IT infrastructure and network engineering experience in switching, routing, cabling and server deployment.
          </p>

          {/* Social Media */}
          <div className="flex flex-col gap-6 w-full max-w-xl">
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/Rafhrss" target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800/50 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-sm cursor-pointer"
              >
                <GitHubIcon className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/rafhris._" target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800/50 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-sm cursor-pointer"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafa-haris-91b6a530a/" target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800/50 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-sm cursor-pointer"
              >
                <LinkedIn className="w-7 h-7" />
              </a>
            </div>


          </div>
        </div>
        {/* hidden md:flex membuat Landyard hilang saat mobile */}
        <div className="hidden md:flex col-span-1 md:col-span-5 h-[80vh] md:h-screen absolute right-0 top-0 w-full md:w-[45%] pointer-events-auto items-center justify-center">
          {/* Moved camera closer (z=13) and up (y=1.5) to significantly increase the size of the lanyard while keeping it in frame */}
          <Lanyard position={[0, 1.5, 13]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </div>
  );
}
