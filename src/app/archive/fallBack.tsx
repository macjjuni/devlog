'use client';

import { KSkeleton } from "kku-ui";

export default function FallBack() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <KSkeleton className="h-8 w-48" />
      <KSkeleton className="h-24 w-full" />
      <KSkeleton className="h-24 w-full" />
      <KSkeleton className="h-24 w-full" />
    </div>
  );
}
