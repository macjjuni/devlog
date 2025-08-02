import { useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import routes from "@/route";
import Link from "next/link";
import ActiveCheckSvg from "@/components/sidebar/category/ActiveCheckSvg";
import { AnimatePresence, motion } from "framer-motion";

const motions = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { type: "spring", duration: 0.24 } as const,
};

export default function NavigationList({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const pathname = usePathname();
  const navListRef = useRef<HTMLDivElement | null>(null);

  const navLinkClass = useCallback(
    (path: string) => {
      if (pathname === path || (path !== "/" && pathname.includes(path))) {
        return "navigation__list__item__link--active";
      }
      return "";
    },
    [pathname],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div ref={navListRef} className="navigation__list__wrapper" initial={motions.initial} animate={motions.animate} exit={motions.exit} transition={motions.transition}>
          <ul className="navigation__list">
            {routes.map((route) => (
              <li key={route.id} className="navigation__list__item">
                <Link href={route.path} className={`navigation__list__item__link ${navLinkClass(route.path)}`} onClick={close}>
                  <ActiveCheckSvg className="navigation__list__item__link__check-icon" />
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
