import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getFeaturedArticles } from '@/lib/db';
import { BlogCard } from './BlogCard';

export async function FeaturedArticlesSection() {
  const articles = await getFeaturedArticles(3);

  if (!articles.length) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Insights on digital transformation and IT solutions
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline">Read All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              author={article.author_name}
              readingTime={article.reading_time_minutes}
              publishedAt={article.published_at}
              featuredImage={article.featured_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
