import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import SquareLoad from "@/component/lottie/squareLoad/squareLoad";
import ResumeLayout from "./pageLayout";

export const metadata: Metadata = getMetadata("Resume", null, "resume", null);

export default function ResumePage() {
  return (
    <ResumeLayout>
      <SquareLoad />
      <p className="resume__ready-text">준비 중..</p>
    </ResumeLayout>
  );
}
