"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResourcesNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-gray-300"
      >
        Resources
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-4 w-48 rounded-xl bg-white py-3 text-gray-900 shadow-xl">
          <ul>
            <li>
              <Link
                href="/scholarship"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                Scholarship
              </Link>
            </li>

            <li>
              <Link
                href="/career"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                Data & AI
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                Workplace report
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                Impact Report
              </Link>
            </li>

            <li>
              <Link
                href="/FAQ"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
