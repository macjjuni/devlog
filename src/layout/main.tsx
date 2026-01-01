import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className={["relative mx-auto w-full flex-auto transition-all",
                      "max-w-layout desktop:p-8",
                      "tablet:p-6", "p-4"].join(" ")}
    >
    {children}
    </main>
  );
}
