import React, { memo } from "react";
import Profile from "@/components/sidebar/profile/profile";
import { NotionInfoProps } from "@/@types/notion";

function ArchiveSidebar({ info }: { info: NotionInfoProps }) {
  return (
      <Profile description={info?.description} imageUrl={info?.coverURL} />
  );
}

export default memo(ArchiveSidebar);
