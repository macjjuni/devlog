import type { Metadata } from "next";
import { generateMetaTitle, metadata as _metadata } from "@/utils/meta";
import SquareLoad from "@/component/lottie/squareLoad/squareLoad";
import ResumeLayout from "./pageLayout";

const metadataTitle = generateMetaTitle("Resume");
export const metadata: Metadata = {
  ..._metadata,
  title: metadataTitle,
  openGraph: { ..._metadata.openGraph, title: metadataTitle },
};

export default function ResumePage() {
  return (
    <ResumeLayout>
      <SquareLoad />
      <p className="resume__ready-text">준비 중..</p>
    </ResumeLayout>
  );
}
