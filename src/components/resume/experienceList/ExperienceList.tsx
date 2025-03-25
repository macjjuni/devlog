"use client";

import { memo, useCallback, useLayoutEffect, useState } from "react";
import { type ExperienceTypes } from "@/@types/resume";
import "./ExperienceList.scss";

const ExperienceList = () => {
  // region [Hooks]

  const [experienceList, setExperienceList] = useState<ExperienceTypes[]>([]);

  // endregion

  // region [Templates]

  const getListResumeData = useCallback(async () => {
    const res: ExperienceTypes[] = await fetch("/assets/resume/list.json").then((_res) => _res.json());
    setExperienceList(res);
  }, []);

  // endregion

  // region [Life Cycles]

  useLayoutEffect(() => {
    getListResumeData().then();
  }, []);

  // endregion

  return (
    <div className="experience-list__area">
      {experienceList.map((resume) => (
        <div key={resume.date} className="experience-list__area__item">
          <h2 className="experience-list__area__company-name">{resume.companyTitle}</h2>
          <div className="experience-list__area__project-list">
            {resume.projects.map((project) => (
              <div key={project.title} className="experience-list__area__project-list__item">
                <h3 className="experience-list__area__project-list__title">{project.title}</h3>
                <div className="experience-list__area__project-list__date">{project.date}</div>
                <div className="experience-list__area__project-list__role">
                  <span className="label">- 역할:</span>
                  {project.role}
                </div>
                <div className="experience-list__area__project-list__result">
                  <span className="label">- 성과:</span>
                  {project.result}
                </div>
                {project?.techStack && (
                  <div className="experience-list__area__project-list__tech-stack">
                    <span className="label">- 기술 스택:</span>
                    {project.techStack?.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ExperienceList);
