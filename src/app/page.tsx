"use client";

import { useState } from "react";

export default function AboutPage() {
  // region hooks
  const [activeOptions, setActiveOptions] = useState<string[]>(["fast", "good"]);
  // endregion

  // region Privates
  const trilemmaOptions = [
    { id: "fast", label: "Speed", desc: "빠른 실행력" },
    { id: "cheap", label: "Efficiency", desc: "효율적 자원 배분" },
    { id: "good", label: "Quality", desc: "타협 없는 품질" },
  ];

  const getBalanceMessage = () => {
    const keys = [...activeOptions].sort().join(",");
    if (keys.includes("fast") && keys.includes("good")) return "퀄리티를 지키며 기민하게 움직입니다.";
    if (keys.includes("cheap") && keys.includes("good")) return "합리적인 리소스로 최상의 결과물을 만듭니다.";
    if (keys.includes("cheap") && keys.includes("fast")) return "자원 안에서 가장 빠르게 가치를 증명합니다.";
    return "최적의 밸런스를 고민 중입니다.";
  };
  // endregion

  // region Transactions
  const updateActiveOptions = (id: string) => {
    setActiveOptions((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      const next = [...prev, id];
      if (next.length > 2) next.shift();
      return next;
    });
  };
  // endregion

  // region Events
  const onToggleSwitch = (id: string) => {
    updateActiveOptions(id);
  };
  // endregion

  return (
    <section className="flex flex-col items-start justify-center mobile:!justify-start min-h-[80dvh] max-w-3xl mx-auto">
      <div className={["relative mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000", "desktop:w-fit mobile:w-full"].filter(Boolean).join(" ")}>
        <div className={["bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800", "p-6 rounded-[2rem] shadow-xl shadow-indigo-500/5 tablet:p-5 mobile:p-4 mobile:rounded-[1.5rem]"].filter(Boolean).join(" ")}>
          {/* 가로 배열에서 태블릿 이하부터 세로 배열로 변경 */}
          <div className="flex desktop:flex-row tablet:flex-col desktop:gap-8 tablet:gap-4 mobile:gap-4">
            {trilemmaOptions.map((option) => {
              const isActive = activeOptions.includes(option.id);
              return (
                <div key={option.id} className="flex items-center justify-between gap-6 tablet:gap-2">
                  <div className="flex flex-col">
                    <span className={`text-md font-bold tracking-tight transition-colors ${isActive ? "text-indigo-600" : "text-slate-400"} mobile:text-xs`}>{option.label}</span>
                    <span className="text-sm text-slate-500 whitespace-nowrap mobile:block">{option.desc}</span>
                  </div>

                  <button onClick={() => onToggleSwitch(option.id)} className={`relative w-10 h-5 rounded-full transition-all duration-300 mobile:w-9 mobile:h-4.5 ${isActive ? "bg-indigo-500" : "bg-slate-200 dark:bg-slate-800"}`}>
                    <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 ${isActive ? "translate-x-5 mobile:translate-x-4.5" : "translate-x-0"} mobile:w-2.5 mobile:h-2.5`} />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-50 dark:border-slate-800/50 tablet:mt-3 tablet:pt-2">
            <p className="text-sm font-semibold text-indigo-500/80 italic leading-tight mobile:text-[11px]">&quot;{getBalanceMessage()}&quot;</p>
          </div>
        </div>

        <div className="absolute -bottom-2.5 left-10 w-5 h-5 bg-white dark:bg-slate-900 border-r border-b border-slate-200 dark:border-slate-800 rotate-45 transform tablet:left-8" />
      </div>

      {/* 메인 인사말 */}
      <div className="space-y-10 tablet:space-y-8 mobile:space-y-6">
        <h1 className="font-bold text-4xl !leading-[1.4] tracking-tight w-full text-left text-slate-900 dark:text-white desktop:text-3xl tablet:text-2xl mobile:text-xl">
          안녕하세요? <br />
          <span className="text-indigo-500">&#39;꾸론트엔드&#39;</span>입니다.
        </h1>

        <div className="flex flex-col gap-5 w-full text-lg text-slate-500 dark:text-slate-400 tracking-tighter leading-relaxed desktop:text-base tablet:gap-4 mobile:gap-2 mobile:text-sm">
          <p className="flex items-center gap-3 italic transition-all hover:translate-x-1">
            <span className="text-indigo-500 font-bold">#</span> 읽기 쉽고 가독성 높은 코드를 좋아합니다. ✨
          </p>
          <p className="flex items-center gap-3 italic transition-all hover:translate-x-1">
            <span className="text-indigo-500 font-bold">#</span> 직관적인 UI와 효율적인 개발 환경을 중요하게 생각합니다. 🧑🏻‍💻
          </p>
          <p className="flex items-center gap-3 italic transition-all hover:translate-x-1">
            <span className="text-indigo-500 font-bold">#</span> 이를 바탕으로 완성도를 높이는 데 열정적입니다. 💪🏻
          </p>
        </div>
      </div>
    </section>
  );
}
