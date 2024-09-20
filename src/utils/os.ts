"use client";

type GetOsType = "window" | "mac" | "etc";

export default function getOS(): GetOsType {

  const { userAgent } = window.navigator;
  if (userAgent.includes("Windows")) {
    return "window";
  } else if (userAgent.includes("Macintosh")) {
    return "mac";
  }
  return "etc";
}
