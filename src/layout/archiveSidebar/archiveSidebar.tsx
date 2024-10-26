import React, { memo } from "react";
import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import Category from "@/component/sidebar/category/category";
import BitcoinChart from "@/component/sidebar/bitcoinChart/bitcoinMarketChart";
import { NotionInfoProps } from "@/@types/notion";
import { getCategoryList } from "@/utils/archive";

async function ArchiveSidebar({ info }: { info?: NotionInfoProps, list?: string[] }) {

  const categoryList = await getCategoryList();

  return (
    <>
      <Profile description={info?.description} />
      <Search />
      <Category list={categoryList} />
      <BitcoinChart />
    </>
  );
}

export default memo(ArchiveSidebar);
