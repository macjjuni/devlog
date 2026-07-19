"use client";

import { useRef, useCallback } from "react";
import Image from "@/components/common/Image";
import projects from "@/data/projects";

export default function ProjectSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isDragging.current = true;
    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    slider.scrollLeft = scrollLeft.current - walk;
  }, []);

  return (
    <section className="w-[calc(100%+2rem)] -mx-4 desktop:w-[calc(100%+4rem)] desktop:-mx-8 tablet:w-[calc(100%+3rem)] tablet:-mx-6 mt-16 tablet:mt-12 mobile:mt-10">
      <h2 className="px-5 tablet:px-6 desktop:px-0 text-xl font-bold tracking-tight text-terminal-amber mb-6 tablet:text-lg mobile:text-base mobile:mb-4">
        <span className="text-terminal-dim">$</span> ls ./projects
      </h2>

      <div ref={sliderRef} className="no-scrollbar flex w-full gap-4 overflow-x-auto pt-2 -mt-2 pb-7 -mb-5 mobile:gap-3"
           onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} onMouseMove={onMouseMove}>
        <div className="hidden mobile:block flex-shrink-0 w-px" />
        {projects.map((project) => (
          <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" draggable={false} className="group flex-shrink-0 w-[294px] snap-start mobile:w-[258px]">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-terminal-border bg-background transition-all duration-300 group-hover:-translate-y-1 group-hover:border-terminal-amber-dim group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="relative w-full h-[166px] bg-surface overflow-hidden mobile:h-32">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  draggable={false}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector("[data-fallback]") as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div data-fallback className="absolute inset-0 items-center justify-center text-terminal-dim text-sm font-medium bg-surface hidden">
                  No Image
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-1.5 p-4 mobile:p-3">
                <h3 className="flex items-center gap-1 text-sm font-bold leading-snug text-terminal-amber mobile:text-xs">
                  <span className="truncate">{project.title}</span>
                  <svg
                    className="h-3.5 w-3.5 flex-shrink-0 text-terminal-dim opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </h3>
                <p className="text-xs leading-relaxed text-terminal-dim line-clamp-2">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
        <div className="hidden mobile:block flex-shrink-0 w-px" />
      </div>
    </section>
  );
}
