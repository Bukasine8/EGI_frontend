import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
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
            Ready to Make a Difference?
          </h2>
          <p className="text-lg leading-relaxed text-white/90 lg:text-xl">
            Now that you know our story, our values, and our team, we invite you 
            to become part of our mission. Together, we can create the sustainable 
            future our communities deserve.
          </p>
        </div>

        {/* Action Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Donate</h3>
            <p className="text-sm text-white/80">
              Support our programs with a financial contribution
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Volunteer</h3>
            <p className="text-sm text-white/80">
              Join our team and contribute your skills and time
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Partner</h3>
            <p className="text-sm text-white/80">
              Collaborate with us on impactful projects
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/donate">
            <Button
              size="lg"
              className="group h-14 bg-white px-8 text-lg font-semibold text-primary shadow-2xl transition-all hover:scale-105 hover:bg-white/95"
            >
              <Heart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Donate Now
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

          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="group h-14 border-2 border-white bg-transparent px-8 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-white/10"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Bottom Message */}
        <div className="mt-12">
          <p className="text-white/80">
            Every action, no matter how small, contributes to our collective impact. 
            Join thousands of others who are already part of the EGI family.
          </p>
        </div>
      </div>
    </section>
  );
}
