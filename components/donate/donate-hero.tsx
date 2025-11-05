"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, TrendingUp, Shield, Award } from "lucide-react";

export default function DonateHero() {
  const trustIndicators = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level encryption"
    },
    {
      icon: Target,
      title: "100% Transparency",
      description: "Track your impact"
    },
    {
      icon: Award,
      title: "Certified NGO",
      description: "Registered & verified"
    }
  ];

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-primary via-primary/95 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 text-sm font-medium">
            <Heart className="w-4 h-4 mr-2" />
            Make an Impact
          </Badge>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transform{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Lives
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your donation creates lasting change in communities across Nigeria. 
              From education to healthcare, every contribution builds a brighter, 
              more sustainable future.
            </p>
          </div>

          {/* Quick Donation Amounts */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button className="egi-button-ghost text-lg px-6 py-3">₦5,000</Button>
            <Button className="egi-button-ghost text-lg px-6 py-3">₦10,000</Button>
            <Button className="egi-button-cyber text-lg px-6 py-3">₦25,000</Button>
            <Button className="egi-button-ghost text-lg px-6 py-3">₦50,000</Button>
            <Button className="egi-button-ghost text-lg px-6 py-3">Custom</Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div
                  key={index}
                  className="egi-glass-card p-6 text-center"
                >
                  <IconComponent className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-lg font-semibold text-white mb-1">{indicator.title}</div>
                  <div className="text-gray-300 text-sm">{indicator.description}</div>
                </div>
              );
            })}
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            <div className="egi-glass-card p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-300">Lives Impacted</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-gray-300">Projects Funded</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">₦500M+</div>
              <div className="text-gray-300">Total Raised</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">2,500+</div>
              <div className="text-gray-300">Generous Donors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
