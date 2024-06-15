import type { Metadata } from "next";
import { getMetadata } from "@/config/meta";
import PageLayout from "@/app/page/layout";
import Intro from "@/component/aboutContent/intro/intro";
import SocialLink from "@/component/aboutContent/socialLink/socialLink";

export const metadata: Metadata = getMetadata("About", null, null, null);

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="about__layout__container">
        <Intro />
        <SocialLink />
      </div>
    </PageLayout>
  );
}
