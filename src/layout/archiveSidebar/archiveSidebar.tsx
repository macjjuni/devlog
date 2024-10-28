import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import Category from "@/component/sidebar/category/category";
import BitcoinChart from "@/component/sidebar/bitcoinChart/bitcoinMarketChart";
import { ArchiveCategoryListResponse } from "@/app/api/archive/category/list/route";
import { useCurrentCategory } from "@/hook";
import request from "@/utils/request";

const categoryListUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/api/archive/category/list?isContainAll=true`;

export default async function ArchiveSidebar() {

  const currentCategory = await useCurrentCategory();
  const { categories } = (await request<ArchiveCategoryListResponse>(categoryListUrl)) || { categories: [] };

  return (
    <aside className="archive__layout__sidebar">
      <Profile />
      <Search />
      <Category list={categories} currentCategory={currentCategory} />
      <BitcoinChart />
    </aside>
  );
}
