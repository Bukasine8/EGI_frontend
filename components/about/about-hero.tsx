"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                About EGI
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
              Building a{" "}
              <span className="text-primary">Sustainable Future</span>{" "}
              Together
            </h1>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-600 lg:text-xl">
              Since our founding, Eke Greenmind Initiative has been dedicated to 
              creating lasting change through community empowerment, environmental 
              conservation, and sustainable development.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Years of Impact</p>
                  <p className="text-sm text-gray-600">Serving communities</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-xl font-bold text-secondary">50+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Projects Completed</p>
                  <p className="text-sm text-gray-600">Across Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="EGI team working in the community"
                fill
                className="object-cover"
              />
              
              {/* Overlay with quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <blockquote className="text-lg font-medium">
                  "Healthy Earth, Healthy Mind - our commitment to sustainable 
                  development that nurtures both our planet and our people."
                </blockquote>
                <cite className="mt-2 block text-sm opacity-90">
                  - EGI Mission Statement
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>
    </section>
  );
}
