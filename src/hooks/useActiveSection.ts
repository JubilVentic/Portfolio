"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "services", "about", "skills"] as const;
export type ActiveSection = (typeof SECTION_IDS)[number] | null;

export function useActiveSection(): ActiveSection {
  const [active, setActive] = useState<ActiveSection>("home");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (elements.length === 0) {
      setActive(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as ActiveSection);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export { SECTION_IDS };
