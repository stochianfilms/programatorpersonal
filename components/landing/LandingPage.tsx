import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProblemSection } from "./ProblemSection";
import { BeforeAfterSection } from "./BeforeAfterSection";
import { SolutionSection } from "./SolutionSection";
import { WorkflowBuilder } from "./WorkflowBuilder";
import { ServicesSection } from "./ServicesSection";
import { ServicesHubSection } from "./ServicesHubSection";
import { ProblemPickerSection } from "./ProblemPickerSection";
import { AudienceSection } from "./AudienceSection";
import { ProcessSection } from "./ProcessSection";
import { UseCasesSection } from "./UseCasesSection";
import { LiveMockupsSection } from "./LiveMockupsSection";
import { TrustSection } from "./TrustSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { ContactSection } from "./ContactSection";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { ScrollReveal } from "./ScrollReveal";

export default function LandingPage() {
  return (
    <div className="page" id="top">
      <Header />
      <HeroSection />
      <ProblemSection />
      <BeforeAfterSection />
      <SolutionSection />
      <WorkflowBuilder />
      <ServicesSection />
      <ServicesHubSection />
      <ProblemPickerSection />
      <AudienceSection />
      <ProcessSection />
      <UseCasesSection />
      <LiveMockupsSection />
      <TrustSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
      <ScrollReveal />
    </div>
  );
}
