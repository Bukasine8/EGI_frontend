"use client";

import { TrendingUp, Users, Calendar, MapPin, Award, Target } from "lucide-react";

export default function EventsAnalytics() {
  const analytics = [
    {
      icon: Calendar,
      value: "50+",
      label: "Events This Year",
      description: "Workshops, seminars, and community programs",
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Total Participants",
      description: "Across all events and programs",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: MapPin,
      value: "25+",
      label: "Locations Covered",
      description: "States and communities reached",
      color: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Satisfaction Rate",
      description: "Participant feedback and ratings",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Award,
      value: "500+",
      label: "Certificates Issued",
      description: "Skills and completion certificates",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: Target,
      value: "80%",
      label: "Goal Achievement",
      description: "Events meeting impact targets",
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    }
  ];

  const impactMetrics = [
    {
      category: "Education",
      events: 18,
      participants: 3500,
      impact: "2,000+ students gained new skills"
    },
    {
      category: "Environment",
      events: 12,
      participants: 2800,
      impact: "10,000+ trees planted"
    },
    {
      category: "Health",
      events: 8,
      participants: 2200,
      impact: "5,000+ health screenings completed"
    },
    {
      category: "Innovation",
      events: 6,
      participants: 900,
      impact: "50+ innovative solutions developed"
    },
    {
      category: "Empowerment",
      events: 6,
      participants: 600,
      impact: "300+ businesses launched"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Events{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven insights into our event impact, participant engagement, 
            and community transformation metrics.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {analytics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="egi-glass-card p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${metric.bgColor} mb-6`}>
                  <IconComponent className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            );
          })}
        </div>

        {/* Impact by Category */}
        <div className="egi-glass-card p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Impact by Category
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {impactMetrics.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white">{category.category}</h4>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary">{category.events}</div>
                    <div className="text-sm text-gray-400">Events</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Participants:</span>
                    <span className="text-accent font-semibold">{category.participants.toLocaleString()}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-sm text-gray-400 mb-1">Key Impact:</div>
                    <div className="text-white font-medium">{category.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="egi-glass-card p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">85%</div>
            <div className="text-white font-semibold mb-1">Registration Rate</div>
            <div className="text-sm text-gray-400">Visitors who register for events</div>
          </div>
          
          <div className="egi-glass-card p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">92%</div>
            <div className="text-white font-semibold mb-1">Attendance Rate</div>
            <div className="text-sm text-gray-400">Registered participants who attend</div>
          </div>
          
          <div className="egi-glass-card p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">78%</div>
            <div className="text-white font-semibold mb-1">Follow-up Engagement</div>
            <div className="text-sm text-gray-400">Participants who join ongoing programs</div>
          </div>
        </div>

        {/* Growth Trend */}
        <div className="mt-16 egi-glass-card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Year-over-Year Growth</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">+150%</div>
              <div className="text-gray-300">Event Participation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">+200%</div>
              <div className="text-gray-300">Community Reach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">+180%</div>
              <div className="text-gray-300">Impact Metrics</div>
            </div>
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Our events continue to grow in scale and impact, reaching more communities 
            and creating deeper, more sustainable change each year.
          </p>
        </div>
      </div>
    </section>
  );
}
