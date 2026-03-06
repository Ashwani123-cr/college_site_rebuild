import Navbar from "@/components/kcc/Navbar";
import NoticeTicker from "@/components/kcc/NoticeTicker";
import HeroSection from "@/components/kcc/HeroSection";
import WhyKCCSection from "@/components/kcc/WhyKCCSection";
import StatsCounter from "@/components/kcc/StatsCounter";
import ProgramsSection from "@/components/kcc/ProgramsSection";
import PlacementsSection from "@/components/kcc/PlacementsSection";
import TestimonialsSection from "@/components/kcc/TestimonialsSection";
import LifeSection from "@/components/kcc/LifeSection";
import ClubsSection from "@/components/kcc/ClubsSection";
import LegendsSection from "@/components/kcc/LegendsSection";
import FacultySection from "@/components/kcc/FacultySection";
import CTABanner from "@/components/kcc/CTABanner";
import LocationSection from "@/components/kcc/LocationSection";
import Footer from "@/components/kcc/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NoticeTicker />
      <WhyKCCSection />
      <StatsCounter />
      <ProgramsSection />
      <PlacementsSection />
      <TestimonialsSection />
      <LifeSection />
      <ClubsSection />
      <LegendsSection />
      <FacultySection />
      <CTABanner />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
