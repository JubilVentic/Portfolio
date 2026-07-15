import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FeaturedWork } from "@/components/FeaturedWork";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedWork />
    </main>
  );
}
