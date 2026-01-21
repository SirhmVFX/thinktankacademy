"use client";

import { useState } from "react";
import Link from "next/link";

export default function SchoolsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-gray-300"
      >
        Schools
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-4 w-[700px] rounded-xl bg-white p-8 text-gray-900 shadow-xl">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-500">
                SCHOOLS
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/schools/engineering"
                    className="flex items-center gap-3 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    🛠️ Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schools/product"
                    className="flex items-center gap-3 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    🎯 Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schools/data"
                    className="flex items-center gap-3 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    📊 Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schools/business"
                    className="flex items-center gap-3 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    💼 Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schools/creative-economy"
                    className="flex items-center gap-3 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    🎨 Creative Economy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-500">
                FEATURED PROGRAMS
              </h3>
              <ul className="space-y-3">
                {[
                  ["Javascript for Beginners", "/programs/javascript"],
                  ["Frontend Engineering", "/programs/frontend"],
                  ["Backend Engineering", "/programs/backend"],
                  ["Cloud Engineering", "/programs/cloud"],
                  ["Cyber Security", "/programs/cyber-security"],
                  ["Music Business and Afrobeats", "/programs/music-business"],
                  ["Content Creation", "/programs/content-creation"],
                  ["Sales", "/programs/sales"],
                  ["Fintech Products Management", "/programs/fintech"],
                  ["Launchpad", "/programs/launchpad"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block hover:text-blue-600"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
