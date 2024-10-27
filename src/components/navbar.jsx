"use client";

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/clubs", label: "Societies" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-white hover:text-gray-300 transition duration-200">
          UR ONE
        </Link>
        <NavigationMenu>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link href={link.href} className="text-white hover:text-gray-300 transition duration-200 py-2 px-3 rounded-md">
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>
        </NavigationMenu>
        <Button variant="outline" className="hidden md:block text-blue-800 border border-blue-800 hover:bg-blue-200 transition duration-200 rounded-md">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
