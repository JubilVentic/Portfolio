import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { BentoCard } from "@/components/BentoCard";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: seo.pages.contact.title,
  },
  description: seo.pages.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: seo.pages.contact.title,
    description: seo.pages.contact.description,
    url: "/contact",
  },
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
