import PageLayout from '@/app/page/layout';
import SocialLink from '@/component/socialLink/socialLink';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="about__layout__wrapper">
        <div className="about__content">
          <p>
            안녕하세요? 👋
            <br />
            프론트엔드 개발자 &#39;꾸생&#39;입니다.
          </p>
          <p>&#39;꾸준함이 생명&#39;이라는 인생 모토를 가지고 있으며 개발 공부나 일상 등 기록하기 위해 노력하고 있습니다.</p>
          <p>세심한 성격으로 사소한 디테일에 신경을 쓰며 프로젝트 완성도를 높이는 데 열정적입니다.</p>
        </div>
        <SocialLink />
      </div>
    </PageLayout>
  );
}
