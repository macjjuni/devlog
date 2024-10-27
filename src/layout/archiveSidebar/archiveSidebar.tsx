import React from "react";
import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import Category from "@/component/sidebar/category/category";
import BitcoinChart from "@/component/sidebar/bitcoinChart/bitcoinMarketChart";
import { getCategoryList } from "@/utils/archive";

export default async function ArchiveSidebar() {
  const categoryList = await getCategoryList();

  return (
    <aside className="archive__layout__sidebar">
      <Profile />
      <Search />
      <Category list={categoryList} />
      <BitcoinChart />
    </aside>
  );
}
