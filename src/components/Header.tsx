"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", hash: "home" },
  { label: "Services", hash: "services" },
  { label: "About", hash: "about" },
  { label: "Skills", hash: "skills" },
] as const;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection();

  const sectionHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          {site.initials}
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-card/90 p-1 shadow-lg md:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isHome && activeSection === item.hash;
            return (
              <Link
                key={item.hash}
                href={sectionHref(item.hash)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/projects"
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              pathname.startsWith("/projects")
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:text-white",
            )}
          >
            Projects
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-2 md:hidden" aria-label="Mobile">
            <Link
              href="/projects"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Work
            </Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
