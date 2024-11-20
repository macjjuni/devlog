import { ReactNode } from "react";
import "./pageLayout.scss";

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return <section className="resume__layout">{children}</section>;
}
