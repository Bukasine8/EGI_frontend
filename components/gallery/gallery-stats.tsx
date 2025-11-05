"use client";

import { Camera, Video, Image, Users, Calendar, MapPin, Award, TrendingUp } from "lucide-react";

export default function GalleryStats() {
  const stats = [
    {
      icon: Image,
      value: "2,500+",
      label: "Photos Captured",
      description: "Documenting every moment of impact",
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Video,
      value: "150+",
      label: "Videos Produced",
      description: "Stories that inspire and educate",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Calendar,
      value: "50+",
      label: "Events Documented",
      description: "Comprehensive coverage of our initiatives",
      color: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      icon: MapPin,
      value: "25+",
      label: "Locations Covered",
      description: "Across Nigeria and beyond",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Users,
      value: "10K+",
      label: "People Featured",
      description: "Faces of transformation and hope",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
      description: "Recognition for visual storytelling",
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    }
  ];

  const impactMetrics = [
    {
      category: "Education",
      photos: 850,
      videos: 45,
      reach: "2M+ views"
    },
    {
      category: "Environment",
      photos: 620,
      videos: 38,
      reach: "1.5M+ views"
    },
    {
      category: "Health",
      photos: 480,
      videos: 25,
      reach: "800K+ views"
    },
    {
      category: "Innovation",
      photos: 350,
      videos: 28,
      reach: "1.2M+ views"
    },
    {
      category: "Community",
      photos: 200,
      videos: 14,
      reach: "600K+ views"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Visual Impact{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our visual documentation creates lasting memories and helps share our impact 
            with communities, partners, and supporters worldwide.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="egi-glass-card p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-6`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Content by Category */}
        <div className="egi-glass-card p-8 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Content by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <h4 className="text-xl font-bold text-white mb-4">{category.category}</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 flex items-center">
                      <Camera className="w-4 h-4 mr-2" />
                      Photos:
                    </span>
                    <span className="text-secondary font-semibold">{category.photos}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 flex items-center">
                      <Video className="w-4 h-4 mr-2" />
                      Videos:
                    </span>
                    <span className="text-accent font-semibold">{category.videos}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Total Reach:</span>
                      <span className="text-white font-semibold">{category.reach}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="egi-glass-card p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">6.2M+</div>
            <div className="text-white font-semibold mb-1">Total Views</div>
            <div className="text-sm text-gray-400">Across all platforms</div>
          </div>
          
          <div className="egi-glass-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">450K+</div>
            <div className="text-white font-semibold mb-1">Social Shares</div>
            <div className="text-sm text-gray-400">Content shared by viewers</div>
          </div>
          
          <div className="egi-glass-card p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">89%</div>
            <div className="text-white font-semibold mb-1">Engagement Rate</div>
            <div className="text-sm text-gray-400">Positive audience interaction</div>
          </div>

          <div className="egi-glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">125+</div>
            <div className="text-white font-semibold mb-1">Media Features</div>
            <div className="text-sm text-gray-400">Stories picked up by media</div>
          </div>
        </div>

        {/* Growth Metrics */}
        <div className="egi-glass-card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            <TrendingUp className="w-6 h-6 inline mr-2" />
            Year-over-Year Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">+180%</div>
              <div className="text-gray-300">Content Production</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">+250%</div>
              <div className="text-gray-300">Audience Reach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">+320%</div>
              <div className="text-gray-300">Engagement</div>
            </div>
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Our visual storytelling continues to grow in impact and reach, 
            helping us connect with more people and inspire greater change.
          </p>
        </div>
      </div>
    </section>
  );
}
