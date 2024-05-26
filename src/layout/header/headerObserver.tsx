"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@/store/store";

export default function HeaderObserver() {
  const obsRef = useRef<HTMLDivElement | null>(null); // observer element
  const setIsHeaderMini = useStore((state) => state.setIsHeaderMini);

  const obsHandler: IntersectionObserverCallback = (entries) => {
    const isVisible = entries[0].isIntersecting;
    setIsHeaderMini(!isVisible);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);

    return () => observer.disconnect();
  }, []);

  return <div className="header__observer" ref={obsRef} />;
}
