"use client";

import { TrendingUp, Users, Building2, DollarSign } from "lucide-react";

export default function ImpactHighlights() {
  const stats = [
    {
      icon: Building2,
      value: "50+",
      label: "Active Partners",
      description: "Organizations working with us",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      value: "100+",
      label: "Joint Projects",
      description: "Collaborative initiatives completed",
      color: "text-accent"
    },
    {
      icon: DollarSign,
      value: "₦2.5B+",
      label: "Total Contributions",
      description: "Funds and resources mobilized",
      color: "text-green-500"
    },
    {
      icon: Users,
      value: "500K+",
      label: "Lives Impacted",
      description: "Through partnership programs",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Partnership{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Together, we've achieved remarkable milestones in sustainable development and community empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="egi-glass-card p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
