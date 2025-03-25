import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import ResumeLayout from "./pageLayout";

export const metadata: Metadata = getMetadata("Resume", null, "resume", null);

export default function ResumePage() {



  return (
    <ResumeLayout>
      <p className="resume__title">Work Experience</p>
    </ResumeLayout>
  );
}
