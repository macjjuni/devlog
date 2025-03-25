import type { Metadata } from "next";
import ResumeList from "@/components/resume/experienceList/ExperienceList";
import Skills from "@/components/resume/skills/Skills";
import { getMetadata } from "@/config/meta";
import ResumeLayout from "./pageLayout";

export const metadata: Metadata = getMetadata("Resume", null, "resume", null);

export default function ResumePage() {

  return (
    <ResumeLayout>
      <h1 className="resume__title">Work Experience</h1>
      <Skills />
      <ResumeList />
    </ResumeLayout>
  );
}
