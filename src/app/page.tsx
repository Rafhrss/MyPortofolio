import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import PortfolioShowcase from "@/components/PortfolioShowcase";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Main Content */}
      <HeroSection />

      {/* About Section */}
      <div className="container mx-auto relative z-10 py-20 pointer-events-auto">
        <AboutSection />
      </div>

      {/* Portfolio Showcase */}
      <div className="relative z-10 pointer-events-auto">
        <PortfolioShowcase />
      </div>
    </div>
  );
}
