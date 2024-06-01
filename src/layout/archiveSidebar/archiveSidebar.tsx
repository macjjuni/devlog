import React, { memo } from "react";
import Profile from "@/component/sidebar/profile/profile";
import Search from "@/component/sidebar/search/search";
import Category from "@/component/sidebar/category/category";
import BitcoinChart from "@/component/sidebar/bitcoinChart/bitcoinChart";
import { NotionInfoProps } from "@/@types/notion";

function ArchiveSidebar({ info }: { info: NotionInfoProps }) {
  return (
    <>
      <Profile description={info.description} imageUrl={info.coverURL} />
      <Search />
      <Category list={info.category} />
      <BitcoinChart />
    </>
  );
}

export default memo(ArchiveSidebar);
