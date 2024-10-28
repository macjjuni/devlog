"use client";

import { useCallback, useEffect, useState } from "react";

export default function useOutsideClick(ref: HTMLElement | null, isCheck: boolean) {
  // region [Hooks]
  const [isOutsideClick, setIsOutsideClick] = useState(false);
  // endregion

  // region [Events]

  const handleClickOutside = useCallback(
    (ev: globalThis.MouseEvent | globalThis.TouchEvent) => {
      if (!ref || !ev.target) {
        return;
      }

      setIsOutsideClick(!ref?.contains(ev.target as Node));
    },
    [ref],
  );

  // endregion

  // region [Privates]

  const registEventListener = useCallback(() => {
    window.addEventListener("click", handleClickOutside, { passive: true });
    window.addEventListener("touchstart", handleClickOutside, false);
  }, [handleClickOutside]);

  const removeEventListener = useCallback(() => {
    window.removeEventListener("click", handleClickOutside);
    window.removeEventListener("touchstart", handleClickOutside, false);
  }, [handleClickOutside]);

  // endregion

  useEffect(() => {
    if (ref && isCheck) {
      registEventListener();
    }

    return () => removeEventListener();
  }, [ref, isCheck]);

  return isOutsideClick;
}
