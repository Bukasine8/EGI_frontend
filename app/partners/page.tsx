import PartnersHero from "@/components/partners/partners-hero";
import PartnerCarousel from "@/components/partners/partner-carousel";
import PartnerDirectory from "@/components/partners/partner-directory";
import ImpactHighlights from "@/components/partners/impact-highlights";
import PartnerStories from "@/components/partners/partner-stories";
import BecomePartnerCTA from "@/components/partners/become-partner-cta";

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnerCarousel />
      <ImpactHighlights />
      <PartnerDirectory />
      <PartnerStories />
      <BecomePartnerCTA />
    </>
  );
}
