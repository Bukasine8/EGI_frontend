"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  raised: string;
  goal: string;
  percentage: number;
  slug: string;
  delay: number;
}

function ProgramCard({
  title,
  description,
  category,
  image,
  raised,
  goal,
  percentage,
  slug,
  delay,
}: ProgramCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setProgress(percentage);
      }, delay);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div
      ref={cardRef}
      className={`group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="mb-2">
          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-primary transition-all duration-2000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Text */}
        <div className="mb-4 flex justify-between text-xs text-gray-600">
          <span className="font-semibold">{raised} raised</span>
          <span>{percentage}% funded</span>
        </div>

        {/* CTA Row */}
        <div className="flex items-center justify-between gap-3">
          <Link href={`/programs/${slug}`} className="flex-1">
            <Button
              variant="ghost"
              className="w-full text-primary hover:bg-primary/10 hover:text-primary"
            >
              Learn More
            </Button>
          </Link>
          <Link href="/donate">
            <Button className="bg-primary hover:bg-primary/90">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedPrograms() {
  const programs = [
    {
      title: "Building Schools in Rural Areas",
      description:
        "Providing quality education infrastructure to underserved communities, ensuring every child has access to learning opportunities.",
      category: "Education",
      image: "/images/program-1.jpg",
      raised: "₦14,450,000",
      goal: "₦29,000,000",
      percentage: 32,
      slug: "building-schools",
    },
    {
      title: "Clean Water Initiative",
      description:
        "Installing water purification systems and wells in communities without access to safe drinking water.",
      category: "Health",
      image: "/images/program-2.jpg",
      raised: "₦20,000,200",
      goal: "₦31,000,000",
      percentage: 53,
      slug: "clean-water",
    },
    {
      title: "Women Empowerment Program",
      description:
        "Providing vocational training and microloans to help women become financially independent and support their families.",
      category: "Empowerment",
      image: "/images/program-3.jpg",
      raised: "₦10,000,800",
      goal: "₦23,000,000",
      percentage: 75,
      slug: "women-empowerment",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              Our Featured <span className="text-primary">Programs</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Supporting communities through impactful initiatives
            </p>
          </div>
          <Link href="/programs" className="hidden md:block">
            <Button
              variant="ghost"
              className="group text-primary hover:bg-transparent"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/programs">
            <Button className="bg-primary hover:bg-primary/90">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
