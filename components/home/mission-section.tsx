"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Leaf, Heart, Target, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function MissionSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-primary via-primary-dark to-primary egi-section-padding overflow-hidden egi-reveal"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="egi-float absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 blur-3xl"></div>
        <div className="egi-float-delayed absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-accent/10 to-muted/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 egi-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="font-mono text-secondary text-sm">Our Purpose</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Transforming <span className="egi-text-holographic">Communities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of environmental education through innovation, 
            technology, and sustainable community development.
          </p>
        </div>

        {/* Mission & Vision Bento Grid */}
        <div className="egi-bento-grid mb-20">
          {/* Mission Card */}
          <div className="egi-glass-card col-span-2 lg:col-span-1 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                  <span className="font-mono text-xs text-cyan-300">MISSION</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Inspire & Empower
                </h3>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              To inspire and empower young Nigerians through cutting-edge education, 
              mentorship, and community development programs that create lasting positive change.
            </p>

            <Link href="/about">
              <Button className="egi-button-ghost group w-full">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Vision Card */}
          <div className="egi-glass-card col-span-2 lg:col-span-1 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-3">
                  <span className="font-mono text-xs text-purple-300">VISION</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Sustainable Future
                </h3>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              A Nigeria where every child has the opportunity to reach their full potential 
              in a safe, sustainable environment that promotes both personal growth and environmental stewardship.
            </p>

            <Link href="/programs">
              <Button className="egi-button-cyber group w-full">
                Our Programs
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-3xl font-bold text-white mb-4">
            Our <span className="egi-text-holographic">Focus Areas</span>
          </h3>
          <p className="text-gray-300 text-lg">
            Creating impact through targeted technological initiatives
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Education */}
          <div className="egi-glass-card group hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-3">Education</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Next-generation learning platforms and digital literacy programs
              </p>
            </div>
          </div>

          {/* Environment */}
          <div className="egi-glass-card group hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-green-400" />
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-3">Environment</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Smart conservation technologies and sustainable innovation
              </p>
            </div>
          </div>

          {/* Health */}
          <div className="egi-glass-card group hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-pink-400" />
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-3">Health</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Digital health solutions and wellness technology access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
