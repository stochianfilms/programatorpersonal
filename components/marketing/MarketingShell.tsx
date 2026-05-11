import { MarketingHeader } from "./MarketingHeader";
import { MarketingFooter } from "./MarketingFooter";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page" id="top">
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}
