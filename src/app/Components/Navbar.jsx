"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex gap-2 justify-center items-center px-3 py-2 rounded ${
      pathname === path ? "bg-green-900 text-white" : ""
    }`;

  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-200">
      <div>
        <Link href="/">
          <img src="logo.png" alt="KeenKeeper Logo" />
        </Link>
      </div>

      <ul className="flex gap-5">
        <li>
          <Link href="/" className={linkClass("/")}>
            <img src="Vector.png" alt="" /> Home
          </Link>
        </li>

        <li>
          <Link href="/timeline" className={linkClass("/timeline")}>
            <img src="Clock.png" alt="" /> Timeline
          </Link>
        </li>

        <li>
          <Link href="/stats" className={linkClass("/stats")}>
            <img src="ChartLine.png" alt="" /> Stats
          </Link>
        </li>
      </ul>
    </nav>
  );
}
