"use server";

import { db } from "@/db/db";
import { comments } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function addContactComment(userName: string, content: string) {
  if (!userName.trim() || !content.trim()) {
    return { success: false, error: "Name and comment are required" };
  }

  try {
    await db.insert(comments).values({
      activityId: null, // Global comment for contact section
      userName: userName.trim(),
      content: content.trim(),
    });
    
    // Revalidate the home page so the new comment shows up immediately
    revalidatePath("/");
    
    return { success: true };
  } catch (error) {
    console.error("Error adding contact comment:", error);
    return { success: false, error: "Failed to add comment" };
  }
}
