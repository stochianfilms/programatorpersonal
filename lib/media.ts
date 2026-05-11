import { siteConfig, type MediaItem, type MediaKey } from "@/content/site";
import type { ServiceConfig, VisualType } from "@/data/services";

export type FallbackVisual = {
  type: VisualType;
  label: string;
};

const fallbackLabels: Record<VisualType, string> = {
  "crm-pipeline": "Pipeline CRM",
  "automation-flow": "Flux automatizat",
  "web-app-architecture": "Arhitectură aplicație",
  "contract-preview": "Generator contracte",
  "dashboard-kpi": "Dashboard KPI",
  "booking-calendar": "Calendar rezervări",
  "client-portal": "Portal client",
  "ecommerce-checkout": "Checkout custom",
  "maintenance-system": "Mentenanță software",
};

export function getMedia(key?: MediaKey | string | null): MediaItem | null {
  if (!key) return null;
  return siteConfig.media[key as MediaKey] ?? null;
}

export function getFallbackVisual(type: VisualType): FallbackVisual {
  return {
    type,
    label: fallbackLabels[type],
  };
}

export function getServiceMedia(service: Pick<ServiceConfig, "visual">): {
  media: MediaItem | null;
  fallback: FallbackVisual;
  caption?: string;
} {
  const media = getMedia(service.visual.mediaKey);

  return {
    media,
    fallback: getFallbackVisual(service.visual.type),
    caption: service.visual.caption ?? media?.caption,
  };
}
