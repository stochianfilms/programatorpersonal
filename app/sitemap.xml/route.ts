export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { siteConfig } from '@/content/site';
import { services } from '@/data/services';
import { problemPages } from '@/data/problemPages';
import { industryPages } from '@/data/industryPages';
import { modules } from '@/data/modules';
import { getCaseStudies, getBlogArticles } from '@/lib/db';

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

  Object.keys(services).forEach((slug) => pages.add(`/${slug}`));
  Object.keys(problemPages).forEach((slug) => pages.add(`/${slug}`));
  Object.keys(industryPages).forEach((slug) => pages.add(`/${slug}`));
  Object.keys(modules).forEach((slug) => pages.add(`/module/${slug}`));

  try {
    const [caseStudies, articles] = await Promise.all([
      getCaseStudies(),
      getBlogArticles(100),
    ]);

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
