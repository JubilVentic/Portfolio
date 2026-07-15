export const site = {
  name: "Jubil Leo Ventic",
  initials: "JV",
  title: "Full-Stack Developer & SEO Specialist",
  tagline:
    "Full-Stack Developer and Technical SEO Specialist with over five years of experience developing responsive, high-performance websites and implementing data-driven SEO strategies.",
  email: "jubil.ventic@gmail.com",
  linkedin: "https://www.linkedin.com/in/jubil-ventic-789469331/",
  github: "https://github.com/JubilVentic",
  resumeUrl: "/resume.pdf",
  stats: [
    { value: "5+", label: "Years as SEO Specialist" },
    { value: "8+", label: "Projects Completed" },
    { value: "5+", label: "Clients Served" },
  ],
  approach: [
    {
      step: "01",
      title: "Discover & audit",
      description: "Understand goals, users, and current performance — code and search visibility.",
    },
    {
      step: "02",
      title: "Build & optimize",
      description: "Ship clean, maintainable software with performance and SEO baked in from day one.",
    },
    {
      step: "03",
      title: "Measure & iterate",
      description: "Track Core Web Vitals, rankings, and conversions — then refine what works.",
    },
  ],
  services: [
    {
      title: "Web Development",
      description:
        "Design and build responsive, high-performance websites and modern web apps — from Figma UI to production code.",
      tags: ["React", "TypeScript"],
    },
    {
      title: "Technical SEO",
      description:
        "Website audits, schema markup, on-page optimization, and Search Console monitoring to improve visibility and rankings.",
      tags: ["Search Console", "Schema"],
    },
    {
      title: "Performance",
      description:
        "Speed and Core Web Vitals improvements so pages load faster, rank better, and convert more visitors.",
      tags: ["Lighthouse", "CWV"],
    },
    {
      title: "SEO Strategy",
      description:
        "Keyword research, competitor analysis, content optimization, and link building that drive measurable organic growth.",
      tags: ["Google Analytics", "Semrush"],
    },
  ],
  skills: [
    {
      category: "Frontend",
      tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    },
    {
      category: "Design",
      tags: ["Figma"],
    },
    {
      category: "Backend",
      tags: ["Node.js", "Next.js", "NestJS", "PHP", "Python"],
    },
    {
      category: "Databases",
      tags: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "GraphQL"],
    },
    {
      category: "Cloud & Hosting",
      tags: [
        "AWS",
        "Firebase",
        "Supabase",
        "Hostinger",
        "GoDaddy",
        "Docker",
      ],
    },
    {
      category: "SEO",
      tags: [
        "Google Search Console",
        "Google Analytics",
        "Semrush",
        "Ahrefs",
        "Moz",
        "Screaming Frog",
      ],
    },
  ],
  about: [
    "Full-Stack Developer and Technical SEO Specialist with over five years of experience developing responsive, high-performance websites and implementing data-driven SEO strategies. Skilled in designing and building modern web applications, optimizing website performance, and improving search engine visibility through technical and on-page SEO.",
    "Passionate about creating user-focused digital experiences that combine clean code, intuitive design, and measurable business growth.",
  ],
} as const;
