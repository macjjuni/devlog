import { memo, ReactNode, useMemo } from "react";
import "./BoxArea.scss";

interface BoxAreaTypes {
  children: ReactNode;
  className?: string;
  label?: string;
}

const BoxArea = ({ children, className, label }: BoxAreaTypes) => {

  // region [Styles]

  const contentStyle = useMemo(() => (!label ? { width: "100%" } : {}), [label]);

  // endregion

  return (
    <div className={`resume__box-area ${className}`}>
      {label && <h2 className="resume__box-area__label">{label}</h2>}
      <div className="resume__box-area__content" style={contentStyle}>{children}</div>
    </div>
  );
};

export default memo(BoxArea);
