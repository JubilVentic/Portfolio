import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { BentoCard } from "@/components/BentoCard";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for web development and SEO projects.`,
};

export default function ContactPage() {
  return (
    <main className="py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something measurable"
            description="Share a bit about your project — timeline, stack, and what success looks like."
          />
          <div className="mt-8 space-y-3 text-sm text-zinc-400">
            <p>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              <a href={site.linkedin} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {" · "}
              <a href={site.github} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </div>
        <BentoCard>
          <ContactForm />
        </BentoCard>
      </div>
    </main>
  );
}
