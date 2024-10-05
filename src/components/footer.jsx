// src/components/Footer.tsx
"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">UR ONE</h3>
          <p className="text-sm">Everything in your hands at one click</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition duration-200">Home</Link>
          <Link href="/clubs" className="hover:text-gray-300 transition duration-200">Clubs</Link>
          <Link href="/resources" className="hover:text-gray-300 transition duration-200">Resources</Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link>
        </div>
      </div>
      <div className="border-t border-blue-600 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} UR ONE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
