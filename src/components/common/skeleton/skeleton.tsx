"use client";

import { CSSProperties, memo, useMemo } from "react";
import "./skeleton.scss";

function Skeleton({ height }: { height?: string }) {
  // region [Styles]

  const rootStyle = useMemo(() => {
    const style: CSSProperties = {};

    if (height) {
      style.height = height;
    }

    return style;
  }, [height]);

  //

  return <div className="kku-skeleton" style={rootStyle} />;
}

export default memo(Skeleton);
