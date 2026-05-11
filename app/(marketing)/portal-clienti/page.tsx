import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/ServicePage";
import { services } from "@/data/services";

const service = services["portal-clienti"];

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "https://programatorpersonal.ro/portal-clienti" },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    type: "website",
  },
};

export default function PortalClientiPage() {
  return <ServicePage service={service} />;
}
