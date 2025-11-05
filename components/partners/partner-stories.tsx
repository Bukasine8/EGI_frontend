"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const partnerStories = [
  {
    id: 1,
    quote: "Our partnership with EGI has enabled us to reach over 50,000 children with quality education programs. Their innovative approach to community engagement is truly remarkable.",
    author: "Dr. Sarah Johnson",
    role: "Country Director",
    organization: "UNICEF Nigeria",
    image: "/testimonials/sarah-johnson.jpg",
    logo: "/partners/unicef.png"
  },
  {
    id: 2,
    quote: "EGI's commitment to sustainable development aligns perfectly with our corporate social responsibility goals. Together, we've built 15 schools and transformed entire communities.",
    author: "Michael Adebayo",
    role: "CSR Manager",
    organization: "Dangote Foundation",
    image: "/testimonials/michael-adebayo.jpg",
    logo: "/partners/dangote.png"
  },
  {
    id: 3,
    quote: "The digital literacy programs we've implemented with EGI have equipped over 10,000 students with essential 21st-century skills. This partnership is changing lives.",
    author: "Jennifer Chen",
    role: "Education Lead",
    organization: "Microsoft Nigeria",
    image: "/testimonials/jennifer-chen.jpg",
    logo: "/partners/microsoft.png"
  }
];

export default function PartnerStories() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % partnerStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + partnerStories.length) % partnerStories.length);
  };

  const story = partnerStories[currentStory];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Partner{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our partners about the impact we've created together 
            and the transformative power of collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative p-12 lg:p-16">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-24 h-24 text-primary" />
              </div>

              {/* Story Content */}
              <div className="relative z-10">
                <blockquote className="text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed mb-8 text-center">
                  "{story.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-secondary/20">
                    <Image
                      src={story.image}
                      alt={story.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl font-bold text-primary">{story.author}</div>
                    <div className="text-gray-600">{story.role}</div>
                    <div className="flex items-center justify-center lg:justify-start mt-2">
                      <div className="relative w-8 h-8 mr-2">
                        <Image
                          src={story.logo}
                          alt={story.organization}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-500">{story.organization}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevStory}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={nextStory}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>

          {/* Story Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {partnerStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentStory
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
