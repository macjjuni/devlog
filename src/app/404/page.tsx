"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
// import { KButton } from "kku-ui"; // Temporarily disabled for Next.js 16
// import LottieViewer from "@/components/common/lottieViewer/lottieViewer"; // Temporarily disabled for Next.js 16
// import ErrorLottie from "@/asset/lottie/404.json";
import "./404.scss";

export default function ErrorPage() {
  const { back } = useRouter();

  const onClickBack = useCallback(() => {
    back();
  }, []);
  return (
    <div className="error-page__layout">
      <h1>404 - Page Not Found</h1>
      <button className="error__back__button" onClick={onClickBack}>
        Back
      </button>
    </div>
  );
}
