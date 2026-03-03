import { HeroVideo } from "@/components/landing/HeroVideo";
import { HeroSection } from "@/components/landing/HeroSection";
import { Footer } from "@/components/layout/Footer";

export function LandingPage() {
  return (
    <>
      <HeroVideo />
      <HeroSection />
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
