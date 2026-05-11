import { getPricingTiers } from '@/lib/db';
import { PricingTierCard } from './PricingTierCard';

export async function PricingSection() {
  const tiers = await getPricingTiers();

  if (!tiers.length) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible, always scalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {tiers.map((tier) => (
            <PricingTierCard
              key={tier.id}
              name={tier.name}
              description={tier.description}
              price={tier.price}
              currency={tier.currency}
              billingPeriod={tier.billing_period}
              features={tier.features}
              highlighted={tier.highlighted}
              callToAction={tier.call_to_action}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom quote? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
}
