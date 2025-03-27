"use client";

import { memo } from "react";
import BoxArea from "@/components/resume/boxArea/BoxArea";
import { type ExperienceTypes } from "@/@types/resume";
import "./ExperienceList.scss";

const ExperienceList = ({ experienceList }: { experienceList: ExperienceTypes[] }) => {
  // region [Hooks]
  // endregion

  return (
    <BoxArea className="ex-area" label="Experience">
      {experienceList.map((resume) => (
        <div key={resume.date} className="ex-area__item">
          <div className="ex-area__item__company">
            <div className="ex-area__item__company__top">
              <h2 className="ex-area__item__company__top__title">{resume.companyTitle}</h2>
              <span className="ex-area__item__company__top__date">{resume.date}</span>
            </div>
            <div className="ex-area__item__company__position">{resume.position}</div>
          </div>

          <div className="ex-area__item__project-list">
            {resume.projects.map((project) => (
              <div key={project.title} className="ex-area__item__project-list__item">
                <h3 className="ex-area__item__project-list__item__title">
                  {project.title}
                  <span className="ex-area__item__project-list__item__title__date">
                    {project.date}
                  </span>
                </h3>
                <div className="ex-area__item__project-list__item__role">
                  <span className="label">- 역할:</span>
                  {project.role}
                </div>
                <div className="ex-area__item__project-list__item__result">
                  <span className="label">- 성과:</span>
                  {project.result}
                </div>
                {project?.techStack && (
                  <div className="ex-area__item__project-list__item__tech-stack">
                    <span className="label">- 기술 스택:</span>
                    {project.techStack?.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </BoxArea>
  );
};

export default memo(ExperienceList);
