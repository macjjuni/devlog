"use client";

import { useState } from "react";
import NextImage from "next/image";
import type { ImageProps } from "next/image";

export default function Image({ className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <span className="absolute inset-0 w-full h-full rounded-[inherit] overflow-hidden bg-[var(--terminal-border)]">
          <span className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </span>
      )}
      <NextImage
        className={className}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        {...props}
      />
    </>
  );
}