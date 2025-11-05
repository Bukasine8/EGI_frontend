"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Calendar,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock project data
const projects = [
  {
    id: 1,
    title: "Solar Power for Rural Schools",
    category: "education",
    description: "Installing solar panels and energy systems in 10 rural schools to provide reliable electricity for learning.",
    image: "/images/projects/solar-schools.jpg",
    location: "Ogun State",
    startDate: "Jan 2024",
    endDate: "Dec 2024",
    beneficiaries: "2,000+ students",
    progress: 75,
    status: "ongoing",
    budget: "₦15M",
    tags: ["Education", "Energy", "Sustainability"],
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    category: "infrastructure",
    description: "Building water treatment facilities and boreholes to provide clean drinking water to rural communities.",
    image: "/images/projects/clean-water.jpg",
    location: "Kaduna State",
    startDate: "Mar 2024",
    endDate: "Nov 2024",
    beneficiaries: "5,000+ people",
    progress: 60,
    status: "ongoing",
    budget: "₦25M",
    tags: ["Water", "Health", "Infrastructure"],
  },
  {
    id: 3,
    title: "Tree Planting Campaign",
    category: "environment",
    description: "Large-scale reforestation project to combat deforestation and promote environmental sustainability.",
    image: "/images/projects/tree-planting.jpg",
    location: "Multiple States",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    beneficiaries: "10+ communities",
    progress: 100,
    status: "completed",
    budget: "₦8M",
    tags: ["Environment", "Sustainability", "Climate"],
  },
  {
    id: 4,
    title: "Mobile Health Clinics",
    category: "health",
    description: "Deploying mobile medical units to provide healthcare services in remote and underserved areas.",
    image: "/images/projects/mobile-health.jpg",
    location: "Northern Nigeria",
    startDate: "Jun 2024",
    endDate: "May 2025",
    beneficiaries: "8,000+ people",
    progress: 40,
    status: "ongoing",
    budget: "₦30M",
    tags: ["Health", "Medical", "Outreach"],
  },
  {
    id: 5,
    title: "Digital Literacy Program",
    category: "education",
    description: "Teaching computer skills and digital literacy to students and adults in rural communities.",
    image: "/images/projects/digital-literacy.jpg",
    location: "Lagos & Oyo States",
    startDate: "Sep 2024",
    endDate: "Aug 2025",
    beneficiaries: "1,500+ learners",
    progress: 25,
    status: "ongoing",
    budget: "₦12M",
    tags: ["Education", "Technology", "Skills"],
  },
  {
    id: 6,
    title: "Women's Cooperative Support",
    category: "economic",
    description: "Supporting women's cooperatives with training, equipment, and microfinance for small businesses.",
    image: "/images/projects/womens-coop.jpg",
    location: "Southwest Nigeria",
    startDate: "Feb 2024",
    endDate: "Jan 2025",
    beneficiaries: "800+ women",
    progress: 80,
    status: "ongoing",
    budget: "₦10M",
    tags: ["Women", "Economic", "Empowerment"],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "ongoing":
      return <Clock className="h-4 w-4 text-blue-600" />;
    case "planning":
      return <AlertCircle className="h-4 w-4 text-orange-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "ongoing":
      return "bg-blue-100 text-blue-800";
    case "planning":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isVisible: boolean;
}

function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  return (
    <div
      className={`group transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="egi-card h-full">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Status Badge */}
          <div className="absolute left-4 top-4">
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(project.status)}`}>
              {getStatusIcon(project.status)}
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="mb-2 flex items-center justify-between text-xs text-white">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full bg-secondary transition-all duration-1000"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          <h3 className="mb-3 font-heading text-xl font-bold text-primary group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          
          <p className="mb-4 font-body text-sm leading-relaxed text-gray-600 flex-grow">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="mb-4 space-y-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3" />
              <span>{project.startDate} - {project.endDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3" />
              <span>{project.beneficiaries}</span>
            </div>
          </div>

          {/* Budget */}
          <div className="mb-4 text-sm">
            <span className="font-semibold text-primary">Budget: </span>
            <span className="text-gray-700">{project.budget}</span>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <Link href={`/projects/${project.id}`}>
            <Button
              variant="outline"
              className="group/btn w-full egi-button-secondary"
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
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
      className="bg-gray-50 egi-section-padding"
    >
      <div className="egi-container">
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="egi-button-secondary"
          >
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
