import { memo } from "react";
import BoxArea from "@/components/resume/boxArea/BoxArea";
import { SkillTypes } from "@/@types/resume";
import "./Skills.scss";

const Skills = ({ skill }: { skill: SkillTypes }) => {
  return (
    <BoxArea className="skills__area" label="스킬">
      <div className="skills__area__front-end">
        <span className="label">프런트엔드</span>
        <p className="content">{skill.frontend.join(", ")}</p>
      </div>
      <div className="skills__area__styling">
        <span className="label">스타일링</span>
        <p className="content">{skill.styling.join(", ")}</p>
      </div>
      <div className="skills__area__testing">
        <span className="label">테스팅</span>
        <p className="content">{skill.testing.join(", ")}</p>
      </div>
      <div className="skills__area__cooperation">
        <span className="label">협업 도구</span>
        <p className="content">{skill.cooperation.join(", ")}</p>
      </div>
    </BoxArea>
  );
};

export default memo(Skills);
