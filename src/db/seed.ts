import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { projects, certificates, techStack, experiences } from "../data/portfolio";

// Load environment variables directly if running locally via script
import { config } from "dotenv";
config();

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
// @ts-expect-error - schema is required for relational queries but types are omitted in Drizzle v1-rc
const db = drizzle({ client: sql, schema });

async function main() {
  console.log("🌱 Memulai proses seeding database...");

  try {
    console.log("Menghapus data lama untuk mencegah duplikasi...");
    await db.delete(schema.comments);
    await db.delete(schema.activities);
    await db.delete(schema.projects);
    await db.delete(schema.certificates);
    await db.delete(schema.techStack);
    await db.delete(schema.experiences);
    // 1. Seed Projects
    console.log("Memasukkan data Projects...");
    for (const project of projects) {
      await db.insert(schema.projects).values({
        title: project.title,
        description: project.description,
        fullDescription: project.fullDescription,
        image: project.image,
        tags: project.tags,
        liveDemo: project.liveDemo,
        sourceCode: project.sourceCode,
      });
    }

    // 2. Seed Certificates
    console.log("Memasukkan data Certificates...");
    for (const cert of certificates) {
      await db.insert(schema.certificates).values({
        title: cert.title,
        issuer: cert.issuer,
        date: cert.date,
        image: cert.image,
      });
    }

    // 3. Seed Tech Stack
    console.log("Memasukkan data Tech Stack...");
    for (const tech of techStack) {
      await db.insert(schema.techStack).values({
        category: tech.category,
        items: tech.items,
      });
    }

    // 4. Seed Experiences
    console.log("Memasukkan data Experiences...");
    for (const exp of experiences) {
      await db.insert(schema.experiences).values({
        title: exp.title,
        highlight: exp.highlight,
        date: exp.date,
        image: exp.image,
        description: exp.description || null,
        bullets: exp.bullets || null,
      });
    }

    // 5. Seed Activities (Galeri)
    console.log("Memasukkan data Activities (Galeri)...");
    const dummyActivities = [
      { title: 'Laporan', description: 'Mengerjakan laporan proyek bulanan bersama tim.', imageUrl: '/assets/galery/laporan.jpeg' },
      { title: 'Logbook', description: 'Mengisi logbook harian untuk dokumentasi kerja.', imageUrl: '/assets/galery/logbook.jpeg' },
      { title: 'Foto Rafa', description: 'Sesi foto santai di sela-sela waktu istirahat.', imageUrl: '/assets/galery/rafa.jpg' },
      { title: 'Twibbon', description: 'Pembuatan desain twibbon untuk acara kampus.', imageUrl: '/assets/galery/twibbon.png' },
    ];
    for (const activity of dummyActivities) {
      await db.insert(schema.activities).values(activity);
    }

    console.log("✅ Seeding database sukses! Semua data dari portfolio.ts sudah masuk ke Neon.");
  } catch (error) {
    console.error("❌ Terjadi kesalahan saat seeding:", error);
  }
}

main();
