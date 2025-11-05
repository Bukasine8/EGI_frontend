"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock, Calendar, X } from "lucide-react";

// Mock video data - replace with Supabase data
const videos = [
  {
    id: 1,
    title: "EGI Impact Story: Transforming Rural Education",
    description: "A comprehensive look at how our education initiatives are changing lives in rural communities across Nigeria.",
    thumbnail: "/videos/thumbnails/education-impact.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:45",
    views: 12500,
    category: "Education",
    date: "2024-10-20",
    featured: true
  },
  {
    id: 2,
    title: "Green Schools Initiative: Solar Power Installation",
    description: "Watch as we install solar panels in rural schools, bringing clean energy and reliable electricity to students.",
    thumbnail: "/videos/thumbnails/solar-installation.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:32",
    views: 8900,
    category: "Environment",
    date: "2024-09-15",
    featured: false
  },
  {
    id: 3,
    title: "Women Entrepreneurs: Success Stories",
    description: "Meet the inspiring women who have built successful businesses through our empowerment programs.",
    thumbnail: "/videos/thumbnails/women-entrepreneurs.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:18",
    views: 15600,
    category: "Community",
    date: "2024-08-30",
    featured: true
  },
  {
    id: 4,
    title: "Tech Skills Bootcamp: Student Testimonials",
    description: "Hear directly from students about how our coding bootcamp changed their career prospects.",
    thumbnail: "/videos/thumbnails/tech-bootcamp.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:24",
    views: 7200,
    category: "Innovation",
    date: "2024-11-01",
    featured: false
  },
  {
    id: 5,
    title: "Community Health Fair: Making Healthcare Accessible",
    description: "See how our mobile health clinics are bringing essential medical services to underserved communities.",
    thumbnail: "/videos/thumbnails/health-fair.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "9:15",
    views: 11300,
    category: "Health",
    date: "2024-07-22",
    featured: false
  },
  {
    id: 6,
    title: "Tree Planting Campaign: Environmental Conservation",
    description: "Join us as communities come together to plant thousands of trees for environmental sustainability.",
    thumbnail: "/videos/thumbnails/tree-planting.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "7:08",
    views: 9800,
    category: "Environment",
    date: "2024-06-10",
    featured: true
  }
];

const categoryColors = {
  "Education": "bg-blue-100 text-blue-700 border-blue-200",
  "Environment": "bg-green-100 text-green-700 border-green-200",
  "Innovation": "bg-purple-100 text-purple-700 border-purple-200",
  "Health": "bg-red-100 text-red-700 border-red-200",
  "Community": "bg-orange-100 text-orange-700 border-orange-200"
};

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  const filteredVideos = filter === "all" 
    ? videos 
    : videos.filter(video => video.category.toLowerCase() === filter);

  const featuredVideos = videos.filter(video => video.featured);

  const openVideoModal = (video: any) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Video{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our impact through compelling video stories that showcase 
            the real-world transformation happening in communities across Nigeria.
          </p>
        </div>

        {/* Featured Videos */}
        {featuredVideos.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8">Featured Videos</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredVideos.slice(0, 2).map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                  onClick={() => openVideoModal(video)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-12 h-12 text-white fill-white" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={`${categoryColors[video.category as keyof typeof categoryColors]}`}>
                          {video.category}
                        </Badge>
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-secondary text-primary font-semibold">
                          Featured
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {video.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {formatViews(video.views)} views
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(video.date)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "egi-button-cyber" : ""}
          >
            All Videos
          </Button>
          {Array.from(new Set(videos.map(video => video.category))).map((category) => (
            <Button
              key={category}
              variant={filter === category.toLowerCase() ? "default" : "outline"}
              onClick={() => setFilter(category.toLowerCase())}
              className={filter === category.toLowerCase() ? "egi-button-cyber" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => openVideoModal(video)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>

                  {/* Category */}
                  <div className="absolute top-2 left-2">
                    <Badge className={`text-xs ${categoryColors[video.category as keyof typeof categoryColors]}`}>
                      {video.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {formatViews(video.views)}
                    </div>
                    <div>{formatDate(video.date)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-2xl font-bold text-primary">{selectedVideo.title}</h3>
                <button
                  onClick={closeVideoModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className={`${categoryColors[selectedVideo.category as keyof typeof categoryColors]}`}>
                    {selectedVideo.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-1" />
                    {formatViews(selectedVideo.views)} views
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedVideo.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(selectedVideo.date)}
                  </div>
                </div>
                <p className="text-gray-700">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
