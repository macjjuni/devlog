import { useCallback, useEffect, useState } from "react";

export default function useOutsideClick(ref: HTMLElement | null, isCheck: boolean) {
  // region [Hooks]
  const [isOutsideClick, setIsOutsideClick] = useState(false);
  // endregion

  // region [Events]

  const handleClickOutside = useCallback(
    (ev: globalThis.MouseEvent) => {
      if (!ref || !ev.target) { return; }

      setIsOutsideClick(!ref?.contains(ev.target as Node));
    },
    [ref],
  );

  useEffect(() => {
    if (ref && isCheck) {
      window.addEventListener("click", handleClickOutside, { passive: true });
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [ref, isCheck]);

  return isOutsideClick;
}
