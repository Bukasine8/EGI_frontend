"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Repeat, Calendar, Star, Gift } from "lucide-react";

const recurringOptions = [
  {
    frequency: "Monthly",
    description: "Sustainable impact every month",
    badge: "Most Popular",
    discount: "Save on processing fees"
  },
  {
    frequency: "Quarterly", 
    description: "Seasonal support",
    badge: null,
    discount: "Flexible timing"
  },
  {
    frequency: "Annually",
    description: "Maximum impact yearly",
    badge: "Best Value",
    discount: "Lowest fees"
  }
];

export default function RecurringDonations() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
          <Repeat className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Recurring Donations</h3>
        <p className="text-gray-600 text-sm">
          Create lasting change with regular contributions
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {recurringOptions.map((option, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-accent/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-accent mr-2" />
                <span className="font-semibold text-gray-900">{option.frequency}</span>
              </div>
              {option.badge && (
                <Badge variant="secondary" className="text-xs">
                  {option.badge}
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">{option.description}</p>
            <p className="text-xs text-accent font-medium">{option.discount}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <Star className="w-5 h-5 text-accent mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary mb-1">Recurring Donor Benefits</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Quarterly impact reports</li>
              <li>• Exclusive donor events</li>
              <li>• Priority project updates</li>
              <li>• Annual tax summary</li>
            </ul>
          </div>
        </div>
      </div>

      <Button className="w-full egi-button-ghost mb-4">
        <Repeat className="w-4 h-4 mr-2" />
        Set Up Recurring Donation
      </Button>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <Gift className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Gift a Donation</h4>
            <p className="text-sm text-blue-700">
              Donate in someone's honor and they'll receive a special certificate.
            </p>
            <Button variant="outline" size="sm" className="mt-2 text-blue-700 border-blue-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
