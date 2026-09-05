import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ContactSection from "@/components/ContactSection";
import { db } from "@/db/db";
import { techStack, projects, certificates, experiences, comments } from "@/db/schema";
import { desc, asc, isNull } from "drizzle-orm";

export const revalidate = 0; // Ensure data is fetched fresh

export default async function Home() {
  const techStackData = await db.select().from(techStack);
  const projectsData = await db.select().from(projects).orderBy(desc(projects.id));
  const certificatesData = await db.select().from(certificates).orderBy(desc(certificates.id));
  const experiencesData = await db.select().from(experiences).orderBy(desc(experiences.id));
  const contactCommentsData = await db.select().from(comments).where(isNull(comments.activityId)).orderBy(asc(comments.id));

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Main Content */}
      <HeroSection />

      {/* About Section */}
      <div className="container mx-auto relative py-20 pointer-events-auto">
        <AboutSection />
      </div>

      {/* Portfolio Showcase */}
      <div className="relative pointer-events-auto">
        <PortfolioShowcase 
          initialTechStack={techStackData} 
          initialProjects={projectsData}
          initialCertificates={certificatesData}
        />
      </div>

      {/* Experience Section */}
      <div className="relative pointer-events-auto">
        <ExperienceSection initialExperiences={experiencesData} />
      </div>

      {/* Contact Section */}
      <div className="relative pointer-events-auto">
        <ContactSection initialComments={contactCommentsData} />
      </div>
    </div>
  );
}
