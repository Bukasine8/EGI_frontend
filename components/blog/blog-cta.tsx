"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { PenTool, Users, ArrowRight, Mail, Rss } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Newsletter */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
              <Mail className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Never Miss an{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Update
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter and be the first to read our latest impact stories, 
              program updates, and insights from the field.
            </p>
            
            {/* Newsletter Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-secondary"
                />
                <Button className="egi-button-cyber">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center">
                Join 5,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Right Column - Contribute */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
              <PenTool className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Share Your{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Have an inspiring story or insights to share? We'd love to feature your 
              experiences and perspectives on our blog.
            </p>

            {/* Contribution Options */}
            <div className="space-y-4 mb-8">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-3 text-secondary" />
                  <span className="font-medium">Community Stories</span>
                </div>
                <p className="text-sm text-gray-400 mt-1 ml-8">
                  Share how EGI programs have impacted your life or community
                </p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center text-white">
                  <PenTool className="w-5 h-5 mr-3 text-accent" />
                  <span className="font-medium">Expert Insights</span>
                </div>
                <p className="text-sm text-gray-400 mt-1 ml-8">
                  Contribute professional perspectives on development topics
                </p>
              </div>
            </div>

            <Link href="/contact">
              <Button className="egi-button-ghost group">
                <PenTool className="w-4 h-4 mr-2" />
                Contribute Content
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Section - Social & RSS */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Stay Connected</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/rss">
                <Button className="egi-button-ghost group">
                  <Rss className="w-4 h-4 mr-2" />
                  RSS Feed
                </Button>
              </Link>
              <Link href="/blog/archive">
                <Button className="egi-button-ghost group">
                  Blog Archive
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Follow our journey as we continue to create positive change across Nigeria. 
              Every story shared helps inspire others to join our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
