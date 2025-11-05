"use client";

import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Image, Video, Calendar } from "lucide-react";

export default function GalleryHero() {
  const filterOptions = [
    { value: "all", label: "All Media" },
    { value: "education", label: "Education" },
    { value: "environment", label: "Environment" },
    { value: "health", label: "Health" },
    { value: "innovation", label: "Innovation" },
    { value: "community", label: "Community" }
  ];

  const yearOptions = [
    { value: "all", label: "All Years" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" }
  ];

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-primary via-primary/95 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 text-sm font-medium">
            <Camera className="w-4 h-4 mr-2" />
            Visual Impact Gallery
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Stories of{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Change
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Witness the transformative power of our initiatives through compelling visuals. 
              Every image tells a story of hope, progress, and sustainable impact.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="max-w-3xl mx-auto">
            <div className="egi-glass-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Media Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Media</SelectItem>
                    <SelectItem value="photos">Photos Only</SelectItem>
                    <SelectItem value="videos">Videos Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            <div className="egi-glass-card p-6 text-center">
              <Image className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">2,500+</div>
              <div className="text-gray-300">Photos</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Video className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-gray-300">Videos</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-300">Events Documented</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Camera className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-gray-300">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
