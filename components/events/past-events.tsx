"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ExternalLink, Eye, Download } from "lucide-react";

// Mock past events data
const pastEvents = [
  {
    id: 1,
    title: "Tech Skills Bootcamp 2024",
    description: "Intensive 3-day coding bootcamp that equipped 200 students with web development skills.",
    date: "2024-09-15",
    location: "University of Lagos",
    category: "Education",
    image: "/events/past/tech-bootcamp.jpg",
    attendees: 200,
    impact: "95% of participants secured internships or jobs within 6 months",
    blogRecap: "/blog/tech-skills-bootcamp-2024-success",
    gallery: "/gallery/tech-bootcamp-2024",
    report: "/reports/tech-bootcamp-2024.pdf",
    featured: true
  },
  {
    id: 2,
    title: "Green Schools Initiative Launch",
    description: "Launched solar power systems in 10 rural schools, providing clean energy to 3,000 students.",
    date: "2024-08-20",
    location: "Kaduna State",
    category: "Environment",
    image: "/events/past/green-schools.jpg",
    attendees: 150,
    impact: "10 schools now have reliable electricity, improving learning outcomes by 40%",
    blogRecap: "/blog/green-schools-initiative-launch",
    gallery: "/gallery/green-schools-2024",
    report: "/reports/green-schools-impact-2024.pdf",
    featured: false
  },
  {
    id: 3,
    title: "Women Entrepreneurs Summit",
    description: "Empowered 300 women with business skills and connected them with microfinance opportunities.",
    date: "2024-07-10",
    location: "Abuja International Conference Centre",
    category: "Empowerment",
    image: "/events/past/women-summit.jpg",
    attendees: 300,
    impact: "150 new businesses launched, creating 500+ jobs in local communities",
    blogRecap: "/blog/women-entrepreneurs-summit-2024",
    gallery: "/gallery/women-summit-2024",
    report: "/reports/women-summit-impact-2024.pdf",
    featured: true
  },
  {
    id: 4,
    title: "Community Health Fair",
    description: "Provided free health screenings and medical consultations to 1,500 community members.",
    date: "2024-06-05",
    location: "Kano State",
    category: "Health",
    image: "/events/past/health-fair.jpg",
    attendees: 1500,
    impact: "Early detection of health issues in 200+ cases, 100% vaccination coverage achieved",
    blogRecap: "/blog/community-health-fair-2024",
    gallery: "/gallery/health-fair-2024",
    report: "/reports/health-fair-impact-2024.pdf",
    featured: false
  },
  {
    id: 5,
    title: "Innovation Challenge Finals",
    description: "Student innovators presented solutions to local challenges, with winners receiving funding.",
    date: "2024-05-18",
    location: "Lagos Technology Hub",
    category: "Innovation",
    image: "/events/past/innovation-challenge.jpg",
    attendees: 250,
    impact: "5 winning solutions received ₦2M funding, 3 are now operational startups",
    blogRecap: "/blog/innovation-challenge-finals-2024",
    gallery: "/gallery/innovation-challenge-2024",
    report: "/reports/innovation-challenge-2024.pdf",
    featured: true
  },
  {
    id: 6,
    title: "Teacher Training Workshop",
    description: "Enhanced teaching methodologies for 100 educators across 20 schools.",
    date: "2024-04-12",
    location: "Ogun State Education District",
    category: "Education",
    image: "/events/past/teacher-training.jpg",
    attendees: 100,
    impact: "Student performance improved by 35% in participating schools",
    blogRecap: "/blog/teacher-training-workshop-2024",
    gallery: "/gallery/teacher-training-2024",
    report: "/reports/teacher-training-impact-2024.pdf",
    featured: false
  }
];

const categoryColors = {
  "Education": "bg-blue-100 text-blue-700 border-blue-200",
  "Environment": "bg-green-100 text-green-700 border-green-200",
  "Innovation": "bg-purple-100 text-purple-700 border-purple-200",
  "Empowerment": "bg-pink-100 text-pink-700 border-pink-200",
  "Health": "bg-red-100 text-red-700 border-red-200"
};

export default function PastEvents() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  
  const filteredEvents = filter === "all" 
    ? pastEvents 
    : pastEvents.filter(event => event.category.toLowerCase() === filter);

  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Past{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the impact we've created through our past events and initiatives. 
            Each event represents lives transformed and communities empowered.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "egi-button-cyber" : ""}
          >
            All Events
          </Button>
          {Array.from(new Set(pastEvents.map(event => event.category))).map((category) => (
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]}`}>
                    {event.category}
                  </Badge>
                </div>
                {event.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-secondary text-primary font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {event.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-3 h-3 mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-3 h-3 mr-2" />
                    {event.attendees.toLocaleString()} participants
                  </div>
                </div>

                {/* Impact Highlight */}
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-3 mb-4">
                  <h5 className="text-sm font-semibold text-primary mb-1">Impact Achieved:</h5>
                  <p className="text-xs text-gray-700">{event.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Link href={event.blogRecap} className="flex-1">
                      <Button size="sm" className="w-full egi-button-ghost text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        Read Recap
                      </Button>
                    </Link>
                    <Link href={event.gallery} className="flex-1">
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Gallery
                      </Button>
                    </Link>
                  </div>
                  <Link href={event.report} className="block">
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      Download Report
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && filteredEvents.length > 6 && (
          <div className="text-center">
            <Button 
              onClick={() => setShowAll(true)}
              className="egi-button-ghost"
            >
              Load More Events
            </Button>
          </div>
        )}

        {/* No Events State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No past events found</h3>
            <p className="text-gray-500">Try selecting a different category.</p>
          </div>
        )}

        {/* Impact Summary */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Cumulative Impact from Past Events
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our events have created lasting change across communities, 
              transforming lives and building a sustainable future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-gray-600">Events Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">25+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">₦500M+</div>
              <div className="text-gray-600">Value Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
