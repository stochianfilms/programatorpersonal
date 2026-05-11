'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingTierCardProps {
  name: string;
  description?: string;
  price: number;
  currency?: string;
  billingPeriod?: string;
  features?: string[];
  highlighted?: boolean;
  callToAction?: string;
}

export function PricingTierCard({
  name,
  description,
  price,
  currency = 'EUR',
  billingPeriod = 'one-time',
  features = [],
  highlighted = false,
  callToAction = 'Get Started',
}: PricingTierCardProps) {
  const billingLabel = billingPeriod === 'one-time' ? '' : `/${billingPeriod}`;

  return (
    <Card
      className={`relative flex flex-col transition-all ${
        highlighted
          ? 'ring-2 ring-blue-500 shadow-xl scale-105 md:scale-110'
          : 'hover:shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        <div className="mt-4">
          <span className="text-4xl font-bold">{currency}</span>
          <span className="text-4xl font-bold ml-1">{price.toLocaleString()}</span>
          <span className="text-gray-600 ml-2">{billingLabel}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        {features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? 'default' : 'outline'}
          size="lg"
        >
          {callToAction}
        </Button>
      </CardFooter>
    </Card>
  );
}
