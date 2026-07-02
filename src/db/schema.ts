import { pgTable, serial, text, varchar, timestamp, integer, json } from "drizzle-orm/pg-core";

// 1. TABEL PROJECTS (Untuk Portfolio)
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  fullDescription: text("full_description"),
  image: varchar("image", { length: 255 }),
  tags: json("tags").$type<string[]>(), // Disimpan sebagai array string (JSON)
  liveDemo: varchar("live_demo", { length: 255 }),
  sourceCode: varchar("source_code", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// 2. TABEL EXPERIENCES (Untuk Riwayat Pekerjaan)
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  highlight: varchar("highlight", { length: 255 }),
  date: varchar("date", { length: 100 }),
  image: varchar("image", { length: 255 }),
  description: text("description"),
  bullets: json("bullets").$type<string[]>(), // Disimpan sebagai array string (JSON)
});

// 3. TABEL CERTIFICATES (Untuk Sertifikat)
export const certificates = pgTable("certificates", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  issuer: varchar("issuer", { length: 255 }),
  date: varchar("date", { length: 100 }),
  image: varchar("image", { length: 255 }),
});

// 4. TABEL TECH STACK
export const techStack = pgTable("tech_stack", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 100 }).notNull(), // cth: 'Frontend', 'Backend'
  items: json("items").$type<string[]>(),
});

// ==========================================
// FITUR BARU: GALLERY (AKTIVITAS)
// ==========================================

// 5. TABEL ACTIVITIES (Postingan Galeri)
export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  likesCount: integer("likes_count").default(0), // Menyimpan jumlah like
  createdAt: timestamp("created_at").defaultNow(),
});

// 6. TABEL COMMENTS (Komentar Pengunjung di Galeri)
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  activityId: integer("activity_id")
    .references(() => activities.id, { onDelete: "cascade" }) // Relasi ke tabel activities
    .notNull(),
  userName: varchar("user_name", { length: 100 }).notNull(), // Nama pengunjung anonim/login
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
