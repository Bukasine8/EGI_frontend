"use client";

import { Button } from "@/components/ui/button";
import { Building2, Handshake, Globe } from "lucide-react";

export default function PartnerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Partner{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join leading organizations in creating sustainable impact through strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Building2 className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h3 className="text-xl font-bold text-primary mb-4">Corporate Partnership</h3>
            <p className="text-gray-600">
              Align your corporate social responsibility goals with our impactful programs.
            </p>
          </div>

          <div className="text-center">
            <Handshake className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-xl font-bold text-primary mb-4">Strategic Alliance</h3>
            <p className="text-gray-600">
              Collaborate on innovative solutions to address community challenges together.
            </p>
          </div>

          <div className="text-center">
            <Globe className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-primary mb-4">Global Network</h3>
            <p className="text-gray-600">
              Connect with international organizations working toward similar goals.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="egi-button-cyber">
            Explore Partnership
          </Button>
        </div>
      </div>
    </section>
  );
}
