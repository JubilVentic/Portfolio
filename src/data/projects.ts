export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  engineering: string;
  seo: string;
  metrics: { label: string; value: string }[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "modern-pix",
    title: "Modern Pix — Mirror Photobooth Website",
    description:
      "Marketing website for Modern Pix, the first Mirror Photobooth rental in Iligan and a trusted photobooth provider across Mindanao for weddings, birthdays, corporate events, and celebrations.",
    tags: ["Next.js", "React", "Technical SEO"],
    engineering:
      "Built a conversion-focused marketing site with a full-bleed hero, package discovery, booking CTA flow, testimonials, and mobile-responsive layouts optimized for event inquiries.",
    seo: "Structured for local discovery around Iligan and Mindanao photobooth searches, with clear page hierarchy, strong CTAs, and performance-minded delivery on Vercel.",
    metrics: [
      { label: "Year", value: "2026" },
      { label: "Focus", value: "Brand + Bookings" },
      { label: "Type", value: "Business site" },
    ],
    image: "/images/projects/modern-pix.png",
    liveUrl: "https://modernpix.vercel.app/",
    repoUrl: "https://github.com/JubilVentic/ModernPix",
  },
  {
    slug: "my-tibanga-portal",
    title: "MyTibangaPortal — Barangay Document & Profiling System",
    description:
      "A full-stack web app for Barangay Tibanga, Iligan City that digitizes resident profiling and barangay document requests. Residents can request documents, track status, and record payments; staff manage records, approve requests, and handle release through an admin panel.",
    tags: ["Next.js", "React", "PostgreSQL", "Supabase"],
    engineering:
      "Designed and built the system end-to-end as full-stack developer — frontend, APIs, database, JWT auth, admin workflows, and deployment. Stack includes Next.js, React, PostgreSQL/Supabase, with optional face recognition, OCR, SMS, and reporting/export tools.",
    seo: "Deployed as a public-facing civic portal with clear information architecture for residents and staff, optimized for usability and reliable access on the web.",
    metrics: [
      { label: "Role", value: "Full-stack" },
      { label: "Stack", value: "Next.js" },
      { label: "Type", value: "Gov / civic" },
    ],
    image: "/images/projects/my-tibanga.png",
    liveUrl: "https://my-tibanga.vercel.app/",
    repoUrl: "https://github.com/tibangailigancity/MyTibanga",
  },
  {
    slug: "gideon-klogo-portfolio",
    title: "Gideon Klogo Portfolio Website",
    description:
      "Personal portfolio site showcasing Gideon Klogo’s professional background, achievements, and creative work under the Klogo Brand.",
    tags: ["React", "Figma", "Technical SEO"],
    engineering:
      "Designed the UI/UX in Figma and developed responsive pages for desktop, tablet, and mobile. Built dedicated sections for his work and Klogo Brand design portfolio, with performance and load-speed optimization throughout.",
    seo: "Structured the site for clarity and discoverability, with clean page architecture and performance-focused delivery to support a strong personal brand presence.",
    metrics: [
      { label: "Year", value: "2026" },
      { label: "Focus", value: "UI/UX + Build" },
      { label: "Type", value: "Portfolio" },
    ],
    image: "/images/projects/gideon-klogo.png",
    liveUrl: "https://www.gideonklogo.com/",
    repoUrl: "https://github.com/JubilVentic/Gideon",
  },
  {
    slug: "ember-oak-cafe",
    title: "Ember & Oak Café Official Website",
    description:
      "Official website for Ember & Oak Café — an engaging online experience for brand identity, menu offerings, and customer information.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    engineering:
      "Designed the full interface and UX, then built a responsive site usable across devices. Created brand-aligned layouts with strong accessibility and usability practices.",
    seo: "Implemented SEO-friendly site architecture and performance optimization so the café can be found and experienced smoothly on search and on every screen size.",
    metrics: [
      { label: "Year", value: "2026" },
      { label: "Focus", value: "Brand + SEO" },
      { label: "Type", value: "Business site" },
    ],
    image: "/images/projects/ember-oak.png",
    liveUrl: "https://www.emberoak.cafe/",
    repoUrl: "https://github.com/JubilVentic/Ember-Oak",
  },
  {
    slug: "seo-client-work",
    title: "Technical SEO Client Engagements",
    description:
      "Multi-year SEO work across clients including Sky Flooring USA, Reliance Pest Control Brisbane, Concise Computer Consulting, and Entrepreneur LLC.",
    tags: ["Technical SEO", "Google Analytics", "Schema"],
    engineering:
      "Collaborated with developers and content teams so SEO best practices were built into sites — metadata, headings, internal linking, structured data, and performance tracking.",
    seo: "Ran keyword research and competitor analysis, website audits, on-page and off-page SEO, schema markup, link building, and ongoing reporting via Search Console and analytics.",
    metrics: [
      { label: "Clients", value: "4+" },
      { label: "Experience", value: "2021–Present" },
      { label: "Focus", value: "Organic growth" },
    ],
  },
];

export const featuredSlugs = [
  "modern-pix",
  "my-tibanga-portal",
  "gideon-klogo-portfolio",
];
