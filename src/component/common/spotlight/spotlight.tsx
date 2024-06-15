import { memo, ReactNode } from "react";
import "./spotlight.scss";
function Spotlight({children}: {children: ReactNode}) {
  return (
    <span className={"spotlight__wrapper"}>

      <span className={"spotlight__wrapper__text"}>{children}</span>
      <span className="spotlight__wrapper__background" />
    </span>
  );
};

export default memo(Spotlight);
