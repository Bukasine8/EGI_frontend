import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function ProgramsCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary px-6 py-24 lg:px-8 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            Join Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-white/90 lg:text-xl">
            Every program we run depends on the support of people like you. 
            Whether through donations, volunteering, or partnerships, your 
            involvement makes our work possible.
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
            <h3 className="mb-2 text-xl font-bold text-white">Fund a Program</h3>
            <p className="mb-4 text-sm text-white/80">
              Support specific programs that align with your values and interests
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
            <h3 className="mb-2 text-xl font-bold text-white">Volunteer</h3>
            <p className="mb-4 text-sm text-white/80">
              Contribute your skills and time to make a direct impact
            </p>
            <Link href="/get-involved#volunteer">
              <Button
                size="sm"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-primary"
              >
                Join Us
              </Button>
            </Link>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Partner</h3>
            <p className="mb-4 text-sm text-white/80">
              Collaborate with us on impactful community projects
            </p>
            <Link href="/get-involved#partner">
              <Button
                size="sm"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-primary"
              >
                Partner
              </Button>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h3 className="mb-4 text-2xl font-bold text-white">
            Stay Updated on Our Programs
          </h3>
          <p className="mb-6 text-white/90">
            Get monthly updates on program progress, success stories, and new initiatives
          </p>
          
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-0 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-secondary hover:bg-secondary/90">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12">
          <p className="text-white/80">
            Together, we can create lasting change that transforms communities 
            and builds a sustainable future for all.
          </p>
        </div>
      </div>
    </section>
  );
}
