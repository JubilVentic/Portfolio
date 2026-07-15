import { site } from "@/data/site";
import { BentoCard } from "@/components/BentoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/[0.06] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and stacks I work with"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.skills.map((skill) => (
            <BentoCard key={skill.category}>
              <h3 className="font-display text-lg font-semibold text-white">
                {skill.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
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
