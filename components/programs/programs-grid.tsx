"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Leaf, 
  Heart, 
  Users, 
  MapPin, 
  Calendar,
  ArrowRight,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from Supabase, but using static data for now
const programs = [
  {
    id: 1,
    title: "Education for All",
    category: "education",
    description: "Providing quality education and learning resources to underserved communities across Nigeria.",
    image: "/images/programs/education.jpg",
    icon: GraduationCap,
    location: "Lagos, Abuja, Port Harcourt",
    duration: "Ongoing",
    beneficiaries: "2,500+ students",
    progress: 75,
    tags: ["Education", "Youth", "Scholarships"],
    featured: true,
  },
  {
    id: 2,
    title: "Green Communities Initiative",
    category: "environment",
    description: "Empowering communities to adopt sustainable practices and protect their local environment.",
    image: "/images/programs/environment.jpg",
    icon: Leaf,
    location: "Rural Nigeria",
    duration: "2 years",
    beneficiaries: "50+ communities",
    progress: 60,
    tags: ["Environment", "Sustainability", "Conservation"],
    featured: true,
  },
  {
    id: 3,
    title: "Community Health Outreach",
    category: "health",
    description: "Bringing essential healthcare services and health education to remote communities.",
    image: "/images/programs/health.jpg",
    icon: Heart,
    location: "Northern Nigeria",
    duration: "Ongoing",
    beneficiaries: "10,000+ people",
    progress: 85,
    tags: ["Health", "Medical", "Outreach"],
    featured: false,
  },
  {
    id: 4,
    title: "Women Empowerment Program",
    category: "community",
    description: "Supporting women through skills training, microfinance, and leadership development.",
    image: "/images/programs/women.jpg",
    icon: Users,
    location: "Southwest Nigeria",
    duration: "18 months",
    beneficiaries: "1,200+ women",
    progress: 70,
    tags: ["Women", "Skills", "Microfinance"],
    featured: false,
  },
  {
    id: 5,
    title: "Clean Water Access",
    category: "community",
    description: "Installing water systems and promoting hygiene practices in underserved areas.",
    image: "/images/programs/water.jpg",
    icon: Target,
    location: "Rural Communities",
    duration: "3 years",
    beneficiaries: "5,000+ people",
    progress: 45,
    tags: ["Water", "Sanitation", "Health"],
    featured: false,
  },
  {
    id: 6,
    title: "Youth Leadership Academy",
    category: "education",
    description: "Developing the next generation of leaders through mentorship and skills training.",
    image: "/images/programs/youth.jpg",
    icon: GraduationCap,
    location: "Major Cities",
    duration: "1 year",
    beneficiaries: "500+ youth",
    progress: 90,
    tags: ["Youth", "Leadership", "Mentorship"],
    featured: true,
  },
];

interface ProgramCardProps {
  program: typeof programs[0];
  index: number;
  isVisible: boolean;
}

function ProgramCard({ program, index, isVisible }: ProgramCardProps) {
  return (
    <div
      className={`group transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
              <program.icon className="h-3 w-3" />
              {program.category.charAt(0).toUpperCase() + program.category.slice(1)}
            </span>
          </div>

          {/* Featured Badge */}
          {program.featured && (
            <div className="absolute right-4 top-4">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                Featured
              </span>
            </div>
          )}

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="mb-2 flex items-center justify-between text-xs text-white">
              <span>Progress</span>
              <span>{program.progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full bg-primary transition-all duration-1000"
                style={{ width: `${program.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {program.title}
          </h3>
          
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            {program.description}
          </p>

          {/* Meta Info */}
          <div className="mb-4 space-y-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>{program.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3" />
              <span>{program.beneficiaries}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {program.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <Link href={`/programs/${program.id}`}>
            <Button
              variant="outline"
              className="group/btn w-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProgramsGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
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
      className="bg-gray-50 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Programs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Load More Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
