import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  alternates: { canonical: "/" },
};

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
