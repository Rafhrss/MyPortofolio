import React from 'react';

export default function AboutSection() {
  return (
    <div id="about" className="w-full px-8 md:px-16">
      {/* Header with Title and Line */}
      <div className="flex items-center gap-6 mb-10">
        <h2 
          className="font-moderniz uppercase tracking-wider text-[#00ffdc] drop-shadow-[0_0_15px_rgba(0,255,220,0.8)] flex items-center gap-3"
          style={{ 
            fontSize: "36px", 
            lineHeight: "40px", 
            fontWeight: 700,
            WebkitTextStroke: "1px #000",
            textShadow: "3px 3px 0px #000"
          }}
        >
          ABOUT ME
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-8 text-slate-400 text-base md:text-lg leading-[1.8] font-sans">
        <p>
          Saya adalah mahasiswa Teknik Informatika di Universitas Muhammadiyah Kalimantan Timur yang memiliki minat besar dalam pengembangan Full Stack dan teknologi web modern. Saya selalu bersemangat untuk belajar hal baru dan menciptakan solusi digital yang inovatif.
        </p>
        <p>
          Saya memiliki minat yang besar dalam bidang teknologi dan senantiasa berupaya untuk terus mengembangkan keahlian serta memperdalam pengetahuan saya di bidang ini.
        </p>
      </div>
    </div>
  );
}
