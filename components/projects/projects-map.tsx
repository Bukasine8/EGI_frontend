"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Calendar } from "lucide-react";

// Mock project locations data
const projectLocations = [
  {
    id: 1,
    state: "Lagos State",
    projects: 8,
    beneficiaries: "15,000+",
    coordinates: { x: 45, y: 75 }, // Approximate position on Nigeria map
    color: "bg-primary",
  },
  {
    id: 2,
    state: "Ogun State",
    projects: 5,
    beneficiaries: "8,000+",
    coordinates: { x: 42, y: 72 },
    color: "bg-secondary",
  },
  {
    id: 3,
    state: "Kaduna State",
    projects: 4,
    beneficiaries: "12,000+",
    coordinates: { x: 48, y: 45 },
    color: "bg-accent",
  },
  {
    id: 4,
    state: "Oyo State",
    projects: 3,
    beneficiaries: "6,000+",
    coordinates: { x: 40, y: 68 },
    color: "bg-primary",
  },
  {
    id: 5,
    state: "Kano State",
    projects: 6,
    beneficiaries: "10,000+",
    coordinates: { x: 52, y: 35 },
    color: "bg-secondary",
  },
  {
    id: 6,
    state: "Rivers State",
    projects: 4,
    beneficiaries: "7,500+",
    coordinates: { x: 48, y: 85 },
    color: "bg-accent",
  },
];

export default function ProjectsMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<typeof projectLocations[0] | null>(null);
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
      className="bg-white egi-section-padding"
    >
      <div className="egi-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary lg:text-5xl">
            Our <span className="egi-text-gradient">Reach</span>
          </h2>
          <p className="mt-4 font-body text-lg text-gray-600">
            Projects spanning across Nigeria, creating impact in multiple states
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map Visualization */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              {/* Nigeria Map Outline (Simplified SVG) */}
              <div className="relative h-full w-full">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full"
                  style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
                >
                  {/* Simplified Nigeria outline */}
                  <path
                    d="M20 30 L80 25 L85 35 L90 50 L85 70 L80 85 L70 90 L50 88 L30 85 L20 75 L15 60 L18 45 Z"
                    fill="rgba(27, 45, 26, 0.1)"
                    stroke="rgba(27, 45, 26, 0.3)"
                    strokeWidth="0.5"
                  />
                </svg>

                {/* Project Location Markers */}
                {projectLocations.map((location, index) => (
                  <div
                    key={location.id}
                    className={`absolute cursor-pointer transition-all duration-500 hover:scale-125 ${
                      isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`,
                      transform: "translate(-50%, -50%)",
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className={`h-4 w-4 rounded-full ${location.color} shadow-lg animate-pulse`}>
                      <div className={`h-full w-full rounded-full ${location.color} opacity-50 animate-ping`}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-3 backdrop-blur-sm">
                <h4 className="mb-2 font-heading text-sm font-semibold text-primary">
                  Project Locations
                </h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Education Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    <span>Environment Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span>Health Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {selectedLocation ? (
              <div className="egi-card">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    Selected Location
                  </span>
                </div>
                
                <h3 className="mb-4 font-heading text-2xl font-bold text-primary">
                  {selectedLocation.state}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {selectedLocation.projects} Active Projects
                      </div>
                      <div className="text-sm text-gray-600">
                        Ongoing initiatives in this state
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {selectedLocation.beneficiaries} Beneficiaries
                      </div>
                      <div className="text-sm text-gray-600">
                        People directly impacted by our work
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="egi-card">
                <h3 className="mb-4 font-heading text-2xl font-bold text-primary">
                  Nationwide Impact
                </h3>
                
                <p className="mb-6 font-body text-gray-600">
                  Click on any location marker on the map to see detailed 
                  information about our projects in that state.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="text-center rounded-xl bg-primary/5 p-4">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-gray-600">States Reached</div>
                  </div>
                  <div className="text-center rounded-xl bg-secondary/5 p-4">
                    <div className="text-2xl font-bold text-secondary">45+</div>
                    <div className="text-sm text-gray-600">Total Projects</div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {projectLocations.slice(0, 3).map((location, index) => (
                <div
                  key={location.id}
                  className={`cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${
                    selectedLocation?.id === location.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {location.projects}
                    </div>
                    <div className="text-xs text-gray-600">
                      {location.state}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
