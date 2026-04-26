export const projects = [
  {
    id: 1,
    title: 'RafSehat-Klinik',
    description: 'Website RafSehat-Klinik untuk suatu instansi yang dibangun dengan React, Next.js, Tailwind CSS dan Drizzle.',
    fullDescription: 'Sistem informasi dan manajemen klinik kesehatan (RafSehat-Klinik) yang dirancang untuk mempermudah operasional instansi kesehatan. Dibangun menggunakan stack modern Next.js, autentikasi aman dengan Better-Auth, dan pengelolaan database menggunakan Drizzle ORM serta Neon.',
    image: 'rafklinikproject.png',
    tags: ['Next.js', 'Tailwind', 'React', 'Drizzle', 'Neon', 'Better-Auth'],
    liveDemo: 'https://rafsehat-klinik.vercel.app/',
    sourceCode: 'https://github.com/Rafhrss/RafSehat-Klinik'
  },
  {
    id: 2,
    title: "Rafda Syar'i",
    description: "Platform e-commerce toko gamis syar'i dengan fitur otentikasi, manajemen produk, dan transaksi.",
    fullDescription: 'Aplikasi web e-commerce khusus untuk penjualan pakaian gamis syar\'i. Dilengkapi dengan antarmuka yang responsif dan elegan, katalog produk yang dinamis, serta alur transaksi yang mudah bagi pelanggan. Dibangun menggunakan React dan Vite.',
    image: 'rafdasyariproject.png',
    tags: ['React', 'Tailwind', 'Vite'],
    liveDemo: 'https://rafdasyari.vercel.app/',
    sourceCode: 'https://github.com/Rafhrss/Rafda-Store'
  },
  {
    id: 3,
    title: 'Note Forge',
    description: 'Website catatan untuk kamu yang pelupa saat bekerja maupun aktifitas.',
    fullDescription: 'Aplikasi pencatatan (note-taking) cerdas bergaya modern yang memungkinkan pengguna menulis dan mengelola catatan dengan mudah. Mendukung rich-text editor menggunakan Tip Tap, dan fitur autentikasi pengguna secara penuh.',
    image: 'noteforgeproject.png',
    tags: ['Next.js', 'Tailwind', 'React', 'Drizzle', 'Neon', 'Better-Auth', 'Tip Tap'],
    liveDemo: 'https://next-noteforge-auth.vercel.app/',
    sourceCode: 'https://github.com/Rafhrss/Next-Notes-Auth'
  }
];

export const certificates = [
  {
    id: 1,
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'DICODING INDONESIA',
    date: 'Dec 2024',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'DICODING INDONESIA',
    date: 'Dec 2024',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'DICODING INDONESIA',
    date: 'Dec 2024',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60'
  }
];

export const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { category: 'Backend', items: ['Node.js', 'Flask', 'Django', 'MySQL', 'Drizzle', 'Neon'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Figma', 'VSCode'] }
];

export const experiences = [
  {
    id: 1,
    title: 'IT Support',
    highlight: 'RSBT Sungailiat',
    date: '2024-2025',
    bullets: [
      'Mengembangkan dan memelihara infrastruktur jaringan rumah sakit, termasuk pembangunan jaringan hotspot untuk layanan WiFi publik.',
      'Berkolaborasi dengan tim dalam pemeliharaan perangkat seperti komputer, printer, scanner, dan perangkat pendukung lainnya.',
      'Melakukan pemeliharaan sistem operasi berbasis Windows dan Linux server.'
    ]
  },
  {
    id: 2,
    title: 'IT Network System Administrator',
    highlight: 'Kompetisi',
    date: '2023',
    description: 'Saya memiliki pengalaman mengikuti Lomba Kompetensi Siswa (LKS) bidang IT Network System Administration (ITNSA) tingkat Provinsi Kalimantan Timur tahun 2023. Mendapatkan posisi juara 2 pada lomba bidang ini.'
  },
  {
    id: 3,
    title: 'Membangun Jaringan Hotspot',
    highlight: 'SMKN 1 Sungailiat',
    date: '2024-2025',
    description: 'Membangun dan mengembangkan jaringan hotspot berbasis voucher menggunakan router Mikrotik.'
  }
];
