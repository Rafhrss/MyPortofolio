"use server";

import { db } from "@/db/db";
import { comments } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function likeComment(commentId: number, pathToRevalidate: string = "/") {
  try {
    await db
      .update(comments)
      .set({ likesCount: sql`${comments.likesCount} + 1` })
      .where(eq(comments.id, commentId));
    
    revalidatePath(pathToRevalidate);
    return { success: true };
  } catch (error) {
    console.error("Error liking comment:", error);
    return { success: false, error: "Failed to like comment" };
  }
}
