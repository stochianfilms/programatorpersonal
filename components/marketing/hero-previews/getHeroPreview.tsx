import type { ReactNode } from "react";
import { AutomationHeroPreview } from "./AutomationHeroPreview";
import { BookingHeroPreview } from "./BookingHeroPreview";
import { ContractHeroPreview } from "./ContractHeroPreview";
import { CustomerHeroPreview } from "./CustomerHeroPreview";
import { DashboardHeroPreview } from "./DashboardHeroPreview";
import { EcommerceHeroPreview } from "./EcommerceHeroPreview";
import { GenericSystemHeroPreview } from "./GenericSystemHeroPreview";
import { IndustryHeroPreview } from "./IndustryHeroPreview";
import { PortalHeroPreview } from "./PortalHeroPreview";
import { ServiceTicketHeroPreview } from "./ServiceTicketHeroPreview";

const previewBySlug: Record<string, ReactNode> = {
  "crm-custom": <CustomerHeroPreview />,
  "automatizari-business": <AutomationHeroPreview />,
  "aplicatii-web-custom": <GenericSystemHeroPreview />,
  "generator-contracte": <ContractHeroPreview />,
  "dashboard-rapoarte": <DashboardHeroPreview />,
  "platforma-rezervari": <BookingHeroPreview />,
  "portal-clienti": <PortalHeroPreview />,
  "magazin-online-custom": <EcommerceHeroPreview />,
  "mentenanta-software": <ServiceTicketHeroPreview />,
  "scapa-de-excel": <GenericSystemHeroPreview />,
  "gestiune-clienti-firma": <CustomerHeroPreview />,
  "automatizare-contracte": <ContractHeroPreview />,
  "rapoarte-automate-firma": <DashboardHeroPreview />,
  "programari-online-firma": <BookingHeroPreview />,
  "portal-clienti-firma": <PortalHeroPreview />,
  "software-pentru-service-uri": <ServiceTicketHeroPreview />,
  "software-pentru-clinici": <BookingHeroPreview />,
  "software-pentru-saloane": <BookingHeroPreview />,
  "software-pentru-restaurante": <IndustryHeroPreview />,
  "software-pentru-agentii-imobiliare": <CustomerHeroPreview />,
  "software-pentru-firme-de-constructii": <IndustryHeroPreview />,
  "software-pentru-firme-de-evenimente": <BookingHeroPreview />,
  "software-pentru-ecommerce": <EcommerceHeroPreview />,
  servicii: <GenericSystemHeroPreview />,
  module: <GenericSystemHeroPreview />,
  "back-office-custom": <ServiceTicketHeroPreview />,
  "integrari-api": <AutomationHeroPreview />,
  solutii: <GenericSystemHeroPreview />,
  industrii: <IndustryHeroPreview />,
  preturi: <DashboardHeroPreview />,
  contact: <GenericSystemHeroPreview />,
};

export function getHeroPreview(slug: string) {
  return previewBySlug[slug] ?? <GenericSystemHeroPreview />;
}
