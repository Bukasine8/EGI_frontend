"use client";

import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Programs", count: 12 },
  { id: "education", name: "Education", count: 4 },
  { id: "environment", name: "Environment", count: 3 },
  { id: "health", name: "Health", count: 3 },
  { id: "community", name: "Community Development", count: 2 },
];

interface ProgramsHeroProps {
  onCategoryChange?: (category: string) => void;
  onSearchChange?: (search: string) => void;
}

export default function ProgramsHero({ 
  onCategoryChange, 
  onSearchChange 
}: ProgramsHeroProps = {}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    onSearchChange?.(query);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header Content */}
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Our Programs
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
            Creating <span className="text-primary">Lasting Change</span>{" "}
            Through Action
          </h1>
          
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 lg:text-xl">
            Discover our comprehensive programs designed to empower communities, 
            protect the environment, and build a sustainable future for all.
          </p>
        </div>

        {/* Search and Filter */}
        <div
          className={`mx-auto max-w-4xl transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 shadow-sm hover:bg-gray-50"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary lg:text-4xl">12+</div>
            <div className="text-sm text-gray-600">Active Programs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary lg:text-4xl">25+</div>
            <div className="text-sm text-gray-600">Communities Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 lg:text-4xl">15K+</div>
            <div className="text-sm text-gray-600">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 lg:text-4xl">50K+</div>
            <div className="text-sm text-gray-600">Trees Planted</div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>
    </section>
  );
}
