"use client";

import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, Heart } from "lucide-react";

export default function VolunteerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Become a{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Volunteer
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of passionate volunteers making a real difference in communities across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Why Volunteer with EGI?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-secondary mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Make Real Impact</h4>
                  <p className="text-gray-600">Directly contribute to transforming lives and communities</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-secondary mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Build Community</h4>
                  <p className="text-gray-600">Connect with like-minded individuals passionate about change</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-secondary mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Flexible Commitment</h4>
                  <p className="text-gray-600">Choose opportunities that fit your schedule and interests</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Volunteer Opportunities</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Education Support</h4>
                <p className="text-gray-600 text-sm">Help with teaching, tutoring, and educational program delivery</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Community Outreach</h4>
                <p className="text-gray-600 text-sm">Assist with health fairs, awareness campaigns, and events</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Technical Skills</h4>
                <p className="text-gray-600 text-sm">Share your expertise in technology, design, or communications</p>
              </div>
            </div>
            <Button className="w-full mt-6 egi-button-cyber">
              Apply to Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
