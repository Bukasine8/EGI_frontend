import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/our-story";
import MissionVision from "@/components/about/mission-vision";
import CoreValues from "@/components/about/core-values";
import Timeline from "@/components/about/timeline";
import TeamSection from "@/components/about/team-section";
import ImpactNumbers from "@/components/about/impact-numbers";
import CallToAction from "@/components/about/call-to-action";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <ImpactNumbers />
      <Timeline />
      <TeamSection />
      <CallToAction />
    </>
  );
}