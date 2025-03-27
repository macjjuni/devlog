import type { Metadata } from "next";
import ResumeList from "@/components/resume/experienceList/ExperienceList";
import Skills from "@/components/resume/skills/Skills";
import { type ResumeTypes } from "@/@types/resume";
import { getMetadata } from "@/config/meta";
import ResumeJson from "@/asset/json/resume.json";
import ResumeLayout from "./pageLayout";

export const metadata: Metadata = getMetadata("Resume", null, "resume", null);

const resumeData: ResumeTypes = ResumeJson;

export default async function ResumePage() {

  return (
    <ResumeLayout>
      <Skills skill={resumeData.skill} />
      <ResumeList experienceList={resumeData.experience} />
    </ResumeLayout>
  );
}
