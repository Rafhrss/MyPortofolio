import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Main Content */}
      <HeroSection />

      {/* About Section */}
      <div className="container mx-auto relative z-10 py-20 pointer-events-auto">
        <AboutSection />
      </div>
    </div>
  );
}
