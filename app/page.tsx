import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/hero/hero";
import { TrustStrip } from "@/components/hero/trust-strip";
import { Features } from "@/components/features/features";
import { HowItWorks } from "@/components/how-it-works/how-it-works";
import { Referral } from "@/components/referral/referral";
import { Roadmap } from "@/components/roadmap/roadmap";
import { FinalCta } from "@/components/layout/final-cta";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink-950">
      <SiteHeader />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Features />
        <HowItWorks />
        <Referral />
        <Roadmap />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
