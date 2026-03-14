import { ReactNode } from "react";
import { getBlogInfo } from "@/lib/markdown";
import { ArchiveSidebar } from "@/layout";

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  const info = getBlogInfo();

  return (
    <div className="flex mobile:flex-col tablet:flex-col desktop:flex-row gap-4 items-start justify-center w-full">
      <ArchiveSidebar info={info} />
      <section className="flex-1 min-w-0 w-full">{children}</section>
    </div>
  );
}
