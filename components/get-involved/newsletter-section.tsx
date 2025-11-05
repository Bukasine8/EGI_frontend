"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Bell, Users, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Stay{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Get the latest volunteer opportunities, impact stories, and ways to get involved 
            delivered directly to your inbox.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-secondary"
                />
                <Button className="egi-button-cyber">
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Join 5,000+ changemakers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-300">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-gray-300">Ongoing Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
              <div className="text-gray-300">Communities Served</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Make a Difference?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="egi-button-cyber group">
                <Users className="w-5 h-5 mr-2" />
                Start Volunteering
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="egi-button-ghost group">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
