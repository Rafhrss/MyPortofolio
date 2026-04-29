import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";

export default function Home() {
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
        <PortfolioShowcase />
      </div>

      {/* Experience Section */}
      <div className="relative pointer-events-auto">
        <ExperienceSection />
      </div>
    </div>
  );
}
