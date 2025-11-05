"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getAccessibleRoutes, canManageUsers, UserRole } from "@/lib/roles";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
  MessageSquare,
  Heart,
  Image as ImageIcon,
  Settings,
  Menu,
  X,
  Calendar,
  GraduationCap,
  UserCheck,
  Banknote,
  Handshake,
  Mail,
} from "lucide-react";
import { useState } from "react";

interface AdminSidebarProps {
  user: any;
}

const allNavigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "User Management", href: "/admin/create-account", icon: Users, adminOnly: true },
  { name: "Projects", href: "/admin/projects", icon: Briefcase },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Schools", href: "/admin/schools", icon: GraduationCap },
  { name: "Volunteers", href: "/admin/volunteers", icon: UserCheck },
  { name: "Donations", href: "/admin/donations", icon: Banknote },
  { name: "Team", href: "/admin/team", icon: Users },
  { name: "Partners", href: "/admin/partners", icon: Handshake },
  { name: "Messages", href: "/admin/messages", icon: Mail },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Filter navigation based on user role
  const userRole = user.role as UserRole;
  const accessibleRoutes = getAccessibleRoutes(userRole);
  const navigation = allNavigation.filter(item => {
    // Show admin-only items only to super_admin
    if (item.adminOnly && !canManageUsers(userRole)) {
      return false;
    }
    // Check if user can access this route
    return accessibleRoutes.some(route => item.href.startsWith(route));
  });

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md bg-white shadow-lg"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ backgroundColor: '#1B2D1A', width: '260px' }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-white/20">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="EGI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white font-heading">EGI Admin</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  )}
                  style={isActive ? { backgroundColor: '#BED450' } : {}}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#BED450';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#BED450' }}>
                <span className="text-white font-semibold">
                  {user.full_name?.charAt(0) || user.email?.charAt(0) || "A"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {user.full_name || "Admin User"}
                </p>
                <p className="text-xs text-white/60 truncate capitalize">
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
