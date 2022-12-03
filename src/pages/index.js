import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import HeroSection from "@/containers/HeroSection";
import AboutSection from "@/containers/AboutSection";
import ServicesSection from "@/containers/ServicesSection";
import PortfolioSection from "@/containers/PortfolioSection";
import TestimonialSection from "@/containers/TestimonialSection";
import CollaborationSection from "@/containers/CollaborationSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialSection />
        <CollaborationSection />
      </main>
      <Footer />
    </>
  );
}
