"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Calendar, Tag, Mail } from "lucide-react";

const popularPosts = [
  {
    title: "Digital Literacy Transforming Rural Education",
    slug: "digital-literacy-transforming-rural-education",
    views: 2500,
    date: "Nov 1, 2024"
  },
  {
    title: "Women Entrepreneurs Success Stories",
    slug: "women-entrepreneurs-success-stories", 
    views: 2100,
    date: "Oct 28, 2024"
  },
  {
    title: "Sustainable Agriculture Training Program",
    slug: "sustainable-agriculture-training-program",
    views: 1850,
    date: "Oct 25, 2024"
  },
  {
    title: "Mobile Health Clinics Impact Report",
    slug: "mobile-health-clinics-impact-report",
    views: 1650,
    date: "Oct 22, 2024"
  }
];

const categories = [
  { name: "Education", count: 24 },
  { name: "Environment", count: 18 },
  { name: "Health", count: 15 },
  { name: "Innovation", count: 12 },
  { name: "Community", count: 21 }
];

const tags = [
  "Digital Literacy", "Sustainability", "Healthcare", "Agriculture", 
  "Women Empowerment", "Clean Energy", "Education Technology", 
  "Community Development", "Innovation", "Rural Development"
];

const recentPosts = [
  {
    title: "AI-Powered Learning in Rural Schools",
    slug: "ai-powered-learning-rural-schools",
    date: "Oct 20, 2024",
    category: "Education"
  },
  {
    title: "Clean Energy Solutions for Communities",
    slug: "clean-energy-solutions-communities",
    date: "Oct 15, 2024", 
    category: "Environment"
  },
  {
    title: "Microfinance Impact on Women's Lives",
    slug: "microfinance-impact-womens-lives",
    date: "Oct 12, 2024",
    category: "Community"
  }
];

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Search Articles</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search blog posts..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 hover:text-secondary transition-colors cursor-pointer line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="font-medium text-gray-700">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
              <h4 className="font-semibold text-gray-900 hover:text-secondary transition-colors cursor-pointer line-clamp-2 mb-2">
                {post.title}
              </h4>
              <div className="flex items-center text-xs text-gray-500">
                <Badge variant="outline" className="mr-2 text-xs">
                  {post.category}
                </Badge>
                <Calendar className="w-3 h-3 mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-secondary hover:text-primary transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 border border-secondary/20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-4">
            <Mail className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">Stay Updated</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Get the latest stories and updates delivered directly to your inbox.
          </p>
          <div className="space-y-3">
            <Input
              placeholder="Enter your email"
              className="text-center"
            />
            <Button className="w-full egi-button-cyber">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
