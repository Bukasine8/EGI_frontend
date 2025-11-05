"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

// This would typically come from Supabase, but using static data for now
const teamMembers = [
  {
    id: 1,
    name: "Dr. Adaora Okafor",
    role: "Executive Director",
    bio: "Environmental scientist with 15+ years experience in sustainable development and community empowerment.",
    photo: "/images/team/adaora.jpg",
    socials: [
      { platform: "linkedin", url: "#", icon: Linkedin },
      { platform: "twitter", url: "#", icon: Twitter },
      { platform: "email", url: "mailto:adaora@ekegreenmind.org", icon: Mail },
    ]
  },
  {
    id: 2,
    name: "Emeka Nwankwo",
    role: "Program Manager",
    bio: "Community development specialist focused on education and youth empowerment programs.",
    photo: "/images/team/emeka.jpg",
    socials: [
      { platform: "linkedin", url: "#", icon: Linkedin },
      { platform: "email", url: "mailto:emeka@ekegreenmind.org", icon: Mail },
    ]
  },
  {
    id: 3,
    name: "Fatima Abdullahi",
    role: "Health Coordinator",
    bio: "Public health expert leading our community health initiatives and medical outreach programs.",
    photo: "/images/team/fatima.jpg",
    socials: [
      { platform: "linkedin", url: "#", icon: Linkedin },
      { platform: "twitter", url: "#", icon: Twitter },
      { platform: "email", url: "mailto:fatima@ekegreenmind.org", icon: Mail },
    ]
  },
  {
    id: 4,
    name: "Chidi Okonkwo",
    role: "Environmental Officer",
    bio: "Conservation biologist specializing in reforestation and biodiversity protection projects.",
    photo: "/images/team/chidi.jpg",
    socials: [
      { platform: "linkedin", url: "#", icon: Linkedin },
      { platform: "email", url: "mailto:chidi@ekegreenmind.org", icon: Mail },
    ]
  },
  {
    id: 5,
    name: "Aisha Mohammed",
    role: "Education Coordinator",
    bio: "Former teacher passionate about providing quality education to underserved communities.",
    photo: "/images/team/aisha.jpg",
    socials: [
      { platform: "linkedin", url: "#", icon: Linkedin },
      { platform: "twitter", url: "#", icon: Twitter },
      { platform: "email", url: "mailto:aisha@ekegreenmind.org", icon: Mail },
    ]
  },
  {
    id: 6,
    name: "Kemi Adebayo",
    role: "Communications Manager",
    bio: "Digital marketing specialist helping amplify our impact stories and community engagement.",
    photo: "/images/team/kemi.jpg",
    socials: [
      { platform: "linkedin", url: "#", icon: Linkedin },
      { platform: "twitter", url: "#", icon: Twitter },
      { platform: "email", url: "mailto:kemi@ekegreenmind.org", icon: Mail },
    ]
  },
];

interface TeamCardProps {
  member: typeof teamMembers[0];
  index: number;
  isVisible: boolean;
}

function TeamCard({ member, index, isVisible }: TeamCardProps) {
  return (
    <div
      className={`group transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Photo */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Social Links Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
              {member.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-1 text-xl font-bold text-gray-900">
            {member.name}
          </h3>
          <p className="mb-3 text-sm font-semibold text-primary">
            {member.role}
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Passionate individuals dedicated to creating positive change
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Join Our Mission
            </h3>
            <p className="mb-6 text-gray-600">
              We're always looking for passionate individuals who share our vision 
              of creating sustainable change. Whether you're interested in full-time 
              positions, internships, or volunteer opportunities, we'd love to hear from you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/careers"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                View Open Positions
              </a>
              <a
                href="/get-involved#volunteer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
