export type IndustryPageConfig = {
  slug: string;
  industryName: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  operationalProblems: string[];
  usefulModules: { title: string; description: string }[];
  exampleWorkflows: { title: string; body: string }[];
  recommendedServices: string[];
  architectureModules: string[];
  beforeAfter: { before: string; after: string };
  faqs: { q: string; a: string }[];
  ctaText: string;
  relatedIndustrySlugs: string[];
  relatedServiceSlugs: string[];
  visualType: string;
};

const industryPages: Record<string, IndustryPageConfig> = {
  // Sprint 4
};

export { industryPages };
