"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { extractStringNumber } from "@/utils/string";
import { createThrottle } from "@/utils/debounceThrottle";

const getCSSVariableFromNumber = (variable: string) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

  return Number(extractStringNumber(value));
};

export default function useMediaScreen(screenMode: "sm" | "md" | "lg") {
  // region [Hooks]

  const layout = useRef({
    small: 0,
    medium: 0,
    large: 0,
  });

  const [status, setStatus] = useState<null | boolean>(null);

  // endregion

  // region [Events]

  const onResized = useCallback(
    createThrottle(() => {
      const width = window.innerWidth;

      if (screenMode === "sm") {
        if (width <= layout.current.small) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        return;
      }

      if (screenMode === "md") {
        if (width > layout.current.small && width <= layout.current.medium) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        return;
      }

      if (screenMode === "lg") {
        if (width > layout.current.medium) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        return;
      }

      setStatus(false);
    }, 240),
    [screenMode],
  );

  const eventRegistered = useCallback(() => {
    window.addEventListener("resize", onResized);
  }, []);

  const clearRegistered = useCallback(() => {
    window.removeEventListener("resize", onResized);
  }, []);

  // endregion

  // region [Initialize]

  const initializeLayoutSize = useCallback(() => {
      layout.current.small = getCSSVariableFromNumber("--kku-layout-small");
      layout.current.medium = getCSSVariableFromNumber("--kku-layout-medium");
      layout.current.large = getCSSVariableFromNumber("--kku-layout-large");
  }, []);

  // endregion

  // region [Effects]

  useEffect(() => {
    eventRegistered();
    onResized();

    return () => clearRegistered();
  }, [onResized]);

  useEffect(() => {
    initializeLayoutSize();
  }, []);

  // endregion

  return status;
}
