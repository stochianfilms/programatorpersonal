import Hero from '@/components/marketing/Hero';
import { ServicesSection } from '@/components/marketing/ServicesSection';
import { FeaturedCaseStudiesSection } from '@/components/marketing/FeaturedCaseStudiesSection';
import { TestimonialsSection } from '@/components/marketing/TestimonialsSection';
import { FeaturedArticlesSection } from '@/components/marketing/FeaturedArticlesSection';
import { PricingSection } from '@/components/marketing/PricingSection';
import CTA from '@/components/marketing/CTA';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Case Studies */}
      <FeaturedCaseStudiesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Featured Articles */}
      <FeaturedArticlesSection />

      {/* CTA */}
      <CTA />
    </main>
  );
}
