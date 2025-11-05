import HeroSection from "@/components/home/hero-section";
import MissionSection from "@/components/home/mission-section";
import ImpactStats from "@/components/home/impact-stats";
import FeaturedPrograms from "@/components/home/featured-programs";
import LatestPosts from "@/components/home/latest-posts";
import Testimonials from "@/components/home/testimonials";
import PartnerLogos from "@/components/home/partner-logos";
import Newsletter from "@/components/home/newsletter";
import FinalCTA from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactStats />
      <FeaturedPrograms />
      <LatestPosts />
      <Testimonials />
      <PartnerLogos />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
