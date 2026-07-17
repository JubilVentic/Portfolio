<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>XML Sitemap</title>
        <style>
          :root {
            color-scheme: dark;
          }
          body {
            margin: 0;
            padding: 2rem 1.25rem;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;
            background: #0a0a0b;
            color: #fafafa;
            line-height: 1.5;
          }
          main {
            max-width: 56rem;
            margin: 0 auto;
          }
          h1 {
            margin: 0 0 0.35rem;
            font-size: 1.5rem;
            font-weight: 700;
          }
          p {
            margin: 0 0 1.5rem;
            color: #a1a1aa;
            font-size: 0.95rem;
          }
          .table-wrap {
            overflow-x: auto;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1rem;
            background: #161618;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            min-width: 36rem;
          }
          th, td {
            padding: 0.85rem 1rem;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 0.9rem;
          }
          th {
            color: #a1a1aa;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-size: 0.75rem;
            background: rgba(255, 255, 255, 0.02);
          }
          tr:last-child td {
            border-bottom: none;
          }
          a {
            color: #5b8def;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority, .freq, .date {
            color: #d4d4d8;
            white-space: nowrap;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>XML Sitemap</h1>
          <p>This sitemap lists public pages for search engines. Crawlers still read the raw XML.</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last modified</th>
                  <th>Change frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td>
                      <a href="{s:loc}">
                        <xsl:value-of select="s:loc"/>
                      </a>
                    </td>
                    <td class="date">
                      <xsl:value-of select="substring(s:lastmod, 1, 10)"/>
                    </td>
                    <td class="freq">
                      <xsl:value-of select="s:changefreq"/>
                    </td>
                    <td class="priority">
                      <xsl:value-of select="s:priority"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
