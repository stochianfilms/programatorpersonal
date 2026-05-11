export type FreeTool = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  relatedServiceSlug: string;
  relatedServiceLabel: string;
  sourcePage: string;
};

export const freeTools: FreeTool[] = [
  {
    slug: "calculator-timp-pierdut",
    title: "Calculator de timp pierdut",
    shortTitle: "Calculator timp",
    description: "Calculează câte ore și câți bani pierzi lunar cu procese manuale.",
    relatedServiceSlug: "automatizari-business",
    relatedServiceLabel: "Automatizări business",
    sourcePage: "calculator_timp_pierdut",
  },
  {
    slug: "quiz-crm-custom",
    title: "Quiz: Ai nevoie de CRM custom?",
    shortTitle: "Quiz CRM",
    description: "5 întrebări simple care îți spun dacă un CRM custom ți-ar ajuta firma.",
    relatedServiceSlug: "crm-custom",
    relatedServiceLabel: "CRM custom",
    sourcePage: "quiz_crm_custom",
  },
  {
    slug: "generator-brief-aplicatie",
    title: "Generator brief aplicație",
    shortTitle: "Generator brief",
    description: "Completezi un formular ghidat și primești un brief structurat pentru aplicația ta.",
    relatedServiceSlug: "aplicatii-web-custom",
    relatedServiceLabel: "Aplicații web custom",
    sourcePage: "generator_brief_aplicatie",
  },
  {
    slug: "checklist-automatizari",
    title: "Checklist automatizări",
    shortTitle: "Checklist",
    description: "Bifezi ce faci manual și afli ce poți automatiza primul în firma ta.",
    relatedServiceSlug: "automatizari-business",
    relatedServiceLabel: "Automatizări business",
    sourcePage: "checklist_automatizari",
  },
];
