"use client";

import { useState } from "react";
import Link from "next/link";

export default function PartnerNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-gray-300"
      >
        Partner
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-4 w-48 rounded-xl bg-white py-3 text-gray-900 shadow-xl">
          <ul>
            <li>
              <Link
                href="/sponsor-a-learner"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                Sponsor a Learner
              </Link>
            </li>

            <li>
              <Link
                href="/career"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                Collaborate with Us
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="block px-4 py-3 hover:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                Refer and Earn
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
