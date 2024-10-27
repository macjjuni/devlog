import React from "react";
import Skeleton from "@/component/common/skeleton/skeleton";

export default function FallBack() {
  return (
    <>
      <aside className="archive__layout__sidebar">
        <Skeleton height="100px" />
        <Skeleton height="68px" />
        <Skeleton height="320px" />
      </aside>
      <section className="archive__layout__content">
        <Skeleton height="30px" />
        <Skeleton height="648px" />
        <Skeleton height="32px" />
      </section>
    </>
  );
}
