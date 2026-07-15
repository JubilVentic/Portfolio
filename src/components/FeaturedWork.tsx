import Image from "next/image";
import Link from "next/link";
import { projects, featuredSlugs } from "@/data/projects";
import { BentoCard } from "@/components/BentoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";

const featured = projects.filter((p) => featuredSlugs.includes(p.slug));

export function FeaturedWork() {
  return (
    <section className="border-t border-white/[0.06] bg-card/20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected projects"
            description="Case studies spanning engineering depth and measurable SEO impact."
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-semibold text-accent hover:underline"
          >
            View all projects →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <BentoCard
              key={project.slug}
              className="flex h-full flex-col overflow-hidden p-0 transition-transform hover:-translate-y-0.5"
            >
              {project.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06] bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center border-b border-white/[0.06] bg-gradient-to-br from-zinc-800 to-zinc-950">
                  <span className="text-sm text-zinc-600">Preview coming soon</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.06] pt-4">
                  <Link
                    href={`/projects#${project.slug}`}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    Case study
                  </Link>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-300 hover:text-white"
                    >
                      Visit site ↗
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-400 hover:text-white"
                    >
                      Repo ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
