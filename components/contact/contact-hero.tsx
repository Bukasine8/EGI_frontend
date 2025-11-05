"use client";

import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary/95 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 text-sm font-medium">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Connect
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to make a difference? Whether you're interested in partnerships, 
              volunteering, or learning more about our impact, we'd love to hear from you.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="egi-glass-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-lg font-semibold text-white mb-1">Call Us</div>
              <div className="text-gray-300">+234 803 123 4567</div>
            </div>
            <div className="egi-glass-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-lg font-semibold text-white mb-1">Email Us</div>
              <div className="text-gray-300">hello@egi.org.ng</div>
            </div>
            <div className="egi-glass-card p-6 text-center hover:scale-105 transition-all duration-300">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-white mb-1">Visit Us</div>
              <div className="text-gray-300">Lagos, Nigeria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
