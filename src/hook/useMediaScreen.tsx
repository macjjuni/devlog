"use client";

import { useState, useCallback, useEffect } from "react";
import variable from "@/style/variables";
import { extractStringNumber } from "@/utils/string";
import { createThrottle } from "@/utils/debounceThrottle";

const smallSize = Number(extractStringNumber(variable.kkuLayoutSmall));
const mediumSize = Number(extractStringNumber(variable.kkuLayoutMedium));
const largeSize = Number(extractStringNumber(variable.kkuLayoutLarge));

export default function useMediaScreen(screenMode: "sm" | "md" | "lg") {
  // region [Hooks]

  const [status, setStatus] = useState<null | boolean>(null);

  // endregion

  // region [Events]

  const onResized = useCallback(
    createThrottle(() => {
      const width = window.innerWidth;

      if (screenMode === "sm") {
        if (width <= smallSize) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        return;
      }

      if (screenMode === "md") {
        if (width > smallSize && width <= mediumSize) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        return;
      }

      if (screenMode === "lg") {
        if (width > mediumSize) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        return;
      }

      setStatus(false);
    }, 240),
    [screenMode, smallSize, mediumSize, largeSize],
  );

  const eventRegistered = useCallback(() => {
    window.addEventListener("resize", onResized);
  }, []);

  const clearRegistered = useCallback(() => {
    window.removeEventListener("resize", onResized);
  }, []);

  // endregion

  // region [Effects]

  useEffect(() => {
    eventRegistered();
    onResized();

    return () => clearRegistered();
  }, [onResized]);

  // endregion

  return status;
}
