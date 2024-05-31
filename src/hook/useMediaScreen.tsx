"use client";

import { useState, useCallback, useEffect } from "react";
import variable from "@/style/variables";
import { extractNumbers } from "@/utils/string";
import { createThrottle } from "@/utils/lodash";

const smallSize = Number(extractNumbers(variable.kkuLayoutSmall));
const mediumSize = Number(extractNumbers(variable.kkuLayoutMedium));
const largeSize = Number(extractNumbers(variable.kkuLayoutLarge));

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
    [screenMode, smallSize, mediumSize, largeSize]
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
