"use client";

import { usePathname } from "next/navigation";
import routes from "@/route";
import { Link } from "next-view-transitions";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 mobile:gap-2">
      {routes.map((route) => {
        const isActive = route.path === "/" ? pathname === "/" : pathname.startsWith(route.path);

        return (
          <Link key={route.id} href={route.path} className={[
            "text-sm mobile:text-xs font-medium transition-all duration-200",
            isActive
              ? "text-terminal-amber font-bold"
              : "text-terminal-dim hover:text-terminal-amber"
          ].join(" ")}>
            {route.title}
          </Link>
        );
      })}
    </nav>
  );
}
