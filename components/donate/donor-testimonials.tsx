"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Adaora Okonkwo",
    role: "Monthly Donor",
    location: "Lagos, Nigeria",
    image: "/testimonials/adaora-okonkwo.jpg",
    donation: "₦25,000/month",
    quote: "Seeing the direct impact of my monthly donations through EGI's transparent reporting gives me so much joy. I know exactly which students are benefiting from my contribution.",
    rating: 5,
    project: "Rural Education Program"
  },
  {
    id: 2,
    name: "James Mitchell",
    role: "Corporate Donor",
    location: "London, UK",
    image: "/testimonials/james-mitchell.jpg",
    donation: "₦500,000",
    quote: "EGI's professionalism and accountability impressed our board. The detailed impact reports and regular updates make us confident in our partnership.",
    rating: 5,
    project: "Clean Water Initiative"
  },
  {
    id: 3,
    name: "Dr. Fatima Abdullahi",
    role: "Major Donor",
    location: "Abuja, Nigeria",
    image: "/testimonials/fatima-abdullahi.jpg",
    donation: "₦1,000,000",
    quote: "As a healthcare professional, I'm amazed by EGI's mobile clinic program. My donation has helped provide medical care to over 2,000 people in remote areas.",
    rating: 5,
    project: "Mobile Health Clinics"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Annual Donor",
    location: "New York, USA",
    image: "/testimonials/sarah-johnson.jpg",
    donation: "₦150,000/year",
    quote: "The women's empowerment program funded by my donations has helped 50+ women start their own businesses. The transformation stories are incredible!",
    rating: 5,
    project: "Women Empowerment"
  }
];

export default function DonorTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Donor{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our generous donors about their experience supporting EGI's mission 
            and the impact they've helped create.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Main Testimonial */}
            <div className="p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Donor Info */}
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
                  <p className="text-gray-600 mb-1">{testimonial.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.location}</p>
                  
                  <div className="bg-secondary/10 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-secondary">Contribution</p>
                    <p className="text-lg font-bold text-primary">{testimonial.donation}</p>
                  </div>
                  
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-accent">Supporting</p>
                    <p className="text-sm text-gray-700">{testimonial.project}</p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Impact Highlight */}
                  <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-4 border border-secondary/20">
                    <p className="text-sm font-semibold text-primary mb-1">Verified Impact</p>
                    <p className="text-sm text-gray-700">
                      This donor's contribution has been independently verified and tracked 
                      through our transparent impact measurement system.
                    </p>
                  </div>
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

          {/* Testimonial Indicators */}
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

          {/* Donor Count */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex -space-x-2 mr-4">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div key={index} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-primary">2,500+</span>
                <span className="text-gray-600"> generous donors worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
