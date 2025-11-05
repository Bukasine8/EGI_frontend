"use client";

import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";

const categories = [
  { id: "all", name: "All Projects", count: 15 },
  { id: "education", name: "Education", count: 6 },
  { id: "environment", name: "Environment", count: 4 },
  { id: "health", name: "Health", count: 3 },
  { id: "infrastructure", name: "Infrastructure", count: 2 },
];

export default function ProjectsHero() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden egi-gradient-hero pt-20">
      <div className="egi-container egi-section-padding">
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
              Our Projects
            </span>
          </div>
          
          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-primary lg:text-6xl">
            Transforming <span className="egi-text-gradient">Communities</span>{" "}
            Through Action
          </h1>
          
          <p className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-primary/80 lg:text-xl">
            Explore our ongoing and completed projects that are making a real 
            difference in communities across Nigeria.
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
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/60" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-primary/20 bg-white/80 py-4 pl-12 pr-4 text-primary placeholder-primary/60 shadow-sm backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white/80 text-primary shadow-sm backdrop-blur-sm hover:bg-white"
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
            <div className="text-3xl font-bold text-primary lg:text-4xl">15+</div>
            <div className="text-sm font-medium text-primary/70">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary lg:text-4xl">30+</div>
            <div className="text-sm font-medium text-primary/70">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent lg:text-4xl">25+</div>
            <div className="text-sm font-medium text-primary/70">Communities Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary lg:text-4xl">₦50M+</div>
            <div className="text-sm font-medium text-primary/70">Investment Value</div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B2D1A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>
    </section>
  );
}
