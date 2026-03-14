"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getCategoryPageUrl } from "@/route";

interface CategoryListProps {
  categories: string[];
}

export default function Category({ categories }: CategoryListProps) {
  const pathname = usePathname();

  if (categories.length === 0) return null;

  return (
    <nav className="rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="px-4 pt-3 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
        Category
      </h3>
      <ul className="flex flex-col pb-2">
        <li>
          <Link
            href="/archive"
            className={`flex items-center px-4 py-1.5 text-sm transition-colors ${
              pathname === "/archive"
                ? "font-semibold text-primary"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            All
          </Link>
        </li>
        {categories.map((category) => {
          const href = getCategoryPageUrl(category);
          const isActive = pathname === `/archive/category/${category}`;

          return (
            <li key={category}>
              <Link
                href={href}
                className={`flex items-center px-4 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-primary"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
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
