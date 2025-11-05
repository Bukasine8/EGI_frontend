"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Handshake, TrendingUp } from "lucide-react";

export default function GetInvolvedHero() {
  const impactStats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Volunteers",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      value: "50+",
      label: "Mentor Partners",
      color: "text-red-500"
    },
    {
      icon: Handshake,
      value: "25+",
      label: "Corporate Partners",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      value: "₦100M+",
      label: "Community Fundraised",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-primary via-primary/95 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            Join Our Movement
          </Badge>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Be the{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Change
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join thousands of changemakers who are transforming communities across Nigeria. 
              Whether through volunteering, mentoring, partnering, or fundraising - your contribution 
              creates lasting impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="egi-button-cyber text-lg px-8 py-4 group">
              <Users className="w-5 h-5 mr-2" />
              Become a Volunteer
            </Button>
            <Button className="egi-button-ghost text-lg px-8 py-4 group">
              <Heart className="w-5 h-5 mr-2" />
              Start Mentoring
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="egi-glass-card p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
