export type ProblemPageSymptom = string;

export type ProblemPageConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  problemStatement: string;
  symptoms: ProblemPageSymptom[];
  whyItMatters: string;
  solutionOverview: string;
  recommendedServices: string[];
  exampleScenario: { title: string; body: string };
  beforeAfter: { before: string; after: string };
  faq: { q: string; a: string }[];
  ctaText: string;
  relatedProblemSlugs: string[];
  relatedServiceSlugs: string[];
  visualType: string;
};

const problemPages: Record<string, ProblemPageConfig> = {
  // Sprint 3
};

export { problemPages };
