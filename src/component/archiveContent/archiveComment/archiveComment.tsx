"use client";

import { useEffect, useRef } from "react";
import { appendUtter, commentElementId } from "@/utils/utterances";
import "./archiveComment.scss";

export default function ArchiveComment() {
  // region [Hooks]

  const commentRef = useRef<HTMLElement | null>(null);

  // endregion

  // region [Life Cycles]

  useEffect(() => {
    if (window) {
      appendUtter(commentRef.current as HTMLDivElement);
    }
  }, []);

  // endregion

  return (
    <section ref={commentRef} id={commentElementId} className="comment__wrapper">
      <div className="comment__blank" />
    </section>
  );
}
