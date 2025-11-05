"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ExternalLink, Building2, Users, Heart, Zap } from "lucide-react";

// Mock partner data - replace with Supabase data
const allPartners = [
  {
    id: 1,
    name: "UNICEF Nigeria",
    logo: "/partners/unicef.png",
    slug: "unicef-nigeria",
    type: "Technical",
    description: "Supporting child education and welfare programs across Nigeria with technical expertise and funding.",
    projectsSupported: 15,
    yearsActive: 5,
    contribution: "₦450M"
  },
  {
    id: 2,
    name: "Microsoft Nigeria",
    logo: "/partners/microsoft.png",
    slug: "microsoft-nigeria",
    type: "Technical",
    description: "Providing digital literacy training and technology infrastructure for rural schools.",
    projectsSupported: 8,
    yearsActive: 3,
    contribution: "₦200M"
  },
  {
    id: 3,
    name: "Dangote Foundation",
    logo: "/partners/dangote.png",
    slug: "dangote-foundation",
    type: "Sponsor",
    description: "Major funding partner for educational infrastructure and community development projects.",
    projectsSupported: 25,
    yearsActive: 7,
    contribution: "₦1.2B"
  },
  {
    id: 4,
    name: "Shell Nigeria",
    logo: "/partners/shell.png",
    slug: "shell-nigeria",
    type: "CSR",
    description: "Environmental sustainability programs and clean energy initiatives in rural communities.",
    projectsSupported: 12,
    yearsActive: 4,
    contribution: "₦350M"
  },
  {
    id: 5,
    name: "Access Bank",
    logo: "/partners/access-bank.png",
    slug: "access-bank",
    type: "Sponsor",
    description: "Financial literacy programs and microfinance support for women entrepreneurs.",
    projectsSupported: 6,
    yearsActive: 2,
    contribution: "₦150M"
  },
  {
    id: 6,
    name: "Flour Mills Nigeria",
    logo: "/partners/flour-mills.png",
    slug: "flour-mills",
    type: "In-kind",
    description: "Nutrition programs and food security initiatives for school feeding programs.",
    projectsSupported: 10,
    yearsActive: 3,
    contribution: "₦80M"
  }
];

const partnerTypeIcons = {
  "Sponsor": Heart,
  "Technical": Zap,
  "CSR": Building2,
  "In-kind": Users
};

const partnerTypeColors = {
  "Sponsor": "bg-red-100 text-red-700 border-red-200",
  "Technical": "bg-blue-100 text-blue-700 border-blue-200",
  "CSR": "bg-green-100 text-green-700 border-green-200",
  "In-kind": "bg-purple-100 text-purple-700 border-purple-200"
};

export default function PartnerDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [filteredPartners, setFilteredPartners] = useState(allPartners);

  // Filter partners based on search and type
  const handleFilter = () => {
    let filtered = allPartners;

    if (searchTerm) {
      filtered = filtered.filter(partner =>
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter(partner => partner.type === selectedType);
    }

    setFilteredPartners(filtered);
  };

  // Apply filters whenever search term or type changes
  useEffect(() => {
    handleFilter();
  }, [searchTerm, selectedType]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Partner{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Directory
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive network of partners and learn about their unique contributions 
            to our mission of sustainable development.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search partners by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Sponsor">Sponsors</SelectItem>
                <SelectItem value="Technical">Technical Partners</SelectItem>
                <SelectItem value="CSR">CSR Partners</SelectItem>
                <SelectItem value="In-kind">In-kind Partners</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPartners.map((partner) => {
            const IconComponent = partnerTypeIcons[partner.type as keyof typeof partnerTypeIcons];
            return (
              <div
                key={partner.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Partner Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-xl p-2">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                          {partner.name}
                        </h3>
                        <Badge className={`mt-2 ${partnerTypeColors[partner.type as keyof typeof partnerTypeColors]}`}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {partner.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{partner.projectsSupported}</div>
                      <div className="text-sm text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">{partner.yearsActive}</div>
                      <div className="text-sm text-gray-500">Years Active</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{partner.contribution}</div>
                      <div className="text-sm text-gray-500">Contributed</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={`/partners/${partner.slug}`}>
                    <Button className="w-full egi-button-ghost group-hover:egi-button-cyber transition-all duration-300">
                      View Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results State */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No partners found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
