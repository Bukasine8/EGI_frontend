"use client";

import { GraduationCap, TreePine, Users, Rocket, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay: number;
  gradient: string;
}

function StatCard({ icon: Icon, value, label, delay, gradient }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && value.includes("+")) {
      const target = parseInt(value.replace(/[^0-9,]/g, "").replace(/,/g, ""));
      const duration = 2500;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="egi-glass-card text-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 opacity-20 ${gradient} blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
        
        <div className="relative z-10">
          {/* Icon with holographic effect */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
            <Icon className="w-10 h-10 text-white" />
          </div>
          
          {/* Animated counter */}
          <div className="mb-3">
            <div className="text-4xl font-bold egi-text-holographic mb-1">
              {value.includes("+") ? `${count.toLocaleString()}+` : value}
            </div>
            <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60"></div>
          </div>

          {/* Label */}
          <p className="font-mono text-sm text-gray-300 uppercase tracking-wider">{label}</p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      </div>
    </div>
  );
}

export default function ImpactStats() {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef}
      className="relative bg-primary egi-section-padding overflow-hidden egi-reveal"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="egi-float absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-secondary/5 to-accent/5 blur-3xl"></div>
        <div className="egi-float-delayed absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-accent/5 to-muted/5 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 191, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 191, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 egi-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-cyan-300 text-sm">Real Impact</span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Measuring Our <span className="egi-text-holographic">Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven results showcasing the transformative power of 
            technology-enabled environmental education across Nigeria.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <StatCard
            icon={GraduationCap}
            value="20+"
            label="Schools Connected"
            delay={0}
            gradient="bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
          />
          <StatCard
            icon={Users}
            value="2,000+"
            label="Students Transformed"
            delay={200}
            gradient="bg-gradient-to-r from-purple-500/20 to-pink-500/20"
          />
          <StatCard
            icon={TreePine}
            value="10,000+"
            label="Trees Planted"
            delay={400}
            gradient="bg-gradient-to-r from-green-500/20 to-emerald-500/20"
          />
          <StatCard
            icon={Rocket}
            value="50+"
            label="Projects Launched"
            delay={600}
            gradient="bg-gradient-to-r from-orange-500/20 to-red-500/20"
          />
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <div className="egi-glass-card max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <h3 className="font-heading text-3xl font-bold text-white">
                Building Tomorrow's <span className="egi-text-holographic">Leaders</span>
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every metric represents a life changed, a community empowered, and a step toward 
              a sustainable future. Through cutting-edge technology and innovative partnerships, 
              we're not just educating—we're revolutionizing how environmental stewardship 
              is taught and practiced across Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
