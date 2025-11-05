"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Zap, Globe, Users, BookOpen, Target, MessageCircle, Home, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { 
    name: "About", 
    href: "/about",
    icon: Users,
    dropdown: [
      { name: "Our Story", href: "/about#story" },
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Our Team", href: "/about#team" },
    ]
  },
  { 
    name: "Programs", 
    href: "/programs",
    icon: GraduationCap,
    dropdown: [
      { name: "All Programs", href: "/programs" },
      { name: "Education", href: "/programs?category=education" },
      { name: "Environment", href: "/programs?category=environment" },
      { name: "Health", href: "/programs?category=health" },
    ]
  },
  { name: "Partners", href: "/partners", icon: Globe },
  { 
    name: "Impact", 
    href: "/projects",
    icon: Target,
    dropdown: [
      { name: "Projects", href: "/projects" },
      { name: "Events", href: "/events" },
      { name: "Gallery", href: "/gallery" },
    ]
  },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: MessageCircle },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Futuristic Navigation */}
      <div className={`relative transition-all duration-500 ${
        scrolled
          ? "bg-green-600 border-b border-secondary/20"
          : "bg-green-600"
      }`}>
        
        {/* Holographic border effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60"></div>
        
        <nav className="relative mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/25">
                <Image
                  src="/logo.svg"
                  alt="EGI Logo"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                        isActive(item.href)
                          ? "bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary shadow-lg shadow-secondary/10"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Futuristic Dropdown */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="absolute left-0 top-full mt-2 w-56 egi-glass-card border border-secondary/20 shadow-2xl shadow-secondary/10">
                        <div className="p-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-white hover:bg-gradient-to-r hover:from-secondary/10 hover:to-accent/10 rounded-lg transition-all duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/get-involved">
                <Button className="egi-button-ghost text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  Get Involved
                </Button>
              </Link>
              <Link href="/donate">
                <Button className="egi-button-cyber text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Futuristic Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 px-6 py-6 sm:max-w-sm border-l border-cyan-500/20">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-2">
                  <Image
                    src="/logo.svg"
                    alt="EGI Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                type="button"
                className="p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mt-8 flow-root">
              <div className="space-y-4">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 shadow-lg shadow-cyan-500/10"
                            : "text-white hover:bg-white/5"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <IconComponent className="w-5 h-5" />
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-8 mt-2 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                <div className="pt-6 space-y-3 border-t border-white/10">
                  <Link href="/get-involved" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full egi-button-ghost">
                      <Users className="w-4 h-4 mr-2" />
                      Get Involved
                    </Button>
                  </Link>
                  <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full egi-button-cyber">
                      <Zap className="w-4 h-4 mr-2" />
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
