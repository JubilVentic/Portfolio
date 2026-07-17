import { getBaseUrl } from "@/lib/seo";

export function GET() {
  const baseUrl = getBaseUrl();
  const now = new Date().toISOString();

  const urls = [
    { loc: baseUrl, changefreq: "monthly", priority: "1.0" },
    { loc: `${baseUrl}/projects`, changefreq: "monthly", priority: "0.8" },
    { loc: `${baseUrl}/contact`, changefreq: "yearly", priority: "0.6" },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
