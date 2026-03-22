"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategoryPageUrl } from "@/route";

interface CategoryListProps {
  categories: string[];
}

export default function Category({ categories }: CategoryListProps) {
  const pathname = usePathname();

  if (categories.length === 0) return null;

  const isAllActive = pathname === "/archive";

  return (
    <nav>
      <div className="text-terminal-amber text-sm font-bold mb-2 text-glow">+-- Categories --+</div>
      <ul className="space-y-1">
        <li>
          <Link
            href="/archive"
            className={[
              "block text-sm transition-colors",
              isAllActive ? "text-terminal-amber text-glow" : "text-terminal-dim hover:text-terminal-amber"
            ].join(" ")}
          >
            | {isAllActive ? ">" : " "} All
          </Link>
        </li>
        {categories.map((category) => {
          const href = getCategoryPageUrl(category);
          const isActive = pathname === `/archive/category/${encodeURIComponent(category)}`;

          return (
            <li key={category}>
              <Link
                href={href}
                className={[
                  "block text-sm transition-colors",
                  isActive ? "text-terminal-amber text-glow" : "text-terminal-dim hover:text-terminal-amber"
                ].join(" ")}
              >
                | {isActive ? ">" : " "} {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
