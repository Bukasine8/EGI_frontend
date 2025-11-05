"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chioma Adebayo",
    role: "Volunteer Teacher",
    image: "/testimonials/chioma-adebayo.jpg",
    quote: "Volunteering with EGI has been the most rewarding experience of my life. Seeing students light up when they understand a new concept is priceless.",
    program: "Education Support"
  },
  {
    id: 2,
    name: "Michael Okafor",
    role: "Tech Mentor",
    image: "/testimonials/michael-okafor.jpg",
    quote: "Mentoring young entrepreneurs through EGI's program has allowed me to give back while learning from their fresh perspectives and innovative ideas.",
    program: "Entrepreneurship Mentorship"
  },
  {
    id: 3,
    name: "Aisha Musa",
    role: "Community Volunteer",
    image: "/testimonials/aisha-musa.jpg",
    quote: "The health outreach programs I've participated in have reached over 1,000 people in my community. It's amazing to be part of such meaningful work.",
    program: "Health Outreach"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Volunteer{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our amazing volunteers about their experiences making a difference with EGI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="p-8 lg:p-12">
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full border-4 border-secondary/20"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 mb-4">{testimonial.role}</p>
                  
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-secondary">Program</p>
                    <p className="text-sm text-gray-700">{testimonial.program}</p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                onClick={prevTestimonial}
                className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                onClick={nextTestimonial}
                className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
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
