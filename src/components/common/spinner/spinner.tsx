"use client";

import { CSSProperties, useMemo, memo } from "react";
import { SpinnerProps } from "@/components/common/spinner/spinner.interface";
import "./spinner.scss";

function Spinner({ color }: SpinnerProps) {
  // region [Styles]

  const childStyle = useMemo(() => {

    const style: CSSProperties = {};

    if (color) { style.borderColor = color; }

    return style;
  }, [color]);

  // endregion

  return (
    <div className="kku-loader">
      <div style={childStyle} />
      <div style={childStyle} />
    </div>
  );
}

export default memo(Spinner);
