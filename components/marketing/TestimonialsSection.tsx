import { getFeaturedTestimonials } from '@/lib/db';
import { TestimonialCard } from './TestimonialCard';

export async function TestimonialsSection() {
  const testimonials = await getFeaturedTestimonials(3);

  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by companies across Romania
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.client_name}
              company={testimonial.client_company}
              role={testimonial.client_role}
              image={testimonial.client_image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
