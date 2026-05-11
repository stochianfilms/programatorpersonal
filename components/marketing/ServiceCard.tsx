'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  priceStartsAt?: number;
  features?: string[];
}

export function ServiceCard({
  slug,
  title,
  description,
  icon,
  priceStartsAt,
  features,
}: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        {icon && <div className="text-4xl mb-4">{icon}</div>}
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <span className="text-green-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {priceStartsAt && (
          <span className="text-sm font-semibold text-gray-600">
            From €{priceStartsAt.toLocaleString()}
          </span>
        )}
        <Link href={`/servicii/${slug}`}>
          <Button variant="outline">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
