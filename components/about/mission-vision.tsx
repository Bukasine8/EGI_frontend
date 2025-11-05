"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Eye, Heart } from "lucide-react";

export default function MissionVision() {
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
      id="mission"
      className="bg-gradient-to-br from-gray-50 to-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Our <span className="text-primary">Purpose</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Guided by our core beliefs and commitment to sustainable change
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Mission */}
          <div
            className={`group rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Target className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h3>
            
            <p className="leading-relaxed text-gray-600">
              To empower communities through sustainable development initiatives 
              that promote environmental conservation, education, and social 
              well-being, creating lasting positive change for current and 
              future generations.
            </p>

            <div className="mt-6 rounded-lg bg-primary/5 p-4">
              <p className="text-sm font-medium text-primary">
                "Healthy Earth, Healthy Mind"
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`group rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-secondary/20">
              <Eye className="h-8 w-8 text-secondary" />
            </div>
            
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h3>
            
            <p className="leading-relaxed text-gray-600">
              A world where communities thrive in harmony with nature, where 
              sustainable practices are the norm, and where every individual 
              has access to education, healthcare, and opportunities for 
              personal and collective growth.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Sustainable Communities</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Environmental Harmony</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Equal Opportunities</span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div
            className={`group rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 transition-colors group-hover:bg-red-200">
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Values</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Sustainability</h4>
                <p className="text-sm text-gray-600">
                  Long-term thinking in all our initiatives
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Community</h4>
                <p className="text-sm text-gray-600">
                  Empowering local ownership and participation
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Transparency</h4>
                <p className="text-sm text-gray-600">
                  Open communication and accountability
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-sm text-gray-600">
                  Creative solutions for complex challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
