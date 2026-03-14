"use client";

import { Link } from "next-view-transitions";
import Navigation from "@/components/common/navigation";
import { useStore } from "@/store/store";

export default function Header({ logo }: { logo: string }) {

  const isHeaderMini = useStore((state) => state.isHeaderMini);

  return (
    <header
      className={`
        fixed top-0 left-0 z-[100] w-full flex-none transition-all duration-300 ease-in-out
        ${isHeaderMini ? "h-header-mini border-b backdrop-blur-md" : "h-header bg-transparent"}
      `}
    >
      <div className="mx-auto flex h-full w-full max-w-[var(--layout-width)] items-center justify-between px-4 tablet:px-6">
        <Link
          href="/"
          className={[
              'font-black italic tracking-tighter transition-all duration-300',
              isHeaderMini ? "text-2xl" : "text-3xl",
            ].join(' ')}
        >
          {logo}
        </Link>

        <Navigation />
      </div>
    </header>
  );
}