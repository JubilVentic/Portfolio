export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://jubilventic.dev";
}

export const seo = {
  title: "Jubil Leo Ventic — Full-Stack Developer & SEO Specialist", // 56
  description:
    "Full-stack developer and technical SEO specialist with 5+ years building fast websites and data-driven SEO strategies that grow traffic and conversions.", // 152
  keywords: [
    "Jubil Leo Ventic",
    "Full-Stack Developer",
    "SEO Specialist",
    "Technical SEO",
    "Next.js",
    "React",
    "Web Developer",
    "Philippines",
    "Portfolio",
  ],
  pages: {
    projects: {
      title: "Jubil Leo Ventic Projects | Full-Stack & SEO Cases", // 50
      description:
        "Explore full-stack and technical SEO case studies by Jubil Leo Ventic — web apps, client websites, plus organic growth results that convert.", // 140
    },
    contact: {
      title: "Contact Jubil Leo Ventic | Full-Stack Developer & SEO", // 53
      description:
        "Contact Jubil Leo Ventic for full-stack web development and technical SEO projects. Share your goals, timeline, and tech stack to get started.", // 142
    },
  },
};
