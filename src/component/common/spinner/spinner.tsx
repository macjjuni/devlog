import { CSSProperties, useMemo } from "react";
import "./spinner.scss";
import { SpinnerProps } from "@/component/common/spinner/spinner.interface";

const color = "#eee";

function Spinner({ borderWidth = 3, size = 48 }: SpinnerProps) {
  // region [Styles]

  const rootStyle = useMemo(() => {
    const style: CSSProperties = {};

    style.borderTop = `${borderWidth}px solid ${color}`;
    style.borderRight = `${borderWidth}px solid transparent`;
    style.width = `${size}px`;
    style.height = `${size}px`;

    return style;
  }, [borderWidth, size]);

  // endregion

  return <span className="kku-loader" style={rootStyle} />;
}

export default Spinner;
