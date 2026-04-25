import React from 'react';

export default function AboutSection() {
  return (
    <div id="about" className="w-full px-8 md:px-16">
      {/* Header with Title and Line */}
      <div className="flex items-center gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center gap-3">
          About Me
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
