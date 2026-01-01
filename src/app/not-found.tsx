"use client";

import { KButton } from "kku-ui";
import { useRouter } from "next/navigation";


export default function NotFound() {
  const { back } = useRouter();

  const onClickBack = () => {
    back();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 min-h-[calc(100dvh-64px)]">
      404
      <KButton onClick={onClickBack}>Back</KButton>
    </div>
  );
}
