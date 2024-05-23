"use client";

import { useState, useCallback, useEffect } from "react";
import variables from "@/style/variables.module.css";
import { extractNumbers } from "@/utils/string";
import { createThrottle } from "@/utils/lodash";

const smallSize = Number(extractNumbers(variables.kkuLayoutSmall));
const mediumSize = Number(extractNumbers(variables.kkuLayoutSmall));
const largeSize = Number(extractNumbers(variables.kkuLayoutSmall));

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
