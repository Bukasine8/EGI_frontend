import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          NGO Name
        </Link>
        
        <div className="hidden md:flex gap-6">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-2 py-2 hover:text-primary">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
          <Button variant="ghost" className="md:hidden">
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
}