"use client";

import { memo } from "react";
import LottieViewer from "@/component/common/lottieViewer/lottieViewer";
import squareLoad from "@/asset/lottie/squareLoad.json";

const defaultOption = {
  loop: true,
  play: true,
  style: { width: "100%", height: "400px" },
};

const SquareLoad = () => {
  return <LottieViewer animationData={squareLoad} className="resume__lottie" defaultOption={defaultOption} />;
};

export default memo(SquareLoad);
