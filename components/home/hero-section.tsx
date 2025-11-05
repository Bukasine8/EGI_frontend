"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="egi-float absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 blur-xl"></div>
        <div className="egi-float-delayed absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-accent/20 to-muted/20 blur-xl"></div>
        <div className="egi-float absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-secondary/30 to-primary/20 blur-xl"></div>
        
        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
          <path d="M200,400 Q400,300 600,400 T1000,400" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
          <path d="M50,600 Q250,500 450,600 T850,600" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="egi-container max-w-7xl">
          {/* Bento Grid Layout */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Main Content - Left Side */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-mono text-purple-300">Next-Gen Environmental Initiative</span>
              </div>

              {/* Main Heading */}
              <h1
                className={`font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all delay-300 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="text-white">Empowering</span>
                <br />
                <span className="egi-text-holographic">Young Minds</span>
                <br />
                <span className="text-white">for a</span>{" "}
                <span className="egi-text-holographic">Greener Future</span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl transition-all delay-500 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Revolutionizing environmental education through cutting-edge technology, 
                community partnerships, and sustainable innovation across Nigeria.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all delay-700 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <Link href="/get-involved">
                  <Button className="egi-button-cyber group text-lg px-8 py-4 h-auto">
                    <Zap className="w-5 h-5 mr-2" />
                    Join the Movement
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </Link>

                <Link href="/donate">
                  <Button className="egi-button-ghost group text-lg px-8 py-4 h-auto">
                    <Globe className="w-5 h-5 mr-2" />
                    Support Our Mission
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Bento Grid - Right Side */}
            <div className="lg:col-span-5 egi-bento-grid grid-cols-2 gap-4">
              <div
                className={`egi-glass-card col-span-2 transition-all delay-900 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold egi-text-holographic mb-2">2000+</div>
                  <div className="text-gray-300 font-mono text-sm">Students Transformed</div>
                </div>
              </div>
              
              <div
                className={`egi-glass-card transition-all delay-1000 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                  <div className="text-gray-300 font-mono text-xs">Schools Connected</div>
                </div>
              </div>
              
              <div
                className={`egi-glass-card transition-all delay-1100 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                  <div className="text-gray-300 font-mono text-xs">Trees Planted</div>
                </div>
              </div>
              
              <div
                className={`egi-glass-card col-span-2 transition-all delay-1200 duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">50+ Projects</div>
                  <div className="text-gray-300 font-mono text-xs">Sustainable Initiatives Launched</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-20">
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive mouse follower */}
      <div
        className="absolute pointer-events-none z-0 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
    </section>
  );
}
