"use client";

import Giscus from "@giscus/react";
import "./archiveComment.scss";

export const commentElementId = "giscus-kku";
const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO as `${string}/${string}`;

export default function ArchiveComment() {

  return (
    <section id={commentElementId} className="comment__wrapper">
      <Giscus
        repo={repoUrl}
        repoId={"R_kgDOKPQeNg"}
        category={"Announcements"}
        categoryId={"DIC_kwDOKPQeNs4CiXns"}
        mapping={"pathname"}
        theme={"noborder_gray"}
        strict={"0"}
        reactionsEnabled={"1"}
        emitMetadata={"0"}
        inputPosition={"bottom"}
        lang={"ko"}
      />
      <div className="comment__blank" />
    </section>
  );
}
