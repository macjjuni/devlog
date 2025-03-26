import { memo } from "react";
import "./Skills.scss";
import { SkillTypes } from "@/@types/resume";

const Skills = ({ skill }: { skill: SkillTypes }) => {
  return (
    <div className="skills__area">
      <div className="skills__area__label">
        <h2 className="resume__title">스킬</h2>
      </div>
      <div className="skills__area__content">
        <div className="skills__area__content__front-end">
          <span className="label">프런트엔드</span>
          <p className="content">{skill.frontend.join(", ")}</p>
        </div>
        <div className="skills__area__content__styling">
          <span className="label">스타일링</span>
          <p className="content">{skill.styling.join(", ")}</p>
        </div>
        <div className="skills__area__content__testing">
          <span className="label">테스팅</span>
          <p className="content">{skill.testing.join(", ")}</p>
        </div>
        <div className="skills__area__content__cooperation">
          <span className="label">협업 도구</span>
          <p className="content">{skill.cooperation.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);
