import React, { memo } from "react";
import Profile from "@/components/sidebar/profile/profile";
import Search from "@/components/sidebar/search/search";
import Category from "@/components/sidebar/category/category";
import BitcoinChart from "@/components/sidebar/bitcoinChart/bitcoinMarketChart";
import { NotionInfoProps } from "@/@types/notion";

function ArchiveSidebar({ info }: { info: NotionInfoProps }) {
  return (
    <>
      <Profile description={info?.description} imageUrl={info?.coverURL} />
      <Search />
      <Category list={info?.category} />
      <BitcoinChart />
    </>
  );
}

export default memo(ArchiveSidebar);
