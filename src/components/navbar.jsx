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
    <nav className="bg-blue-700 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200">
          UR ONE
        </Link>
        <NavigationMenu>
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link href={link.href} className="text-white hover:text-gray-300 transition duration-200">
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>
        </NavigationMenu>
        <Button variant="outline" className="hidden md:block text-blue-700 border border-blue-700 hover:bg-blue-100 transition duration-200">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
