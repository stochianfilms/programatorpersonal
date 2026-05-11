import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/ServicePage";
import { services } from "@/data/services";

const service = services["generator-contracte"];

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "https://programatorpersonal.ro/generator-contracte" },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    type: "website",
  },
};

export default function GeneratorContractePage() {
  return <ServicePage service={service} />;
}
