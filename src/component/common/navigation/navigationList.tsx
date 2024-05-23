import { useCallback } from "react";
import { usePathname } from "next/navigation";
import routes from "@/route";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const wrapMotion = {
  initial: { opacity: 0, y: "-8px", zIndex: -1 },
  animate: { opacity: 1, y: "0", zIndex: 100 },
  exit: { opacity: 0, y: "-8px", zIndex: -1 },
  transition: { type: "spring", duration: 0.4 },
};
export default function NavigationList({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  // region [Hooks]

  const pathname = usePathname();

  // endregion

  // region [Style]

  const navLinkClass = useCallback(
    (path: string) => {
      console.log(pathname);
      if (path === "/" && pathname === path) {
        return "navigation__list__item__link--active";
      } else if (path !== "/" && pathname.includes(path)) {
        return "navigation__list__item__link--active";
      }
      return "";
    },
    [pathname],
  );

  // endregion

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="navigation__list__wrapper" {...wrapMotion}>
          <ul className="navigation__list">
            {routes.map((route) => (
              <li key={route.id} className="navigation__list__item">
                <Link href={route.path} className={`navigation__list__item__link ${navLinkClass(route.path)}`} onClick={close}>
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
