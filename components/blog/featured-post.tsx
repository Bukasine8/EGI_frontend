"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Eye, Heart } from "lucide-react";

// Mock featured post data
const featuredPost = {
  id: 1,
  title: "How Digital Literacy is Transforming Rural Education in Nigeria",
  excerpt: "Discover how our comprehensive digital literacy program is bridging the technology gap in rural communities, empowering students with 21st-century skills and opening doors to new opportunities.",
  content: "In the heart of rural Kaduna State, a quiet revolution is taking place. Students who once had limited access to technology are now coding, creating digital content, and preparing for careers in the global economy...",
  coverImage: "/blog/featured/digital-literacy-transformation.jpg",
  category: "Education",
  author: {
    name: "Dr. Amina Hassan",
    role: "Education Program Director",
    avatar: "/team/amina-hassan.jpg"
  },
  publishedAt: "2024-11-01",
  readTime: 8,
  views: 2500,
  likes: 145,
  slug: "digital-literacy-transforming-rural-education-nigeria",
  featured: true,
  tags: ["Digital Literacy", "Rural Education", "Technology", "Student Success"]
};

export default function FeaturedPost() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most impactful story of transformation, innovation, and community empowerment.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Featured Badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-secondary text-primary font-semibold px-4 py-2">
                  Featured Story
                </Badge>
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  {featuredPost.category}
                </Badge>
              </div>

              {/* Engagement Stats */}
              <div className="absolute bottom-6 left-6 flex items-center space-x-4 text-white">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span className="text-sm">{featuredPost.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  <span className="text-sm">{featuredPost.likes}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(featuredPost.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredPost.readTime} min read
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="text-lg text-gray-700 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{featuredPost.author.name}</div>
                    <div className="text-sm text-gray-600">{featuredPost.author.role}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read More Button */}
                <div className="pt-4">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="egi-button-cyber group">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
