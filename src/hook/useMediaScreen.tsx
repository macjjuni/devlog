"use client";

import { useState, useCallback, useEffect } from "react";
import variable from "@/style/variables";
import { extractNumbers } from "@/utils/string";
import { createThrottle } from "@/utils/lodash";

const smallSize = Number(extractNumbers(variable.kkuLayoutSmall));
const mediumSize = Number(extractNumbers(variable.kkuLayoutSmall));
const largeSize = Number(extractNumbers(variable.kkuLayoutSmall));

export default function useMediaScreen(screenMode: "sm" | "md" | "lg") {
  // region [Hooks]

  const [status, setStatus] = useState<null | boolean>(null);

  // endregion

  // region [Events]

  const onResized = useCallback(
    createThrottle(() => {
      const width = window.innerWidth;

      if (screenMode === "sm" && width <= smallSize) {
        setStatus(true);
      } else if (screenMode === "md" && width <= mediumSize) {
        setStatus(true);
      } else if (screenMode === "lg" && width <= largeSize) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    }, 240),
    []
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
