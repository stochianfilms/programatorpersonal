import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/ServicePage";
import { services } from "@/data/services";

const service = services["aplicatii-web-custom"];

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "https://programatorpersonal.ro/aplicatii-web-custom" },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    type: "website",
  },
};

export default function AplicatiiWebCustomPage() {
  return <ServicePage service={service} />;
}
