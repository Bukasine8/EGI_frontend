import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectsMap from "@/components/projects/projects-map";
import ProjectsCTA from "@/components/projects/projects-cta";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsMap />
      <ProjectsCTA />
    </>
  );
}
