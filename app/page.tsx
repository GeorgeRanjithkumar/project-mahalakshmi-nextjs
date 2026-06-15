import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LegacySection from "@/components/LegacySection";
import BentoFeatures from "@/components/BentoFeatures";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <LegacySection />
      <BentoFeatures />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
