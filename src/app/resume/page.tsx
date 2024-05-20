import SquareLoad from "@/component/lottie/squareLoad/squareLoad";
import ResumeLayout from "./pageLayout";

export default function ResumePage() {
  return (
    <ResumeLayout>
      <SquareLoad />
      <p className="resume__ready-text">준비 중..</p>
    </ResumeLayout>
  );
}
