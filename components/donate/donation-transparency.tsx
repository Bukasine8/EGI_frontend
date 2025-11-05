"use client";

import { Shield, Eye, Award, TrendingUp, PieChart, FileText } from "lucide-react";

export default function DonationTransparency() {
  const transparencyFeatures = [
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Track exactly how your donation is used with real-time updates and detailed reports."
    },
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "Bank-level security with verified impact metrics and third-party audits."
    },
    {
      icon: Award,
      title: "Certified Impact",
      description: "Receive official certificates and detailed impact reports for all donations."
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "See quantified outcomes with before/after data and beneficiary testimonials."
    }
  ];

  const fundAllocation = [
    { category: "Direct Programs", percentage: 85, color: "bg-green-500" },
    { category: "Operations", percentage: 10, color: "bg-blue-500" },
    { category: "Fundraising", percentage: 5, color: "bg-purple-500" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Complete{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Transparency
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in full accountability. See exactly how your donation creates impact 
            and track the progress of every project you support.
          </p>
        </div>

        {/* Transparency Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {transparencyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Fund Allocation */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                <PieChart className="w-8 h-8 mr-3" />
                Fund Allocation
              </h3>
              <p className="text-gray-600 mb-8">
                See exactly how every naira is used to create maximum impact in our communities.
              </p>
              
              <div className="space-y-4">
                {fundAllocation.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
                      <span className="font-medium text-gray-700">{item.category}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Simplified pie chart representation */}
              <div className="w-64 h-64 mx-auto relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600" 
                       style={{clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 15%)"}}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600" 
                       style={{clipPath: "polygon(50% 50%, 85% 15%, 100% 15%, 100% 25%)"}}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                    <div>
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-sm text-gray-600">Direct Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-green-800">Donation Certificates</h3>
            </div>
            <p className="text-green-700 mb-6">
              Every donation comes with an official certificate for tax purposes and impact tracking.
            </p>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Instant digital certificate
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                QR code for verification
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Tax deduction eligible
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-800">Impact Reports</h3>
            </div>
            <p className="text-blue-700 mb-6">
              Receive detailed reports showing the specific impact of your contribution.
            </p>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Quarterly impact updates
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Beneficiary stories & photos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Measurable outcomes data
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
