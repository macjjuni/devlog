import Head from "next/head";
import config from "@/config/notion.config";

interface IHead {
  title?: string;
  des?: string;
  image?: string;
}

const defaultTitle = process.env.NEXT_PUBLIC_TITLE || "";
const defaultDes = process.env.NEXT_PUBLIC_DESCRIPTION || "";
const defaultURL = process.env.NEXT_PUBLIC_DOMAIN || "";
const defaultImage = config.blog.SITE_IMAGE || "";

const NextHead = ({ title, des, image = defaultImage }: IHead) => {
  const Title = `${defaultTitle}${title ? ` :: ${title}` : ""}`;

  if (defaultTitle === "") console.error("Not found title in env");
  if (defaultDes === "") console.error("Not found description in env");
  if (defaultURL === "") console.error("Not found Domain Url in env");
  if (defaultImage === "") console.error("Not Found Default Image Url");

  return (
    <Head>
      <title>{Title}</title>
      <meta name="description" content={des || defaultDes} />
      {/* Open Graph Tags */}
      {/* 웹사이트 이름 */}
      <meta name="og:site_name" content={defaultTitle} />
      {/* 웹사이트 주소 */}
      <meta name="og:url" content={defaultURL} />
      {/* 웹사이트 제목 */}
      <meta name="og:title" content={Title} />
      {/* 웹사이트 상세 설명 */}
      <meta name="og:description" content={des || defaultDes} />
      {/* 웹사이트 유형 */}
      <meta name="og:type" content="website" />
      {/* 웹사이트 이미지 */}
      <meta name="og:image" content={image} />
      {/* 트위터 메타 태그 */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={des || defaultDes} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default NextHead;
