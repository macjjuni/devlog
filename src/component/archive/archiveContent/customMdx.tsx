import React, { ReactNode } from "react";
import { textToId } from "@/utils/string";

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading({ type, children }: HeadingProps) {
  const id = textToId(children);

  if (type === "h1") {
    return <h1 id={id}>{children}</h1>;
  }
  if (type === "h2") {
    return <h2 id={id}>{children}</h2>;
  }
  if (type === "h3") {
    return <h3 id={id}>{children}</h3>;
  }
  if (type === "h4") {
    return <h4 id={id}>{children}</h4>;
  }
  if (type === "h5") {
    return <h5 id={id}>{children}</h5>;
  }
  return <h6 id={id}>{children}</h6>;
}

function AnchorTag({ href, children }: {href: string, children: ReactNode }) {
  return (<a href={href} target={"_blank"}>{children}</a>)
}

export default function customMdxComponents() {
  return {
    h2: (props: React.HTMLProps<HTMLHeadElement>) => <Heading type={"h2"}>{props.children}</Heading>,
    h3: (props: React.HTMLProps<HTMLHeadElement>) => <Heading type={"h3"}>{props.children}</Heading>,
    h4: (props: React.HTMLProps<HTMLHeadElement>) => <Heading type={"h4"}>{props.children}</Heading>,
    h5: (props: React.HTMLProps<HTMLHeadElement>) => <Heading type={"h5"}>{props.children}</Heading>,
    h6: (props: React.HTMLProps<HTMLHeadElement>) => <Heading type={"h6"}>{props.children}</Heading>,
    a: (props: React.HTMLProps<HTMLAnchorElement>) => <AnchorTag href={props?.href || "#"}>{props.children}</AnchorTag>,
  };
}
