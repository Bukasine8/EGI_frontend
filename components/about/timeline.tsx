"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const timelineEvents = [
  {
    year: "2013",
    title: "Foundation",
    description: "Eke Greenmind Initiative was founded with a vision to create sustainable change in Nigerian communities.",
    icon: Users,
    color: "bg-primary",
  },
  {
    year: "2015",
    title: "First Major Project",
    description: "Launched our first large-scale environmental conservation project, planting 5,000 trees across Lagos State.",
    icon: MapPin,
    color: "bg-green-600",
  },
  {
    year: "2017",
    title: "Education Program Launch",
    description: "Established our education initiative, providing scholarships and learning materials to underprivileged children.",
    icon: Award,
    color: "bg-blue-600",
  },
  {
    year: "2019",
    title: "Community Health Initiative",
    description: "Expanded into healthcare, organizing medical outreaches and health education programs in rural communities.",
    icon: Calendar,
    color: "bg-red-600",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Embraced technology to reach more communities, launching online education platforms and digital health resources.",
    icon: Users,
    color: "bg-purple-600",
  },
  {
    year: "2023",
    title: "Partnership Expansion",
    description: "Formed strategic partnerships with international NGOs and government agencies to amplify our impact.",
    icon: Award,
    color: "bg-orange-600",
  },
  {
    year: "2025",
    title: "Sustainable Future",
    description: "Continuing to innovate and expand our reach, working towards our vision of healthy communities and a healthy planet.",
    icon: MapPin,
    color: "bg-secondary",
  },
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Our <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Key milestones in our mission to create lasting change
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-300 lg:left-1/2 lg:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={el => { itemRefs.current[index] = el; }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-4 ring-gray-300 transition-all duration-500 lg:left-1/2 lg:-translate-x-1/2 ${
                  visibleItems.includes(index) ? 'ring-primary' : ''
                }`}>
                  <div className={`h-2 w-2 rounded-full transition-all duration-500 ${
                    visibleItems.includes(index) ? 'bg-primary' : 'bg-gray-300'
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 w-full transition-all duration-700 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                } ${
                  visibleItems.includes(index)
                    ? 'translate-x-0 opacity-100'
                    : index % 2 === 0
                    ? '-translate-x-8 opacity-0 lg:translate-x-8'
                    : 'translate-x-8 opacity-0 lg:-translate-x-8'
                }`}>
                  <div className="rounded-2xl bg-white p-6 shadow-lg">
                    {/* Year Badge */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${event.color}`}>
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-700">
                        {event.year}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden w-5/12 lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Be Part of Our Story
            </h3>
            <p className="mb-6 text-gray-600">
              Every milestone we've achieved has been possible because of supporters 
              like you. Join us as we continue writing the next chapter of positive change.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Support Our Mission
              </a>
              <a
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
