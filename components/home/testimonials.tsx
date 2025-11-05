"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      quote:
        "This organization truly changed my life. Their support gave me the skills and confidence to start my own business. I'm now able to support my family and give back to my community.",
      author: "Sarah Johnson",
      role: "Program Beneficiary",
      avatar: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote:
        "As a volunteer, I've witnessed firsthand the incredible impact this NGO has on communities. Every project is handled with care, transparency, and genuine dedication to making a difference.",
      author: "Michael Chen",
      role: "Volunteer Coordinator",
      avatar: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote:
        "I've been donating for three years now, and I'm always impressed by how efficiently they use resources. The regular updates show exactly where my contributions go and the lives they touch.",
      author: "Emily Rodriguez",
      role: "Monthly Donor",
      avatar: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from those whose lives we've touched
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div
            className={`rounded-3xl bg-white p-12 shadow-2xl transition-all duration-500 md:p-16 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Quote Icon */}
            <div className="absolute left-8 top-8 opacity-10 md:left-12 md:top-12">
              <Quote className="h-16 w-16 text-primary md:h-20 md:w-20" />
            </div>

            {/* Quote Text */}
            <div className="relative mb-8">
              <p className="text-center text-xl leading-relaxed text-gray-700 md:text-2xl">
                "{testimonials[activeIndex].quote}"
              </p>
            </div>

            {/* Star Rating */}
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-amber-400 text-amber-400"
                  style={{
                    animation: `fillStar 0.3s ease-out ${i * 0.1}s both`,
                  }}
                />
              ))}
            </div>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-primary/20">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-gray-900">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillStar {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
