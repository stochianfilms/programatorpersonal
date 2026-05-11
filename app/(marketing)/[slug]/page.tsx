import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { problemPages } from "@/data/problemPages";
import { industryPages } from "@/data/industryPages";
import { ServicePage } from "@/components/marketing/ServicePage";
import { ProblemPage } from "@/components/marketing/ProblemPage";
import { IndustryPage } from "@/components/marketing/IndustryPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(services).map((slug) => ({ slug }));
  const problemSlugs = Object.keys(problemPages).map((slug) => ({ slug }));
  const industrySlugs = Object.keys(industryPages).map((slug) => ({ slug }));
  return [...serviceSlugs, ...problemSlugs, ...industrySlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (services[slug]) {
    const svc = services[slug];
    return {
      title: svc.seo.title,
      description: svc.seo.description,
      alternates: { canonical: `https://programatorpersonal.ro/${slug}` },
      openGraph: {
        title: svc.seo.title,
        description: svc.seo.description,
        type: "website",
      },
    };
  }

  if (problemPages[slug]) {
    const pg = problemPages[slug];
    return {
      title: pg.seoTitle,
      description: pg.seoDescription,
      alternates: { canonical: `https://programatorpersonal.ro/${slug}` },
      openGraph: {
        title: pg.seoTitle,
        description: pg.seoDescription,
        type: "website",
      },
    };
  }

  if (industryPages[slug]) {
    const pg = industryPages[slug];
    return {
      title: pg.seoTitle,
      description: pg.seoDescription,
      alternates: { canonical: `https://programatorpersonal.ro/${slug}` },
      openGraph: {
        title: pg.seoTitle,
        description: pg.seoDescription,
        type: "website",
      },
    };
  }

  return {};
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  if (services[slug]) {
    return <ServicePage service={services[slug]} />;
  }

  if (problemPages[slug]) {
    return <ProblemPage problem={problemPages[slug]} />;
  }

  if (industryPages[slug]) {
    return <IndustryPage industry={industryPages[slug]} />;
  }

  notFound();
}
