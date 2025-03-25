"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { KButton } from "kku-ui";
import LottieViewer from "@/components/common/lottieViewer/lottieViewer";
import ErrorLottie from "@/asset/lottie/404.json";
import "./404.scss";

const defaultOption = {
  loop: true,
  play: true,
  style: { width: "400px", height: "400px" },
};
export default function ErrorPage() {
  const { back } = useRouter();

  const onClickBack = useCallback(() => {
    back();
  }, []);
  return (
    <div className="error-page__layout">
      <LottieViewer animationData={ErrorLottie} defaultOption={defaultOption} />
      <KButton className="error__back__button" onClick={onClickBack}>
        Back
      </KButton>
    </div>
  );
}
