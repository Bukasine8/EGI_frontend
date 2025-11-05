"use client";

import { Users, GraduationCap, Heart, Droplets } from "lucide-react";

const impactData = [
  {
    amount: 5000,
    impacts: [
      { icon: GraduationCap, text: "Provides school supplies for 5 students" },
      { icon: Heart, text: "Funds 2 health screenings" }
    ]
  },
  {
    amount: 10000,
    impacts: [
      { icon: GraduationCap, text: "Sponsors 1 student for a month" },
      { icon: Droplets, text: "Provides clean water for 10 families" }
    ]
  },
  {
    amount: 25000,
    impacts: [
      { icon: Users, text: "Trains 5 women in business skills" },
      { icon: GraduationCap, text: "Funds digital literacy for 20 students" }
    ]
  },
  {
    amount: 50000,
    impacts: [
      { icon: Heart, text: "Supports mobile clinic for 1 week" },
      { icon: Users, text: "Provides microfinance for 2 entrepreneurs" }
    ]
  }
];

export default function ImpactPreview() {
  return (
    <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 border border-secondary/20">
      <h3 className="text-xl font-bold text-primary mb-4">Your Impact</h3>
      <p className="text-gray-600 mb-6">See how your donation creates real change:</p>
      
      <div className="space-y-6">
        {impactData.map((item, index) => (
          <div key={index} className="bg-white/50 rounded-xl p-4">
            <div className="text-lg font-bold text-secondary mb-3">
              ₦{item.amount.toLocaleString()}
            </div>
            <div className="space-y-2">
              {item.impacts.map((impact, impactIndex) => {
                const IconComponent = impact.icon;
                return (
                  <div key={impactIndex} className="flex items-center text-sm text-gray-700">
                    <IconComponent className="w-4 h-4 mr-3 text-secondary flex-shrink-0" />
                    <span>{impact.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white/70 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>100% of your donation</strong> goes directly to programs. 
          Administrative costs are covered by separate funding.
        </p>
      </div>
    </div>
  );
}
