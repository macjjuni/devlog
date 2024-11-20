import { ReactNode } from "react";
import "./pageLayout.scss";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <section className="about__layout">{children}</section>;
}
