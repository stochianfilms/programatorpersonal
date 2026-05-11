import { getServices } from '@/lib/db';
import { ServiceCard } from './ServiceCard';
import { siteConfig } from '@/content/site';

export async function ServicesSection() {
  const services = await getServices();

  if (!services.length) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicii software custom
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.brand.shortDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              slug={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              priceStartsAt={service.price_starts_at}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
