import { memo } from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills__area">
      <div className="skills__area__label">스킬</div>
      <div className="skills__area__content">
        <div className="skills__area__content__front-end">
          <span className="label">프런트엔드:</span>
          <p className="content">React, Vue, Next.js, TypeScript</p>
        </div>
        <div className="skills__area__content__styling">
          <span className="label">스타일링:</span>
          <p className="content">CSS3, SASS, Tailwind CSS, CSS in JS</p>
        </div>
        <div className="skills__area__content__testing">
          <span className="label">테스팅: </span>
          <p className="content">Vitest, Jest, Storybook, React test Library</p>
        </div>
        <div className="skills__area__content__cooperation">
          <span className="label">협업 도구: </span>
          <p className="content">Git, Figma, Jira</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);
