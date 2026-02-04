import { memo } from "react";
// import { KIcon } from "kku-ui"; // Temporarily disabled for Next.js 16

// Temporary placeholder component during Next.js 16 upgrade
function ArchiveTitleIcon({ title }: { title: string }) {
  return <span className={"archive__title__icon"}>{title[0]?.toUpperCase() || ''}</span>;
}

export default memo(ArchiveTitleIcon);
