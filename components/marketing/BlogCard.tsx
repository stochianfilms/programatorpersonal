'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  author?: string;
  readingTime?: number;
  publishedAt?: string;
  featuredImage?: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  author,
  readingTime,
  publishedAt,
  featuredImage,
}: BlogCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      {featuredImage && (
        <div className="h-48 bg-gradient-to-br from-indigo-400 to-pink-600 flex items-center justify-center">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {category && (
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
              {category}
            </span>
          )}
          {readingTime && <span className="text-xs text-gray-600">{readingTime} min read</span>}
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-4 text-xs text-gray-600">
          {author && <span>{author}</span>}
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Read Article
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
