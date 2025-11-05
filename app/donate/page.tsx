import DonateHero from "@/components/donate/donate-hero";
import DonationForm from "@/components/donate/donation-form";
import ProjectSelector from "@/components/donate/project-selector";
import ImpactPreview from "@/components/donate/impact-preview";
import RecurringDonations from "@/components/donate/recurring-donations";
import DonationTransparency from "@/components/donate/donation-transparency";
import DonorTestimonials from "@/components/donate/donor-testimonials";

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <div className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <DonationForm />
              <ProjectSelector />
            </div>
            <div className="lg:col-span-1 space-y-8">
              <ImpactPreview />
              <RecurringDonations />
            </div>
          </div>
        </div>
      </div>
      <DonationTransparency />
      <DonorTestimonials />
    </>
  );
}
