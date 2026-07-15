import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{site.title}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/projects" className="text-zinc-400 hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="text-zinc-400 hover:text-white">
            Contact
          </Link>
          <a
            href={site.linkedin}
            className="text-zinc-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            className="text-zinc-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm text-zinc-600">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
