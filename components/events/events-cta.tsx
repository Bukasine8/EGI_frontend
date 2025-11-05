"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Bell, Users, ArrowRight, Sparkles } from "lucide-react";

export default function EventsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 mb-6">
            <Sparkles className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Get Involved?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of changemakers who are creating positive impact through our events. 
            Your participation can transform communities and change lives.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Register for Events</h3>
            <p className="text-gray-600 mb-6">
              Browse our upcoming events and secure your spot in transformative experiences.
            </p>
            <Link href="#upcoming-events">
              <Button className="egi-button-cyber group">
                View Events
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 mb-6 group-hover:scale-110 transition-transform">
              <Bell className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get notified about new events, workshops, and community programs.
            </p>
            <Link href="/newsletter">
              <Button className="egi-button-ghost group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Become a Volunteer</h3>
            <p className="text-gray-600 mb-6">
              Help organize and facilitate events that create lasting community impact.
            </p>
            <Link href="/get-involved">
              <Button className="egi-button-ghost group">
                Join Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-primary via-primary/95 to-slate-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Don't Miss Our Next{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Event
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of something bigger. Join our community of changemakers and help us 
              create sustainable solutions for Nigeria's most pressing challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/events/upcoming">
                <Button className="egi-button-cyber text-lg px-8 py-4 group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="egi-button-ghost text-lg px-8 py-4 group">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Never Miss an Event
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and be the first to know about upcoming events, 
              workshops, and community programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <Button className="egi-button-cyber">
                <Bell className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
