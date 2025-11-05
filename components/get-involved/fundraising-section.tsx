"use client";

import { Button } from "@/components/ui/button";
import { DollarSign, Users, Trophy, Target } from "lucide-react";

export default function FundraisingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Start{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Fundraising
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create your own fundraising campaign and rally your network to support causes you care about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-primary mb-2">Set Your Goal</h3>
            <p className="text-gray-600 text-sm">Choose a project and set your fundraising target</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-primary mb-2">Share Your Story</h3>
            <p className="text-gray-600 text-sm">Tell your network why this cause matters to you</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-primary mb-2">Raise Funds</h3>
            <p className="text-gray-600 text-sm">Collect donations through your personalized page</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-bold text-primary mb-2">Track Impact</h3>
            <p className="text-gray-600 text-sm">See the direct impact of your fundraising efforts</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start?</h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of fundraisers who have raised over ₦50 million for EGI programs.
          </p>
          <Button className="egi-button-cyber">
            Create Fundraising Campaign
          </Button>
        </div>
      </div>
    </section>
  );
}
