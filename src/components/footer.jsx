// src/components/Footer.tsx
"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold">UR ONE</h3>
          <p className="text-sm">Everything in your hands at one click</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/" className="hover:text-gray-300 transition duration-200 text-lg">Home</Link>
          <Link href="/clubs" className="hover:text-gray-300 transition duration-200 text-lg">Clubs</Link>
          <Link href="/resources" className="hover:text-gray-300 transition duration-200 text-lg">Resources</Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-200 text-lg">Contact</Link>
        </div>
      </div>
      <div className="border-t border-blue-700 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} UR ONE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
