"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Activity {
  id: number;
  imageUrl: string;
  title?: string | null;
}

export default function GallerySection({ initialActivities }: { initialActivities?: Activity[] }) {
  // Gunakan data dari database jika ada, jika kosong gunakan foto dummy dari folder galery
  const dummyData = [
    { id: 1, imageUrl: '/assets/galery/laporan.jpeg', title: 'Laporan' },
    { id: 2, imageUrl: '/assets/galery/logbook.jpeg', title: 'Logbook' },
    { id: 3, imageUrl: '/assets/galery/rafa.jpg', title: 'Foto Rafa' },
    { id: 4, imageUrl: '/assets/galery/twibbon.png', title: 'Twibbon' },
  ];

  const galleryItems = initialActivities && initialActivities.length > 0 ? initialActivities : dummyData;

  return (
    <section id="galery" className="container mx-auto px-4 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
            My Gallery
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Beberapa momen dan aktivitas terbaru.
        </p>
      </div>

      <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-[#0A1128]/60 border border-[#1E3A8A]/30 shadow-lg"
          >
            <Image 
              src={item.imageUrl} 
              alt={item.title || 'Gallery image'} 
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 brightness-90 group-hover:brightness-110"
            />
            {item.title && (
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
