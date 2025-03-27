import { memo, ReactNode } from "react";
import "./BoxArea.scss";

interface BoxAreaTypes {
  children: ReactNode;
  className?: string;
  label: string;
}

const BoxArea = ({ children, className, label }: BoxAreaTypes) => {
  return (
    <div className={`resume__box-area ${className}`}>
      <h2 className="resume__box-area__label">{label}</h2>
      <div className="resume__box-area__content">{children}</div>
    </div>
  );
};

export default memo(BoxArea);
