'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  clientName: string;
  clientIndustry?: string;
  description: string;
  results?: {
    [key: string]: string;
  };
  featuredImage?: string;
}

export function CaseStudyCard({
  slug,
  title,
  clientName,
  clientIndustry,
  description,
  results,
  featuredImage,
}: CaseStudyCardProps) {
  const resultEntries = results ? Object.entries(results).slice(0, 2) : [];

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {featuredImage && (
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="line-clamp-2">{title}</CardTitle>
            <CardDescription>{clientName}</CardDescription>
          </div>
          {clientIndustry && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap">
              {clientIndustry}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{description}</p>
        {resultEntries.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {resultEntries.map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-3 rounded">
                <div className="text-lg font-bold text-green-600">{value}</div>
                <div className="text-xs text-gray-600 capitalize">{key.replace(/_/g, ' ')}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/portofoliu/${slug}`} className="w-full">
          <Button className="w-full">View Case Study</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
