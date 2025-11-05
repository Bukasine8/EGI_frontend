"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Calendar, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rural Schools Digital Transformation",
    description: "Bringing technology and digital literacy to underserved rural schools across Nigeria.",
    image: "/projects/digital-schools.jpg",
    category: "Education",
    target: 5000000,
    raised: 3200000,
    beneficiaries: "2,500+ students",
    location: "Kaduna, Kano, Niger States",
    deadline: "Dec 2024"
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description: "Installing water purification systems and boreholes in rural communities.",
    image: "/projects/clean-water.jpg",
    category: "Health",
    target: 8000000,
    raised: 4800000,
    beneficiaries: "5,000+ people",
    location: "Borno, Yobe States",
    deadline: "Mar 2025"
  },
  {
    id: 3,
    title: "Women Empowerment Program",
    description: "Providing business training and microfinance to women entrepreneurs.",
    image: "/projects/women-empowerment.jpg",
    category: "Community",
    target: 3000000,
    raised: 2250000,
    beneficiaries: "500+ women",
    location: "Lagos, Ogun States",
    deadline: "Jun 2025"
  }
];

const categoryColors = {
  "Education": "bg-blue-100 text-blue-700 border-blue-200",
  "Health": "bg-red-100 text-red-700 border-red-200",
  "Community": "bg-orange-100 text-orange-700 border-orange-200",
  "Environment": "bg-green-100 text-green-700 border-green-200"
};

export default function ProjectSelector() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const getProgress = (raised: number, target: number) => {
    return Math.round((raised / target) * 100);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">Choose a Project</h2>
        <p className="text-gray-600">
          Select a specific project to support, or choose "General Fund" to help where it's needed most.
        </p>
      </div>

      <div className="space-y-6">
        {/* General Fund Option */}
        <div 
          className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
            selectedProject === null 
              ? "border-secondary bg-secondary/5" 
              : "border-gray-200 hover:border-secondary/50"
          }`}
          onClick={() => setSelectedProject(null)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">General Fund</h3>
              <p className="text-gray-600">Support all our programs and let us allocate funds where they're needed most.</p>
            </div>
            <div className="flex-shrink-0">
              <div className={`w-6 h-6 rounded-full border-2 ${
                selectedProject === null 
                  ? "border-secondary bg-secondary" 
                  : "border-gray-300"
              }`}>
                {selectedProject === null && (
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Options */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
              selectedProject === project.id 
                ? "border-secondary bg-secondary/5" 
                : "border-gray-200 hover:border-secondary/50"
            }`}
            onClick={() => setSelectedProject(project.id)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Image */}
              <div className="relative h-48 md:h-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedProject === project.id 
                        ? "border-secondary bg-secondary" 
                        : "border-gray-300"
                    }`}>
                      {selectedProject === project.id && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {project.beneficiaries}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.deadline}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      ₦{project.raised.toLocaleString()} raised
                    </span>
                    <span className="text-sm text-gray-600">
                      {getProgress(project.raised, project.target)}% of ₦{project.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full transition-all duration-500"
                      style={{ width: `${getProgress(project.raised, project.target)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <div className="flex items-center">
            <Target className="w-5 h-5 text-secondary mr-3" />
            <div>
              <p className="font-semibold text-primary">
                Project Selected: {projects.find(p => p.id === selectedProject)?.title}
              </p>
              <p className="text-sm text-gray-600">
                Your donation will go directly to this project
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
