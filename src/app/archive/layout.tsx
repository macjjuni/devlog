import { ReactNode } from "react";

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex mobile:flex-col tablet:flex-col desktop:flex-row gap-6 items-start justify-center w-full">
      {children}
    </div>
  );
}