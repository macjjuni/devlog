import { memo } from "react";
import Spotlight from "@/components/common/spotlight/spotlight";
import "./intro.scss";

function Intro() {
  return (
    <div className={"intro__container"}>
      <p>
        안녕하세요? 👋
        <br />
        {"프런트엔드 엔지니어 "}
        <Spotlight>
          &#39;
          {process.env.NEXT_PUBLIC_LOGO}
          &#39;
        </Spotlight>
        입니다.
      </p>
      <p>읽기 쉽고 가독성 높은 코드 작성을 지향하며 프로젝트 완성도를 높이는 데 열정적입니다.</p>
    </div>
  );
}

export default memo(Intro);
