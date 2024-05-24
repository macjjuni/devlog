import { ReactNode } from "react";
import "./layout.scss";

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  return <div className="archive__layout">{children}</div>;
}
