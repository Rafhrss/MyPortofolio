"use server";

import { db } from "@/db/db";
import { activities, comments } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// 1. Ambil semua komentar untuk aktivitas tertentu
export async function getComments(activityId: number) {
  try {
    const data = await db
      .select()
      .from(comments)
      .where(eq(comments.activityId, activityId))
      .orderBy(desc(comments.createdAt));
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching comments:", error);
    return { success: false, error: "Failed to fetch comments" };
  }
}

// 2. Tambah komentar baru
export async function addComment(activityId: number, userName: string, content: string) {
  if (!userName.trim() || !content.trim()) {
    return { success: false, error: "Name and content are required" };
  }

  try {
    const newComment = await db.insert(comments).values({
      activityId,
      userName: userName.trim(),
      content: content.trim(),
    }).returning();
    
    revalidatePath("/galeri");
    return { success: true, data: newComment[0] };
  } catch (error) {
    console.error("Error adding comment:", error);
    return { success: false, error: "Failed to add comment" };
  }
}

// 3. Tambah jumlah like
export async function incrementLike(activityId: number) {
  try {
    // Cari aktivitas saat ini untuk mendapatkan jumlah like terakhir
    const activity = await db.select().from(activities).where(eq(activities.id, activityId)).limit(1);
    if (!activity || activity.length === 0) {
      return { success: false, error: "Activity not found" };
    }

    const currentLikes = activity[0].likesCount || 0;
    
    // Update jumlah like
    const updated = await db
      .update(activities)
      .set({ likesCount: currentLikes + 1 })
      .where(eq(activities.id, activityId))
      .returning();

    revalidatePath("/galeri");
    return { success: true, data: updated[0] };
  } catch (error) {
    console.error("Error incrementing like:", error);
    return { success: false, error: "Failed to like" };
  }
}
