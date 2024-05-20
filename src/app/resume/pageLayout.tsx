import { ReactNode } from "react";
import "./pageLayout.tsx.scss";

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return <section className="resume__layout">{children}</section>;
}
