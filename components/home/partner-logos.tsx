"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PartnerLogos() {
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

  const partners = [
    { name: "UNICEF", logo: "/logos/unicef.svg" },
    { name: "WHO", logo: "/logos/who.svg" },
    { name: "Red Cross", logo: "/logos/redcross.svg" },
    { name: "UNHCR", logo: "/logos/unhcr.svg" },
    { name: "Oxfam", logo: "/logos/oxfam.svg" },
    { name: "Save the Children", logo: "/logos/savechildren.svg" },
  ];

  return (
    <section
      ref={sectionRef}
      className="border-y border-gray-200 bg-white px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h3
          className={`mb-12 text-center text-sm font-semibold uppercase tracking-wider text-gray-500 transition-all duration-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Trusted By Leading Organizations
        </h3>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group flex items-center justify-center transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-16 w-full grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
