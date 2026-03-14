"use client";

import Link from "next/link";
import { getCategoryPageUrl } from "@/route";

interface CategoryListProps {
  categories: string[];
}

export default function Category({ categories }: CategoryListProps) {

  if (categories.length === 0) return null;

  return (
    <nav>
      <ul>
        <li>
          <Link href="/archive">All</Link>
        </li>
        {categories.map((category) => {
          const href = getCategoryPageUrl(category);

          return (
            <li key={category}>
              <Link href={href}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
