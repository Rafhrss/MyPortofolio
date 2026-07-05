export const projects = [
  {
    id: 1,
    title: 'RafSehat-Klinik',
    description: 'Website RafSehat-Klinik untuk suatu instansi yang dibangun dengan React, Next.js, Tailwind CSS dan Drizzle.',
    fullDescription: 'Sistem informasi dan manajemen klinik kesehatan (RafSehat-Klinik) yang dirancang untuk mempermudah operasional instansi kesehatan. Dibangun menggunakan stack modern Next.js, autentikasi aman dengan Better-Auth, dan pengelolaan database menggunakan Drizzle ORM serta Neon.',
    image: '/assets/rafklinikproject.png',
    tags: ['Next.js', 'Tailwind', 'React', 'Drizzle', 'Neon', 'Better-Auth'],
    liveDemo: 'https://rafsehat-klinik.vercel.app/',
    sourceCode: 'https://github.com/Rafhrss/RafSehat-Klinik'
  },
  {
    id: 2,
    title: "Rafda Syar'i",
    description: "Platform e-commerce toko gamis syar'i dengan fitur otentikasi, manajemen produk, dan transaksi.",
    fullDescription: 'Aplikasi web e-commerce khusus untuk penjualan pakaian gamis syar\'i. Dilengkapi dengan antarmuka yang responsif dan elegan, katalog produk yang dinamis, serta alur transaksi yang mudah bagi pelanggan. Dibangun menggunakan React dan Vite.',
    image: '/assets/rafdasyariproject.png',
    tags: ['React', 'Tailwind', 'Vite'],
    liveDemo: 'https://rafdasyari.vercel.app/',
    sourceCode: 'https://github.com/Rafhrss/Rafda-Store'
  },
  {
    id: 3,
    title: 'Note Forge',
    description: 'Website catatan untuk kamu yang pelupa saat bekerja maupun aktifitas.',
    fullDescription: 'Aplikasi pencatatan (note-taking) cerdas bergaya modern yang memungkinkan pengguna menulis dan mengelola catatan dengan mudah. Mendukung rich-text editor menggunakan Tip Tap, dan fitur autentikasi pengguna secara penuh.',
    image: '/assets/noteforgeproject.png',
    tags: ['Next.js', 'Tailwind', 'React', 'Drizzle', 'Neon', 'Better-Auth', 'Tip Tap'],
    liveDemo: 'https://next-noteforge-auth.vercel.app/',
    sourceCode: 'https://github.com/Rafhrss/Next-Notes-Auth'
  },
  {
    id: 4,
    title: 'My History Log',
    description: 'Website untuk menceritakan keluhan atau kegiatan & aktifitas yang kamu lalui hari ini, situs blog yang menyediakan kategori cerita yang kamu butuhkan.',
    fullDescription: 'My History Log adalah platform blog personal yang dirancang untuk membantu pengguna mencatat, mengekspresikan, dan mengelola cerita kehidupan sehari-hari—mulai dari keluhan, pengalaman, hingga aktivitas harian. Aplikasi ini dilengkapi dengan rich-text editor berbasis TipTap yang memungkinkan penulisan lebih fleksibel dan ekspresif, serta sistem autentikasi pengguna yang aman untuk menjaga privasi setiap cerita. Dengan dukungan kategori yang terstruktur, pengguna dapat dengan mudah mengorganisir dan menemukan kembali setiap momen yang telah dibagikan.',
    image: '/assets/myhistoryproject.png',
    tags: ['TailwindCSS', 'Django', 'HTML5', 'Neon',],
    liveDemo: 'https://myhistorylog.vercel.app',
    sourceCode: 'https://github.com/Rafhrss/MyHistoryLog'
  },
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
  { category: 'Backend', items: ['Node.js', 'Flask', 'Django', 'MySQL', 'Python', 'Drizzle', 'Neon'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Figma', 'VSCode'] }
];

export const experiences = [
  {
    id: 1,
    title: 'IT Support',
    highlight: 'PT. United Tractors',
    date: 'Januari 2024 - Mei 2024',
    image: '/assets/magang.jpg',
    bullets: [
      'Mengembangkan dan memelihara infrastruktur jaringan Office, termasuk pembangunan jaringan baru untuk akses WiFi antar gedung.',
      'Berkolaborasi dengan tim dalam pemeliharaan perangkat seperti komputer, printer, Access Point, Router dan perangkat pendukung lainnya.',
      'Melakukan pemeliharaan dan perbaikan software serta hardware.'
    ]
  },
  {
    id: 2,
    title: 'IT Network System Administrator',
    highlight: 'Kompetisi',
    date: '2023',
    image: '/assets/itnsa.jpeg',
    description: 'Saya memiliki pengalaman mengikuti Lomba Kompetensi Siswa (LKS) bidang IT Network System Administration (ITNSA) tingkat Provinsi Kalimantan Timur tahun 2023. Mendapatkan posisi juara 2 pada lomba bidang ini.'
  },
  {
    id: 3,
    title: 'Membangun Jaringan Fiber Optik',
    highlight: 'SMKN 1 Tanah Grogot',
    date: '2022',
    image: '/assets/fo.jpeg',
    description: 'Membantu guru TKJ dalam migrasi jaringan dari kabel UTP ke Fiber Optic di jalur plafon dan lorong sekolah untuk meningkatkan stabilitas bandwidth antar kelas'
  }
];
