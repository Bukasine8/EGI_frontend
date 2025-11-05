"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/our-story.jpg"
                  alt="EGI founding story"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2013</p>
                  <p className="text-sm font-medium text-gray-600">Founded</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="mb-6">
              <span className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                Our Story
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              From Vision to{" "}
              <span className="text-primary">Reality</span>
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Eke Greenmind Initiative was born from a simple yet powerful vision: 
                to create sustainable change that benefits both our environment and 
                our communities. Founded in 2013 by a group of passionate 
                environmentalists and community leaders, we started with a clear 
                mission - "Healthy Earth, Healthy Mind."
              </p>

              <p className="leading-relaxed">
                What began as a small grassroots movement in Lagos has grown into 
                a recognized NGO working across Nigeria. We've learned that true 
                sustainability comes from empowering communities to become stewards 
                of their own development while protecting the environment that 
                sustains us all.
              </p>

              <p className="leading-relaxed">
                Today, we continue to build on our founding principles: community 
                engagement, environmental conservation, education, and sustainable 
                development. Every project we undertake reflects our commitment to 
                creating lasting positive change.
              </p>
            </div>

            {/* Key milestones */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">10,000+</h4>
                <p className="text-sm text-gray-600">Lives Impacted</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">25+</h4>
                <p className="text-sm text-gray-600">Communities Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
