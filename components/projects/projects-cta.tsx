import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary egi-section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 egi-container text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="mb-6 font-heading text-4xl font-bold text-white lg:text-5xl">
            Be Part of Our Next Project
          </h2>
          <p className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-white/90 lg:text-xl">
            Every project we undertake is made possible by the support of 
            individuals, organizations, and communities who share our vision. 
            Join us in creating lasting change.
          </p>
        </div>

        {/* Action Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-white">Fund a Project</h3>
            <p className="mb-4 font-body text-sm text-white/80">
              Support specific projects that align with your values and make a direct impact
            </p>
            <Link href="/donate">
              <Button
                size="sm"
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                Donate Now
              </Button>
            </Link>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-white">Join Our Team</h3>
            <p className="mb-4 font-body text-sm text-white/80">
              Volunteer your skills and time to work directly on project implementation
            </p>
            <Link href="/get-involved#volunteer">
              <Button
                size="sm"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-primary"
              >
                Volunteer
              </Button>
            </Link>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-white">Propose a Project</h3>
            <p className="mb-4 font-body text-sm text-white/80">
              Have an idea for a community project? Share it with us and let's make it happen
            </p>
            <Link href="/contact">
              <Button
                size="sm"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="mb-12 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
          <h3 className="mb-6 font-heading text-2xl font-bold text-white">
            Project Impact Highlights
          </h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-secondary">100%</div>
              <div className="font-body text-sm text-white/80">
                Project Completion Rate
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-accent">₦2.5B+</div>
              <div className="font-body text-sm text-white/80">
                Total Project Investment
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">50K+</div>
              <div className="font-body text-sm text-white/80">
                Lives Directly Impacted
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/projects">
            <Button
              size="lg"
              className="group h-14 bg-secondary px-8 text-lg font-semibold text-primary shadow-2xl transition-all hover:scale-105 hover:bg-secondary/90"
            >
              <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              View All Projects
            </Button>
          </Link>

          <Link href="/get-involved">
            <Button
              size="lg"
              variant="outline"
              className="group h-14 border-2 border-white bg-transparent px-8 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-white/10"
            >
              <Users className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Get Involved
            </Button>
          </Link>
        </div>

        {/* Bottom Message */}
        <div className="mt-12">
          <p className="font-body text-white/80">
            Together, we can turn ideas into reality and create sustainable 
            solutions that benefit communities for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}
