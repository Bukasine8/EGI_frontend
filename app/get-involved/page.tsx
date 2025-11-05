import GetInvolvedHero from "@/components/get-involved/get-involved-hero";
import VolunteerSection from "@/components/get-involved/volunteer-section";
import MentorSection from "@/components/get-involved/mentor-section";
import PartnerSection from "@/components/get-involved/partner-section";
import FundraisingSection from "@/components/get-involved/fundraising-section";
import TestimonialsSection from "@/components/get-involved/testimonials-section";
import NewsletterSection from "@/components/get-involved/newsletter-section";

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedHero />
      <VolunteerSection />
      <MentorSection />
      <PartnerSection />
      <FundraisingSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
