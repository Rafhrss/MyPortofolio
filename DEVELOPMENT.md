# Development Workflow for MyPortofolio

Dokumen ini berisi panduan dan standar pengembangan (_workflow_) pribadi untuk proyek MyPortofolio. Karena ini adalah proyek solo, alurnya dibuat sederhana namun tetap terstruktur dan rapi.

## Table of Contents

- [Setup Local Development](#setup-local-development)
- [Code Style & Linting](#code-style--linting)
- [Issue Tracking](#issue-tracking)
- [Making Commits](#making-commits)
- [Project Architecture](#project-architecture)

## Setup Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rafhrss/MyPortofolio.git
   cd MyPortofolio
   ```

2. **Copy environment file**
   Buat file `.env` berdasarkan konfigurasi yang dibutuhkan. Kamu perlu menyiapkan URL dari database Neon milikmu.

   ```bash
   cp .env.example .env
   ```

   _(Pastikan variabel `DATABASE_URL` sudah terisi dengan benar di dalam file `.env`)_

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Sync Database Schema (Drizzle ORM)**
   Dorong skema tabel ke dalam database Neon:

   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Server akan berjalan secara lokal di `http://localhost:3000`.

## Code Style & Linting

Proyek ini menggunakan **Prettier** dan **ESLint** untuk menjaga kebersihan format dan kualitas kode.

```bash
# Mengecek error linter
npm run lint
```

## Issue Tracking

Gunakan **GitHub Issues** sebagai _to-do list_ dan catatan (dokumentasi pribadi) untuk ide fitur baru, optimasi, atau perbaikan _bug_.

Tidak perlu menggunakan kode khusus atau penomoran berurut. Cukup tuliskan judul secara natural agar mudah diingat.

**Contoh Judul Issue:**

- ✅ `Feature: Tambah sistem komentar di halaman galeri`
- ✅ `Bug: Gambar pudar saat di mode mobile`
- ✅ `Refactor: Pisahkan komponen navbar ke folder terpisah`

## Making Commits (Trunk-Based Development)

Pengembangan proyek ini dilakukan dengan teknik **Trunk-Based Development**, yang artinya: **Kamu bisa melakukan _commit_ dan _push_ secara langsung ke _branch_ `main`.**
Tidak perlu repot-repot membuat _branch_ terpisah ataupun _Pull Request_ (PR).

### Format Commit (Conventional Commits)

Meskipun langsung _push_ ke `main`, usahakan menggunakan pesan commit yang jelas:

```
type(scope): message
```

- **feat**: Menambah fitur baru
- **fix**: Memperbaiki _bug_
- **style**: Mengubah tampilan (_styling_ Tailwind, UI) atau merapikan _spacing/indentation_
- **refactor**: Merombak kode tanpa mengubah fungsionalitas visual
- **chore**: Mengubah _build process_, _dependencies_ (`package.json`), dll.

**Menutup Issue secara Otomatis (Wajib Tahu!):**
Jika _commit_ tersebut dibuat untuk menyelesaikan sebuah Issue, tambahkan kalimat `(closes #ID_ISSUE)` di pesan _commit_-mu.
Contoh:

```bash
git commit -m "feat(gallery): tambah tombol like (closes #5)"
```

GitHub akan otomatis membaca teks tersebut dan menutup _Issue_ #5 seketika. Ini adalah cara termudah merapikan _project management_ solomu tanpa bantuan _Pull Request_!

## Project Architecture

```text
MyPortofolio/
├── public/              # Aset gambar statis dan file publik
├── src/
│   ├── app/             # Next.js App Router (Halaman dan Layout)
│   ├── components/      # Komponen React (UI, Section, dll)
│   ├── data/            # Data statis
│   ├── db/              # Konfigurasi Drizzle ORM, schema, & seed
│   └── lib/             # Utility functions
├── .env                 # Kredensial rahasia (JANGAN DI-COMMIT)
├── drizzle.config.ts    # Konfigurasi migrasi Drizzle ORM
└── tailwind.config.ts   # Konfigurasi sistem desain
```

---

**Happy Coding! 🚀**
