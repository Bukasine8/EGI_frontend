"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock partner data - replace with Supabase data
const partners = [
  { id: 1, name: "UNICEF", logo: "/partners/unicef.png", slug: "unicef" },
  { id: 2, name: "WHO", logo: "/partners/who.png", slug: "who" },
  { id: 3, name: "Red Cross", logo: "/partners/red-cross.png", slug: "red-cross" },
  { id: 4, name: "UNHCR", logo: "/partners/unhcr.png", slug: "unhcr" },
  { id: 5, name: "Oxfam", logo: "/partners/oxfam.png", slug: "oxfam" },
  { id: 6, name: "Save the Children", logo: "/partners/save-children.png", slug: "save-children" },
  { id: 7, name: "World Bank", logo: "/partners/world-bank.png", slug: "world-bank" },
  { id: 8, name: "Gates Foundation", logo: "/partners/gates.png", slug: "gates-foundation" },
];

export default function PartnerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 4));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(partners.length / 4)) % Math.ceil(partners.length / 4));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Organizations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to collaborate with world-class organizations that share our vision 
            for sustainable development and community empowerment.
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Partner Logos Grid */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner) => (
                    <Link
                      key={partner.id}
                      href={`/partners/${partner.slug}`}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                        <div className="relative h-20 w-full mb-4">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            fill
                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <h3 className="text-center font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {partner.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-secondary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
