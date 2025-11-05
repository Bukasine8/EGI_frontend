"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";

// Mock upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Digital Literacy Workshop for Rural Teachers",
    description: "Empowering educators with essential digital tools and teaching methodologies to enhance classroom learning experiences.",
    date: "2025-11-15",
    time: "10:00 AM - 4:00 PM",
    location: "Lagos State University, Ojo Campus",
    category: "Education",
    image: "/events/digital-literacy.jpg",
    attendees: 150,
    maxAttendees: 200,
    registrationDeadline: "2025-11-10",
    featured: true,
    slug: "digital-literacy-workshop-rural-teachers"
  },
  {
    id: 2,
    title: "Community Tree Planting Initiative",
    description: "Join us in our environmental conservation efforts as we plant 1,000 trees across Ogun State communities.",
    date: "2025-11-22",
    time: "8:00 AM - 2:00 PM", 
    location: "Ogun State Forest Reserve, Abeokuta",
    category: "Environment",
    image: "/events/tree-planting.jpg",
    attendees: 300,
    maxAttendees: 500,
    registrationDeadline: "2025-11-18",
    featured: false,
    slug: "community-tree-planting-initiative"
  },
  {
    id: 3,
    title: "Student Innovation Showcase 2025",
    description: "Celebrating young innovators and their groundbreaking solutions to community challenges.",
    date: "2025-11-28",
    time: "2:00 PM - 8:00 PM",
    location: "Technology Hub, Central Business District, Abuja",
    category: "Innovation",
    image: "/events/innovation-showcase.jpg",
    attendees: 200,
    maxAttendees: 300,
    registrationDeadline: "2025-11-25",
    featured: true,
    slug: "student-innovation-showcase-2025"
  },
  {
    id: 4,
    title: "Women in Tech Mentorship Program Launch",
    description: "Launching our comprehensive mentorship program to support women pursuing careers in technology.",
    date: "2025-12-05",
    time: "11:00 AM - 5:00 PM",
    location: "EGI Innovation Center, Victoria Island, Lagos",
    category: "Technology",
    image: "/events/women-in-tech.jpg",
    attendees: 80,
    maxAttendees: 120,
    registrationDeadline: "2025-12-01",
    featured: false,
    slug: "women-in-tech-mentorship-launch"
  },
  {
    id: 5,
    title: "Community Health Outreach Program",
    description: "Free health screenings, medical consultations, and health education for underserved communities.",
    date: "2025-12-12",
    time: "9:00 AM - 4:00 PM",
    location: "Kano State Primary Healthcare Centers",
    category: "Health",
    image: "/events/health-outreach.jpg",
    attendees: 500,
    maxAttendees: 1000,
    registrationDeadline: "2025-12-08",
    featured: false,
    slug: "community-health-outreach-program"
  },
  {
    id: 6,
    title: "Youth Leadership Summit 2025",
    description: "Empowering the next generation of leaders with skills, networks, and opportunities for positive change.",
    date: "2025-12-18",
    time: "9:00 AM - 6:00 PM",
    location: "International Conference Centre, Abuja",
    category: "Leadership",
    image: "/events/youth-leadership.jpg",
    attendees: 250,
    maxAttendees: 400,
    registrationDeadline: "2025-12-15",
    featured: true,
    slug: "youth-leadership-summit-2025"
  }
];

const categoryColors = {
  "Education": "bg-blue-100 text-blue-700 border-blue-200",
  "Environment": "bg-green-100 text-green-700 border-green-200",
  "Innovation": "bg-purple-100 text-purple-700 border-purple-200",
  "Technology": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Health": "bg-red-100 text-red-700 border-red-200",
  "Leadership": "bg-orange-100 text-orange-700 border-orange-200"
};

export default function UpcomingEvents() {
  const [filter, setFilter] = useState("all");
  
  const filteredEvents = filter === "all" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category.toLowerCase() === filter);

  const featuredEvents = upcomingEvents.filter(event => event.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getRegistrationProgress = (attendees: number, maxAttendees: number) => {
    return (attendees / maxAttendees) * 100;
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in our mission to create positive change. Register for upcoming events 
            and be part of transformative experiences that make a real difference.
          </p>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8">Featured Events</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${categoryColors[event.category as keyof typeof categoryColors]}`}>
                        {event.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary text-primary font-semibold">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-3" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-3" />
                        {event.location}
                      </div>
                    </div>

                    {/* Registration Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Registration Progress</span>
                        <span className="text-sm font-semibold text-primary">
                          {event.attendees}/{event.maxAttendees}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getRegistrationProgress(event.attendees, event.maxAttendees)}%` }}
                        ></div>
                      </div>
                    </div>

                    <Button className="w-full egi-button-cyber group">
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "egi-button-cyber" : ""}
          >
            All Events
          </Button>
          {Array.from(new Set(upcomingEvents.map(event => event.category))).map((category) => (
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

        {/* All Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
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
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {event.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-3 h-3 mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-3 h-3 mr-2" />
                    {event.attendees}/{event.maxAttendees} registered
                  </div>
                </div>

                <Button className="w-full egi-button-ghost group-hover:egi-button-cyber transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Events State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later for new events.</p>
          </div>
        )}
      </div>
    </section>
  );
}
