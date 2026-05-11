import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const sitemapUrl = siteUrl ? `${siteUrl.replace(/\/$/, '')}/sitemap.xml` : '/sitemap.xml';

  const body = [`User-agent: *`, `Disallow:`, `Sitemap: ${sitemapUrl}`].join('\n');

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
