import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className={["relative mx-auto w-full flex-auto flex flex-col transition-all overflow-x-hidden",
                      "max-w-layout desktop:p-8",
                      "tablet:p-6", "px-4 pt-4 pb-4", "mobile:pt-0"].join(" ")}
    >
    {children}
    </main>
  );
}
