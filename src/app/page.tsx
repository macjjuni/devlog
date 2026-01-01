import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";

export const metadata: Metadata = getMetadata("Home", null, null, null);

export default function AboutPage() {
  return (
    <section className="flex flex-col items-start justify-center mobile:h-[50dvh] gap-10">
      <h1 className="font-bold text-2xl tablet:text-4xl !leading-[1.5] tracking-tight w-full text-left">
        안녕하세요? <br/>
        &#39;꾸론트엔드&#39;입니다.
      </h1>

      <div className="flex flex-col gap-3 w-full text-lg text-gray-500 md:text-xl tracking-tighter">
        <p>읽기 쉽고 가독성 높은 코드를 좋아합니다. ✨</p>
        <p>직관적인 UI와 효율적인 개발 환경을 중요하게 생각합니다. 🧑🏻‍💻</p>
        <p>이를 바탕으로 완성도를 높이는 데 열정적입니다. 💪🏻</p>
      </div>
    </section>
  );
}
