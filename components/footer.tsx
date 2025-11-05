import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart
} from "lucide-react";
import Link from "next/link";

const navigation = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Mission & Vision", href: "/about#mission" },
    { name: "Our Team", href: "/about#team" },
    { name: "Annual Reports", href: "/about#reports" },
  ],
  programs: [
    { name: "Education", href: "/programs?category=education" },
    { name: "Environment", href: "/programs?category=environment" },
    { name: "Health", href: "/programs?category=health" },
    { name: "Community Development", href: "/programs?category=community" },
  ],
  getInvolved: [
    { name: "Volunteer", href: "/get-involved#volunteer" },
    { name: "Partner with Us", href: "/get-involved#partner" },
    { name: "Donate", href: "/donate" },
    { name: "Fundraise", href: "/get-involved#fundraise" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "YouTube", href: "#", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800 bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold">Stay Connected</h3>
              <p className="mt-2 text-gray-300">
                Get updates on our latest projects and impact stories
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-0 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-bold text-white">EGI</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Eke Greenmind Initiative</h2>
                <p className="text-sm text-gray-400">Healthy Earth, Healthy Mind</p>
              </div>
            </Link>
            
            <p className="mt-4 text-gray-300">
              Empowering communities through sustainable development, education, 
              and environmental conservation for a healthier planet and brighter future.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Green Street, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ekegreenmind.org</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                About Us
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Programs
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.programs.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Get Involved
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.getInvolved.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© 2025 Eke Greenmind Initiative. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for a better world.</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/transparency" className="hover:text-primary">
                Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
