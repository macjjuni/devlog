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
      <div className="text-terminal-amber text-sm font-bold mb-2">Categories</div>
      <ul className="space-y-1">
        <li>
          <Link
            href="/archive"
            className={[
              "block text-sm transition-colors rounded px-2 py-1",
              isAllActive ? "text-terminal-amber bg-surface font-bold" : "text-terminal-dim hover:text-terminal-amber"
            ].join(" ")}
          >
            All
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
                  "block text-sm transition-colors rounded px-2 py-1",
                  isActive ? "text-terminal-amber bg-surface font-bold" : "text-terminal-dim hover:text-terminal-amber"
                ].join(" ")}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
