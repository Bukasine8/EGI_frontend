"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Eye, Heart } from "lucide-react";

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Empowering Rural Communities Through Digital Innovation",
    excerpt: "Discover how our latest technology initiatives are bridging the digital divide in remote areas across Nigeria.",
    coverImage: "/blog/digital-innovation.jpg",
    category: "Innovation",
    author: {
      name: "Dr. Kemi Adebayo",
      avatar: "/team/kemi-adebayo.jpg"
    },
    publishedAt: "2024-10-28",
    readTime: 6,
    views: 1850,
    likes: 89,
    slug: "empowering-rural-communities-digital-innovation"
  },
  {
    id: 2,
    title: "Sustainable Agriculture: Training the Next Generation",
    excerpt: "How our agricultural training programs are helping young farmers adopt sustainable practices and increase yields.",
    coverImage: "/blog/sustainable-agriculture.jpg",
    category: "Environment",
    author: {
      name: "Ibrahim Hassan",
      avatar: "/team/ibrahim-hassan.jpg"
    },
    publishedAt: "2024-10-25",
    readTime: 8,
    views: 2100,
    likes: 124,
    slug: "sustainable-agriculture-training-next-generation"
  },
  {
    id: 3,
    title: "Healthcare Access: Mobile Clinics Making a Difference",
    excerpt: "The impact of our mobile healthcare units in bringing essential medical services to underserved communities.",
    coverImage: "/blog/mobile-clinics.jpg",
    category: "Health",
    author: {
      name: "Dr. Fatima Musa",
      avatar: "/team/fatima-musa.jpg"
    },
    publishedAt: "2024-10-22",
    readTime: 7,
    views: 1650,
    likes: 98,
    slug: "healthcare-access-mobile-clinics-difference"
  },
  {
    id: 4,
    title: "Education Revolution: AI-Powered Learning in Rural Schools",
    excerpt: "Exploring how artificial intelligence is transforming education delivery in remote areas with limited resources.",
    coverImage: "/blog/ai-education.jpg",
    category: "Education",
    author: {
      name: "Prof. Chioma Okafor",
      avatar: "/team/chioma-okafor.jpg"
    },
    publishedAt: "2024-10-20",
    readTime: 9,
    views: 2850,
    likes: 156,
    slug: "education-revolution-ai-powered-learning-rural-schools"
  },
  {
    id: 5,
    title: "Women Entrepreneurs: Building Economic Independence",
    excerpt: "Success stories from our women's empowerment program and how microfinance is changing lives.",
    coverImage: "/blog/women-entrepreneurs.jpg",
    category: "Community",
    author: {
      name: "Aisha Abdullahi",
      avatar: "/team/aisha-abdullahi.jpg"
    },
    publishedAt: "2024-10-18",
    readTime: 5,
    views: 1420,
    likes: 78,
    slug: "women-entrepreneurs-building-economic-independence"
  },
  {
    id: 6,
    title: "Clean Energy Solutions: Solar Power for Rural Communities",
    excerpt: "How renewable energy projects are bringing reliable electricity to off-grid communities across Nigeria.",
    coverImage: "/blog/solar-power.jpg",
    category: "Environment",
    author: {
      name: "Eng. Yusuf Aliyu",
      avatar: "/team/yusuf-aliyu.jpg"
    },
    publishedAt: "2024-10-15",
    readTime: 6,
    views: 1980,
    likes: 112,
    slug: "clean-energy-solutions-solar-power-rural-communities"
  }
];

const categoryColors = {
  "Education": "bg-blue-100 text-blue-700 border-blue-200",
  "Environment": "bg-green-100 text-green-700 border-green-200",
  "Innovation": "bg-purple-100 text-purple-700 border-purple-200",
  "Health": "bg-red-100 text-red-700 border-red-200",
  "Community": "bg-orange-100 text-orange-700 border-orange-200"
};

export default function BlogFeed() {
  const [filter, setFilter] = useState("all");
  const [displayCount, setDisplayCount] = useState(6);

  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === filter);

  const displayedPosts = filteredPosts.slice(0, displayCount);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const loadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={filter === "all" ? "egi-button-cyber" : ""}
        >
          All Posts
        </Button>
        {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
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

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {displayedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className={categoryColors[post.category as keyof typeof categoryColors]}>
                  {post.category}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white text-sm">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {post.views}
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  {post.likes}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta Info */}
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime} min read</span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Author & Read More */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {displayCount < filteredPosts.length && (
        <div className="text-center">
          <Button onClick={loadMore} className="egi-button-ghost">
            Load More Posts
          </Button>
        </div>
      )}

      {/* No Posts State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">📝</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No posts found</h3>
          <p className="text-gray-500">Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
}
