'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  role?: string;
  image?: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  company,
  role,
  image,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        {rating && (
          <div className="flex gap-1 mb-3">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-700 italic leading-relaxed">&quot;{quote}&quot;</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          {image && (
            <img
              src={image}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            {(company || role) && (
              <p className="text-sm text-gray-600">
                {role}
                {role && company && ' at '}
                {company}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
