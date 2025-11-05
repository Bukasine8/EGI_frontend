"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Users, Building2, Handshake } from "lucide-react";

export default function PartnersHero() {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary/95 to-slate-900 overflow-hidden">
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
            <Building2 className="w-4 h-4 mr-2" />
            Our Partners
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Building the Future{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Together
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the incredible organizations and companies that have joined forces with EGI 
              to create lasting impact in education, environment, and community development.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-2xl mx-auto">
            <div className="egi-glass-card p-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search partners..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-secondary"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full sm:w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Partnership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Partners</SelectItem>
                    <SelectItem value="sponsor">Sponsors</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="csr">CSR Partners</SelectItem>
                    <SelectItem value="in-kind">In-kind</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="egi-glass-card p-6 text-center">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-300">Active Partners</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">₦2.5B+</div>
              <div className="text-gray-300">Total Contributions</div>
            </div>
            <div className="egi-glass-card p-6 text-center">
              <Handshake className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-gray-300">Joint Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
