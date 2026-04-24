import React from 'react';

export default function AboutSection() {
  return (
    <div className="text-white p-8 md:pl-16 max-w-4xl">
      {/* Title */}
      <h2 
        className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 uppercase leading-[1.1] tracking-wide text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
        style={{ WebkitTextStroke: "1px #0891b2" }}
      >
        HELLO, I&apos;M
      </h2>
      <h1 
        className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 uppercase leading-[1.1] tracking-wide text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
        style={{ WebkitTextStroke: "2px #0891b2" }}
      >
        Rafa haris
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-xl text-slate-300 mb-10 font-mono leading-relaxed text-justify">
        Saya adalah mahasiswa Teknik Informatika di Universitas Muhammadiyah Kalimantan Timur yang memiliki minat besar dalam pengembangan Full Stack dan teknologi web modern. Saya selalu bersemangat untuk belajar hal baru dan menciptakan solusi digital yang inovatif.
      </p>

      {/* Blockquote */}
      <div className="bg-[#0A1930]/30 border border-blue-900/50 rounded-r-xl rounded-l-sm p-6 pl-8 relative backdrop-blur-sm w-fit">
        {/* Cyan vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400 rounded-l-sm shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        <p className="text-slate-300 font-mono italic text-lg md:text-xl tracking-wide">
          "Whoever strives shall succeed."
        </p>
      </div>
    </div>
  );
}
