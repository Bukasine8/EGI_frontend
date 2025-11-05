import GalleryHero from "@/components/gallery/gallery-hero";
import GalleryGrid from "@/components/gallery/gallery-grid";
import VideoSection from "@/components/gallery/video-section";
import GalleryStats from "@/components/gallery/gallery-stats";

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <VideoSection />
      <GalleryStats />
    </>
  );
}
