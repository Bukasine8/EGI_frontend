"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  delay: number;
}

function BlogCard({
  title,
  excerpt,
  image,
  date,
  readTime,
  slug,
  delay,
}: BlogCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link href={`/blog/${slug}`}>
      <div
        ref={cardRef}
        className={`group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta */}
          <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
            {excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <span>Read More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function LatestPosts() {
  const posts = [
    {
      title: "How Your Donations Change Lives",
      excerpt:
        "Discover the real impact of your contributions and how they're transforming communities around the world. Every donation makes a difference.",
      image: "/images/blog-1.jpg",
      date: "Oct 20, 2025",
      readTime: "5 min read",
      slug: "how-donations-change-lives",
    },
    {
      title: "Success Story: Maria's Journey to Independence",
      excerpt:
        "Meet Maria, a single mother who transformed her life through our women empowerment program. Her story inspires thousands.",
      image: "/images/blog-2.jpg",
      date: "Oct 15, 2025",
      readTime: "7 min read",
      slug: "maria-success-story",
    },
    {
      title: "Building Hope: New School Opening in Rural Kenya",
      excerpt:
        "Celebrating the grand opening of our 50th school, bringing education to over 500 children in remote communities.",
      image: "/images/blog-3.jpg",
      date: "Oct 10, 2025",
      readTime: "6 min read",
      slug: "new-school-kenya",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Latest News & <span className="text-primary">Stories</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with our recent activities and impact stories
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} delay={index * 150} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
