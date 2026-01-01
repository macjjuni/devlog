"use client";

import { usePathname } from "next/navigation";
import routes from "@/route";
import { Link } from "next-view-transitions";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {routes.map((route) => {
        const isActive = route.path === "/" ? pathname === "/" : pathname.startsWith(route.path);

        return (
          <Link key={route.id} href={route.path} className={[
            "relative text-md font-medium transition-colors duration-200 hover:text-neutral-500",
            isActive ? "font-bold text-neutral-800" : "text-black"
          ].join(" ")}>
            {route.title}
          </Link>
        );
      })}
    </nav>
  );
}
