"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Handshake, ArrowRight, Building2, Users, Target, Zap } from "lucide-react";

export default function BecomePartnerCTA() {
  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Sponsorship",
      description: "Fund our programs and get brand visibility",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Technical Partnership",
      description: "Share expertise and innovative solutions",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "CSR Collaboration",
      description: "Align with our sustainable development goals",
      color: "text-green-500"
    },
    {
      icon: Target,
      title: "In-kind Support",
      description: "Provide resources, equipment, or services",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6">
            <Handshake className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Make a{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Difference?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join our network of visionary partners who are committed to creating sustainable 
            change and empowering communities across Nigeria and beyond.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnershipTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={index}
                className="egi-glass-card p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                  <IconComponent className={`w-6 h-6 ${type.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-sm text-gray-300">{type.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/get-involved#partner-with-us">
              <Button className="egi-button-cyber text-lg px-8 py-4 group">
                <Handshake className="w-5 h-5 mr-2" />
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="egi-button-ghost text-lg px-8 py-4 group">
                <Users className="w-5 h-5 mr-2" />
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about partnership opportunities? Our team is ready to discuss 
            how we can work together to create meaningful impact.
          </p>
        </div>

        {/* Impact Preview */}
        <div className="mt-16 egi-glass-card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Partnership Impact Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">500K+</div>
              <div className="text-gray-300">Lives Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-gray-300">Communities Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">₦2.5B+</div>
              <div className="text-gray-300">Impact Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
