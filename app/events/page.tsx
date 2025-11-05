import EventsHero from "@/components/events/events-hero";
import EventsCalendar from "@/components/events/events-calendar";
import UpcomingEvents from "@/components/events/upcoming-events";
import PastEvents from "@/components/events/past-events";
import EventsAnalytics from "@/components/events/events-analytics";
import EventsCTA from "@/components/events/events-cta";

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsCalendar />
      <UpcomingEvents />
      <PastEvents />
      <EventsAnalytics />
      <EventsCTA />
    </>
  );
}
