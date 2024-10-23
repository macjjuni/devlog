"use client";

import { ReactNode } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import customMdx from "@/component/archive/archiveContent/customMdx";
import "./ArchiveContent.scss";
import "@/style/code-theme.scss";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  children: ReactNode;
}

export default function ArchiveContent({ source, children }: MDXContentProps) {
  return (
    <div className={"archive__content__container"}>
      <div className="archive__content__container__detail">
        <MDXRemote {...source} components={customMdx} />
      </div>
      {children}
    </div>
  );
}
