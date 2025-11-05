"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BookOpen, Users, Calendar, TrendingUp } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary/95 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 text-sm font-medium">
            <BookOpen className="w-4 h-4 mr-2" />
            Stories & Updates
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Impact{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Stories
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover inspiring stories, educational insights, and the latest updates from our 
              mission to transform communities across Nigeria and beyond.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="egi-glass-card p-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-secondary"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="innovation">Innovation</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Blog Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            <div className="egi-glass-card p-6 text-center">
              <BookOpen className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-gray-300">Articles Published</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">3+</div>
              <div className="text-gray-300">Years Publishing</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">25K+</div>
              <div className="text-gray-300">Social Shares</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
