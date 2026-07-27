import GallerySection from '@/components/GallerySection'
import { db } from '@/db/db';
import { activities } from '@/db/schema';
import { desc } from "drizzle-orm";

export const revalidate = 0;

export default async function GalleryPage() {
  const activitiesData = await db.select().from(activities).orderBy(desc(activities.id));

  return (
    <div className="min-h-screen pt-24">
      {/* Gallery Section */}
      <div className="relative pointer-events-auto">
        <GallerySection initialActivities={activitiesData} />
      </div>
    </div>
  )
}