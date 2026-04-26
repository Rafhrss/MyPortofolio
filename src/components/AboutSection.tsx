import React from 'react';
import Lottie from './Lottie';

export default function AboutSection() {
  return (
    <div id="about" className="w-full px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
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

      {/* Content: Lottie kiri, teks kanan */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Lottie Animation */}
        <div className="w-full max-w-[280px] md:max-w-[380px] shrink-0">
          <Lottie />
        </div>

        {/* Text */}
        <div className="space-y-6 text-slate-400 text-base md:text-lg leading-[1.8] font-sans text-center md:text-left">
          <p>
            Saya adalah mahasiswa Teknik Informatika di Universitas Muhammadiyah Kalimantan Timur yang memiliki minat besar dalam pengembangan Full Stack dan teknologi web modern. Saya selalu bersemangat untuk belajar hal baru dan menciptakan solusi digital yang inovatif.
          </p>
          <p>
            Saya memiliki minat yang besar dalam bidang teknologi dan senantiasa berupaya untuk terus mengembangkan keahlian serta memperdalam pengetahuan saya di bidang ini.
          </p>
        </div>
      </div>
    </div>
  );
}
