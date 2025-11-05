"use client";

import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, TreePine, Heart } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-white lg:text-5xl">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Individuals directly benefited from our programs",
  },
  {
    icon: GraduationCap,
    value: 2500,
    suffix: "+",
    label: "Students Educated",
    description: "Children and adults provided with educational opportunities",
  },
  {
    icon: TreePine,
    value: 50000,
    suffix: "+",
    label: "Trees Planted",
    description: "Contributing to reforestation and carbon offset",
  },
  {
    icon: Heart,
    value: 85,
    suffix: "%",
    label: "Community Satisfaction",
    description: "Of beneficiaries report improved quality of life",
  },
];

export default function ImpactNumbers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Our Impact in <span className="text-secondary">Numbers</span>
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Measuring the difference we've made together
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <Counter
                end={stat.value}
                duration={2000}
                suffix={stat.suffix}
              />
              
              <h3 className="mt-2 text-xl font-bold text-white">
                {stat.label}
              </h3>
              
              <p className="mt-2 text-sm text-white/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Every Number Tells a Story
            </h3>
            <p className="text-white/90">
              Behind every statistic is a real person whose life has been touched 
              by our work. These numbers represent hope, opportunity, and the 
              collective power of communities working together for positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
