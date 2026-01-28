"use client";

import Link from "next/link";
import { useState } from "react";
import { Gift, Menu, X } from "lucide-react";
import PartnerNav from "./navigations/partnerNav";
import PoliciesNav from "./navigations/policesNav";
import ResourcesNav from "./navigations/resourcesNav";
import SchoolsDropdown from "./navigations/schoolNav";
import WhyThinkTank from "./navigations/whyThinkTank";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
       
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-900"></div>
            </div>
            <span className="text-lg font-bold">
              Think<br />Tank
            </span>
          </Link>

         
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <li className="cursor-pointer hover:text-gray-300 transition">
              <Link href="/">Home</Link>
            </li>
            <li>
              <SchoolsDropdown />
            </li>
            <li>
              <WhyThinkTank />
            </li>
            <li>
              <PartnerNav />
            </li>
            <li>
              <ResourcesNav />
            </li>
            <li>
              <PoliciesNav />
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/login"
              className="cursor-pointer hover:text-gray-300 transition font-medium"
            >
              Login
            </Link>
            <Link href="/apply">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
                Apply Now
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-md transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="block py-2 hover:text-gray-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <SchoolsDropdown />
              </li>
              <li>
                <WhyThinkTank />
              </li>
              <li>
                <PartnerNav />
              </li>
              <li>
                <ResourcesNav />
              </li>
              <li>
                <PoliciesNav />
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <Link
                href="/login"
                className="block text-center py-2 hover:text-gray-300 transition font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 