import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/ServicePage";
import { services } from "@/data/services";

const service = services["platforma-rezervari"];

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "https://programatorpersonal.ro/platforma-rezervari" },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    type: "website",
  },
};

export default function PlataformaRezervariPage() {
  return <ServicePage service={service} />;
}
