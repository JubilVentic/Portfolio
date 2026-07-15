import { site } from "@/data/site";
import { BentoCard } from "@/components/BentoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-white/[0.06] bg-card/20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I can help you build"
          description="Full-stack development paired with technical SEO — shipped as one cohesive practice."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {site.services.map((service) => (
            <BentoCard key={service.title} className="flex flex-col gap-4">
              <h3 className="font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
