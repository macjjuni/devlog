"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { KCard, KCardHeader, KCardTitle, KCardDescription, KCardContent } from "kku-ui";
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
    <section className="w-full mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 tablet:mt-12 mobile:mt-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 tablet:text-xl mobile:text-lg mobile:mb-4">
        Projects
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab snap-x snap-mandatory pb-2 mobile:gap-3"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            className="group flex-shrink-0 w-64 snap-start mobile:w-56"
          >
            <KCard className="h-full overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700">
              <div className="relative w-full h-36 bg-slate-100 dark:bg-slate-800 overflow-hidden mobile:h-28">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector("[data-fallback]") as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  data-fallback
                  className="absolute inset-0 items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium hidden"
                >
                  No Image
                </div>
              </div>

              <KCardHeader>
                <KCardTitle className="text-base group-hover:text-indigo-500 transition-colors mobile:text-sm">
                  {project.title}
                </KCardTitle>
                <KCardDescription className="line-clamp-2">
                  {project.description}
                </KCardDescription>
              </KCardHeader>

              {project.tags && (
                <KCardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 rounded-full mobile:text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </KCardContent>
              )}
            </KCard>
          </a>
        ))}
      </div>
    </section>
  );
}
