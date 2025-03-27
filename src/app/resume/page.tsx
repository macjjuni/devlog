import type { Metadata } from "next";
import ResumeList from "@/components/resume/experienceList/ExperienceList";
import Skills from "@/components/resume/skills/Skills";
import { type ResumeTypes } from "@/@types/resume";
import { getMetadata } from "@/config/meta";
import ResumeLayout from "./pageLayout";

const getListResumeData = async (): Promise<ResumeTypes> => {
  return fetch("http://localhost:3000/assets/resume/list.json").then((_res) => _res.json());
};

export const metadata: Metadata = getMetadata("Resume", null, "resume", null);

export default async function ResumePage() {

  // region [Templates]

  const resumeData = await getListResumeData();

  // endregion

  return (
    <ResumeLayout>
      <Skills skill={resumeData.skill} />
      <ResumeList experienceList={resumeData.experience} />
    </ResumeLayout>
  );
}
