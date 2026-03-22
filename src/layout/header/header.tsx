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
        ${isHeaderMini
          ? "h-header-mini mobile:h-[40px] border-b border-terminal-border backdrop-blur-md bg-white/80"
          : "h-header mobile:h-[52px] bg-transparent"}
      `}
    >
      <div className="mx-auto flex h-full w-full max-w-[var(--layout-width)] items-center justify-between px-4 mobile:px-2">
        <Link
          href="/"
          className={[
              'font-black italic tracking-tighter transition-all duration-300 text-terminal-amber',
              isHeaderMini ? "text-2xl mobile:text-xl" : "text-3xl mobile:text-2xl",
            ].join(' ')}
        >
          {logo}<span className="cursor-blink">_</span>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
