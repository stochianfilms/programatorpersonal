import { NextResponse } from 'next/server';
import { siteConfig } from '@/content/site';
import { getServices, getCaseStudies, getBlogArticles } from '@/lib/db';

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  const pages = new Set<string>(siteConfig.sitemap.staticPages);

  try {
    const [services, caseStudies, articles] = await Promise.all([
      getServices(),
      getCaseStudies(),
      getBlogArticles(100),
    ]);

    services.forEach((s: { slug?: string }) => { if (s?.slug) pages.add(`/servicii/${s.slug}`); });
    caseStudies.forEach((c: { slug?: string }) => { if (c?.slug) pages.add(`/portofoliu/${c.slug}`); });
    articles.forEach((a: { slug?: string }) => { if (a?.slug) pages.add(`/blog/${a.slug}`); });
  } catch (err) {
    // fail gracefully — sitemap will at least include static pages
    console.error('Sitemap generation error:', err);
  }

  const urlEntries = Array.from(pages)
    .map((path) => {
      const loc = `${siteUrl}${path}`;
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
