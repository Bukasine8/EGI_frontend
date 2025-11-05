"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Target } from "lucide-react";

export default function MentorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Become a{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Mentor
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your professional expertise and help guide the next generation of leaders and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <GraduationCap className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold text-primary mb-4">Student Mentorship</h3>
            <p className="text-gray-600 mb-6">
              Guide students in their academic journey and career development through one-on-one mentoring sessions.
            </p>
            <Button className="w-full egi-button-ghost">Learn More</Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Lightbulb className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold text-primary mb-4">Skills Development</h3>
            <p className="text-gray-600 mb-6">
              Teach practical skills in technology, business, or other professional areas to empower communities.
            </p>
            <Button className="w-full egi-button-ghost">Learn More</Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Target className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-primary mb-4">Entrepreneurship</h3>
            <p className="text-gray-600 mb-6">
              Support aspiring entrepreneurs with business planning, strategy, and growth guidance.
            </p>
            <Button className="w-full egi-button-ghost">Learn More</Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="egi-button-cyber">
            Apply to be a Mentor
          </Button>
        </div>
      </div>
    </section>
  );
}
