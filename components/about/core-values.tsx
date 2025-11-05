"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Leaf, 
  Users, 
  Shield, 
  Lightbulb, 
  Globe, 
  HandHeart 
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "We are committed to protecting and preserving our natural environment for future generations through sustainable practices and conservation efforts.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "We believe in empowering local communities to take ownership of their development and become agents of positive change.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Shield,
    title: "Transparency & Accountability",
    description: "We maintain the highest standards of transparency in our operations and are accountable to the communities we serve.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "We embrace innovative approaches and creative solutions to address complex social and environmental challenges.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "While we work locally, we think globally, understanding that our actions contribute to worldwide sustainable development goals.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    icon: HandHeart,
    title: "Compassion & Respect",
    description: "We approach all our work with compassion, treating every individual with dignity and respect regardless of their background.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

export default function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${value.bgColor} transition-transform group-hover:scale-110`}>
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {value.title}
              </h3>
              
              <p className="leading-relaxed text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Join Us in Making a Difference
            </h3>
            <p className="mb-6 text-gray-600">
              These values aren't just words on a page - they're the foundation 
              of every project we undertake and every relationship we build.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Get Involved
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
