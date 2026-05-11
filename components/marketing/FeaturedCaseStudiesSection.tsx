import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getFeaturedCaseStudies } from '@/lib/db';
import { CaseStudyCard } from './CaseStudyCard';

export async function FeaturedCaseStudiesSection() {
  const caseStudies = await getFeaturedCaseStudies(3);

  if (!caseStudies.length) {
    return null;
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Real results from companies like yours
            </p>
          </div>
          <Link href="/portofoliu">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              slug={study.slug}
              title={study.title}
              clientName={study.client_name}
              clientIndustry={study.client_industry}
              description={study.description}
              results={study.results}
              featuredImage={study.featured_image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
