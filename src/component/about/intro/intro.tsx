import { memo } from "react";
import Spotlight from "@/component/common/spotlight/spotlight";
import "./intro.scss";

function Intro() {
  return (
    <div className={"intro__container"}>
      <p>
        안녕하세요? 👋
        <br />
        프론트엔드 개발자
        <Spotlight>&#39;꾸생&#39;</Spotlight>
        입니다.
      </p>
      <p>
        <Spotlight>&#39;꾸준함이 생명&#39;</Spotlight>
        이라는 모토 아래, 개발 지식과 일상을 기록하기 위해 노력하고 있습니다.
      </p>
      <p>읽기 쉽고 가독성이 높은 코드 작성을 지향하며 프로젝트 완성도를 높이는 데 열정적입니다.</p>
    </div>
  );
}

export default memo(Intro);
