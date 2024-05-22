import routes from "@/route";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./navigationList.scss";

const wrapMotion = {
  initial: { opacity: 0, zIndex: -1 },
  animate: { opacity: 1, zIndex: 100 },
  exit: { opacity: 0 },
  transition: { type: "spring", duration: 0.4 },
};
export default function NavigationList({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="navigation__list__wrapper" {...wrapMotion}>
          <ul className="navigation__list">
            {routes.map((route) => (
              <li key={route.id} className="navigation__list__item">
                <Link href={route.path} className="navigation__list__item__link">
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
