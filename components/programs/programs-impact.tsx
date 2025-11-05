"use client";

import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, TreePine, Heart, Award, Globe } from "lucide-react";

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
    <div ref={counterRef} className="text-4xl font-bold text-primary lg:text-5xl">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const impactStats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Lives Transformed",
    description: "Individuals directly impacted by our programs",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: GraduationCap,
    value: 2500,
    suffix: "+",
    label: "Students Educated",
    description: "Children and adults provided with educational opportunities",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: TreePine,
    value: 50000,
    suffix: "+",
    label: "Trees Planted",
    description: "Contributing to environmental restoration",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Heart,
    value: 10000,
    suffix: "+",
    label: "Health Screenings",
    description: "Medical checkups and health services provided",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Award,
    value: 1200,
    suffix: "+",
    label: "Women Empowered",
    description: "Women trained in skills and leadership",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Communities Served",
    description: "Local communities across Nigeria",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

export default function ProgramsImpact() {
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
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Our Programs <span className="text-primary">Impact</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Measuring the difference our programs make in communities
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${stat.bgColor} transition-transform group-hover:scale-110`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <Counter
                end={stat.value}
                duration={2000}
                suffix={stat.suffix}
              />
              
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {stat.label}
              </h3>
              
              <p className="mt-2 text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mt-20">
          <div className="rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  Real Stories, Real Impact
                </h3>
                <p className="mb-6 text-gray-600">
                  Behind every number is a story of transformation. Our programs 
                  don't just change statistics – they change lives, communities, 
                  and futures.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <p className="text-sm text-gray-600">
                      <strong>Education:</strong> 95% of our scholarship recipients 
                      complete their studies and find employment
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-secondary"></div>
                    <p className="text-sm text-gray-600">
                      <strong>Environment:</strong> Our tree planting initiatives 
                      have restored 500+ hectares of degraded land
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                    <p className="text-sm text-gray-600">
                      <strong>Health:</strong> 85% reduction in preventable diseases 
                      in communities with our health programs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-600">Program Completion Rate</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-2xl font-bold text-secondary">4.8/5</div>
                  <div className="text-sm text-gray-600">Beneficiary Satisfaction</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">Community Engagement</div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Transparency Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
