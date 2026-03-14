import { ReactNode } from "react";
import "./layout.scss";

export default function ArchiveDetailLayout({ children }: { children: ReactNode }) {
  return <div className="archive__detail__layout">{children}</div>;
}
