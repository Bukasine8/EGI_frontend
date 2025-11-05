import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary px-6 py-20 lg:px-8 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
          Ready to Make a Difference?
        </h2>

        {/* Description */}
        <p className="mb-10 text-lg leading-relaxed text-white/90 lg:text-xl">
          Your support helps us continue our mission to empower communities and
          change lives. Every contribution, big or small, makes a real impact.
        </p>

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

          <Link href="/contact">
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
      </div>
    </section>
  );
}
