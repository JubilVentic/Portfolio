import { site } from "@/data/site";
import { BentoCard } from "@/components/BentoCard";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering meets search strategy"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-zinc-400">
            {site.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {site.stats.map((stat) => (
              <BentoCard key={stat.label} className="p-4 text-center">
                <p className="font-display text-2xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
              </BentoCard>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {site.approach.map((item) => (
            <BentoCard key={item.step}>
              <span className="text-xs font-semibold text-accent">{item.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
