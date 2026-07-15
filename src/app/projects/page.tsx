import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { BentoCard } from "@/components/BentoCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected case studies in full-stack development and technical SEO.",
};

export default function ProjectsPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies"
          description="Engineering notes, SEO outcomes, and metrics from recent work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <BentoCard key={project.slug} className="flex flex-col overflow-hidden p-0">
              {project.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06] bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    priority={index < 3}
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center border-b border-white/[0.06] bg-gradient-to-br from-zinc-800 to-zinc-950">
                  <span className="text-sm text-zinc-600">Preview coming soon</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-zinc-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-white hover:opacity-90"
                    >
                      Visit site
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-zinc-300 hover:bg-white/5"
                    >
                      View repo
                    </a>
                  ) : null}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

        <div className="mt-20 space-y-16">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-24 border-t border-white/[0.06] pt-16"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-display text-3xl font-semibold text-white">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site ↗
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300 hover:bg-white/5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View repo ↗
                    </a>
                  ) : null}
                </div>
              </div>

              {project.image ? (
                <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 72rem"
                  />
                </div>
              ) : null}

              <p className="mt-6 max-w-3xl text-zinc-400">{project.description}</p>
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                <BentoCard>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Engineering
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.engineering}
                  </p>
                </BentoCard>
                <BentoCard>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                    SEO
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.seo}
                  </p>
                </BentoCard>
              </div>
              <div className="mt-6 flex flex-wrap gap-6">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-2xl font-semibold text-white">
                      {m.value}
                    </p>
                    <p className="text-xs text-zinc-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-zinc-500">
          <Link href="/contact" className="text-accent hover:underline">
            Start a project
          </Link>
        </p>
      </div>
    </main>
  );
}
