import React, { memo } from "react";
import BoxArea from "@/components/resume/boxArea/BoxArea";
import "./Intro.scss";

const Intro = () => {
  return (
    <>
      {/* <BoxArea className="intro-name-area">이준희</BoxArea> */}
      <BoxArea className="intro-area">
        <p>Next.js, React, Vue, TypeScript 기반 3년 차 프런트엔드 개발자 꿀양갱갱갱입니다.</p>
        <p>React, Vue 등 여러 SPA/SSR 프레임워크 경험이 있습니다. 다수의 레거시 프로젝트를 마이그레이션 또는 리뉴 얼한 경험이 있으며, 각 기술의 장단점을 명확히 이해하고 요구사항과 리소스에 맞는 프런트엔드 기술 스택을 선 정할 수 있습니다.</p>
        <p>
          현재 프로젝트 경험을 바탕으로 업무 효율성을 높이기 위한 프로젝트 구조 설계 및 안정적인 UI 제공을 위한 테스 트, 가독성 높은 코드 작성에 집중하고 있습니다. 또한 새로운 기술과 트렌드에 관심이 많아 꾸준히 학습하며, 개 인 블로그에 포스팅하고 있습니다. 이를 통해 성장하는
          개발자가 되기 위해 노력하고 있습니다.
        </p>
        <p>
          여러 SI 프로젝트를 진행하며 고객, 디자이너, 기획자 등 이해관계자와의 협업 경험을 쌓았습니다. 각기 다른 팀과 원활하게 협력하는 방법을 익혔고, 복잡한 요구사항을 처리하며 프로젝트를 성공적으로 이끌 수 있었습니다. 이러 한 경험을 바탕으로 팀 내 협업 문화를 개선하는 데 기여할
          수 있습니다.
        </p>
      </BoxArea>
    </>
  );
};

export default memo(Intro);
