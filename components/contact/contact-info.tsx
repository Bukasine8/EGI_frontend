"use client";

import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone Numbers",
      items: [
        { label: "Main Office", value: "+234 803 123 4567" },
        { label: "Emergency", value: "+234 805 987 6543" },
        { label: "WhatsApp", value: "+234 807 456 7890" }
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      items: [
        { label: "General Inquiries", value: "hello@egi.org.ng" },
        { label: "Partnerships", value: "partners@egi.org.ng" },
        { label: "Media & Press", value: "media@egi.org.ng" }
      ]
    },
    {
      icon: MapPin,
      title: "Office Locations",
      items: [
        { label: "Head Office", value: "123 Innovation Drive, Victoria Island, Lagos" },
        { label: "Regional Office", value: "45 Unity Road, Garki, Abuja" },
        { label: "Field Office", value: "78 Community Street, Kaduna" }
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      items: [
        { label: "Monday - Friday", value: "8:00 AM - 6:00 PM" },
        { label: "Saturday", value: "9:00 AM - 2:00 PM" },
        { label: "Sunday", value: "Closed" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "https://facebook.com/egi", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/egi", color: "text-sky-500" },
    { icon: Instagram, name: "Instagram", url: "https://instagram.com/egi", color: "text-pink-600" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/company/egi", color: "text-blue-700" },
    { icon: Youtube, name: "YouTube", url: "https://youtube.com/egi", color: "text-red-600" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          Multiple ways to reach us. Choose the method that works best for you.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-8">
        {contactDetails.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                  <IconComponent className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
              </div>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-gray-600 font-medium">{item.label}:</span>
                    <span className="text-primary font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Media */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
        <p className="text-gray-600 mb-6">
          Stay connected with our latest updates and impact stories on social media.
        </p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <IconComponent className={`w-5 h-5 ${social.color}`} />
                <span className="font-medium text-gray-700">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Quick Response Promise */}
      <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
        <h3 className="text-xl font-semibold text-primary mb-3">Our Response Promise</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
            <span>Email inquiries: Within 24 hours</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
            <span>Phone calls: Immediate during office hours</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
            <span>Partnership proposals: Within 3-5 business days</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
            <span>Media requests: Within 2 business days</span>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-red-800 mb-3">Emergency Contact</h3>
        <p className="text-red-700 mb-3">
          For urgent matters related to ongoing projects or community emergencies:
        </p>
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-red-800">+234 805 987 6543</span>
        </div>
        <p className="text-sm text-red-600 mt-2">Available 24/7 for genuine emergencies only</p>
      </div>
    </div>
  );
}
