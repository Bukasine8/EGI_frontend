"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Download, Share2, Heart, Eye, Calendar, MapPin, ZoomIn } from "lucide-react";

// Mock gallery data - replace with Supabase data
const galleryItems = [
  {
    id: 1,
    src: "/gallery/school-renovation-1.jpg",
    title: "New Classroom Construction",
    description: "Building modern learning spaces in rural Kaduna communities",
    category: "Education",
    project: "Rural Schools Initiative",
    event: "School Renovation Project",
    date: "2024-10-15",
    location: "Kaduna State",
    photographer: "John Doe",
    likes: 45,
    views: 230,
    aspectRatio: "tall"
  },
  {
    id: 2,
    src: "/gallery/tree-planting-1.jpg",
    title: "Community Tree Planting",
    description: "Local volunteers planting indigenous trees for environmental conservation",
    category: "Environment",
    project: "Green Communities",
    event: "Tree Planting Campaign",
    date: "2024-09-22",
    location: "Ogun State",
    photographer: "Jane Smith",
    likes: 67,
    views: 340,
    aspectRatio: "wide"
  },
  {
    id: 3,
    src: "/gallery/tech-training-1.jpg",
    title: "Digital Skills Workshop",
    description: "Students learning coding and digital literacy skills",
    category: "Innovation",
    project: "Tech Skills Program",
    event: "Digital Literacy Workshop",
    date: "2024-11-05",
    location: "Lagos State",
    photographer: "Mike Johnson",
    likes: 89,
    views: 450,
    aspectRatio: "square"
  },
  {
    id: 4,
    src: "/gallery/health-outreach-1.jpg",
    title: "Community Health Screening",
    description: "Free medical checkups and health education for rural communities",
    category: "Health",
    project: "Health Outreach Program",
    event: "Community Health Fair",
    date: "2024-08-18",
    location: "Kano State",
    photographer: "Dr. Sarah Wilson",
    likes: 123,
    views: 680,
    aspectRatio: "tall"
  },
  {
    id: 5,
    src: "/gallery/women-empowerment-1.jpg",
    title: "Women's Business Training",
    description: "Empowering women entrepreneurs with business and financial skills",
    category: "Community",
    project: "Women Empowerment Initiative",
    event: "Business Skills Workshop",
    date: "2024-07-30",
    location: "Abuja",
    photographer: "Mary Adebayo",
    likes: 78,
    views: 390,
    aspectRatio: "wide"
  },
  {
    id: 6,
    src: "/gallery/solar-installation-1.jpg",
    title: "Solar Panel Installation",
    description: "Installing renewable energy systems in rural schools",
    category: "Environment",
    project: "Clean Energy Initiative",
    event: "Solar Power Project",
    date: "2024-06-12",
    location: "Niger State",
    photographer: "Ahmed Hassan",
    likes: 156,
    views: 720,
    aspectRatio: "square"
  }
];

const categoryColors = {
  "Education": "bg-blue-100 text-blue-700 border-blue-200",
  "Environment": "bg-green-100 text-green-700 border-green-200",
  "Innovation": "bg-purple-100 text-purple-700 border-purple-200",
  "Health": "bg-red-100 text-red-700 border-red-200",
  "Community": "bg-orange-100 text-orange-700 border-orange-200"
};

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category.toLowerCase() === filter);

  const openLightbox = (item: any) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const getGridItemClass = (aspectRatio: string, index: number) => {
    const baseClass = "group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 hover:shadow-xl transition-all duration-300";
    
    switch (aspectRatio) {
      case "tall":
        return `${baseClass} row-span-2`;
      case "wide":
        return `${baseClass} col-span-2`;
      case "square":
      default:
        return baseClass;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "egi-button-cyber" : ""}
          >
            All Photos
          </Button>
          {Array.from(new Set(galleryItems.map(item => item.category))).map((category) => (
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[200px]">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={getGridItemClass(item.aspectRatio, index)}
              onClick={() => openLightbox(item)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className={`${categoryColors[item.category as keyof typeof categoryColors]}`}>
                    {item.category}
                  </Badge>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2 mb-2">{item.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {item.likes}
                      </div>
                    </div>
                    <div>{formatDate(item.date)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            className="egi-button-ghost"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load More Photos"}
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="max-w-6xl max-h-full w-full flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="flex-1 relative min-h-[400px] lg:min-h-[600px]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
              
              {/* Details Panel */}
              <div className="w-full lg:w-96 p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <Badge className={`${categoryColors[selectedImage.category as keyof typeof categoryColors]}`}>
                    {selectedImage.category}
                  </Badge>
                  <button
                    onClick={closeLightbox}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-primary mb-3">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-6">{selectedImage.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(selectedImage.date)}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedImage.location}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Project:</strong> {selectedImage.project}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Event:</strong> {selectedImage.event}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Photographer:</strong> {selectedImage.photographer}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {selectedImage.views} views
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {selectedImage.likes} likes
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1 egi-button-ghost">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button className="flex-1 egi-button-ghost">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
