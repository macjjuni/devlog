import { memo } from "react";
import Spotlight from "@/component/common/spotlight/spotlight";
import "./intro.scss";

function Intro() {
  return (
    <div className={"intro__container"}>
      <p>
        안녕하세요? 👋 <br />
        프론트엔드 개발자 &#39;꾸생&#39;입니다.
      </p>
      <p><Spotlight>&#39;꾸준함이 생명&#39;</Spotlight>이라는 모토 아래, 개발 공부와 일상 기록을 통해 항상 성장하고 있습니다.</p>
      <p>세심한 성격으로 사소한 디테일에 신경을 쓰며 프로젝트 완성도를 높이는 데 열정적입니다.</p>
    </div>
  );
}

export default memo(Intro);
