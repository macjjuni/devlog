"use client";

import { useEffect, useRef } from "react";
import { appendUtter, isContainUtter, toggleTheme, commentElemetId } from "@/utils/utterances";
import "./comment.scss";

export default function Comment() {
  const commentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const commentDom = commentRef.current;
    // if (!commentDom || color === null) return;

    appendUtter(commentDom, "dark"); // 렌더링 안 됐으면 스크립트 삽입 로직 실행!
  }, []);

  return (
    <section ref={commentRef} id={commentElemetId} className="comment__wrapper" />
  );
}
