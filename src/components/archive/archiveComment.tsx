"use client";

import Giscus from "@giscus/react";

export const commentElementId = "giscus-kku";
const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO as `${string}/${string}`;

export default function ArchiveComment() {
  return (
    <div
      id={commentElementId}
      className="mt-12 flex min-h-[270px] w-full items-center justify-center gap-6"
    >
      <Giscus
        repo={repoUrl}
        repoId="R_kgDOKPQeNg"
        category="Announcements"
        categoryId="DIC_kwDOKPQeNs4CiXns"
        mapping="pathname"
        theme="light"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        lang="ko"
      />
    </div>
  );
}