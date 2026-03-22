"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
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

      <div ref={sliderRef} className="flex w-full gap-4 overflow-x-auto pb-2 mobile:gap-3"
           onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} onMouseMove={onMouseMove}>
        <div className="hidden mobile:block flex-shrink-0 w-px" />
        {projects.map((project) => (
          <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" draggable={false} className="group flex-shrink-0 w-64 snap-start mobile:w-56">
            <div className="terminal-box h-full overflow-hidden transition-all hover:shadow-glow">
              <div className="relative w-full h-36 bg-surface overflow-hidden mobile:h-28 rounded-t-lg">
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
                <div data-fallback className="absolute inset-0 items-center justify-center text-terminal-dim text-sm font-medium bg-gray-100 hidden">
                  No Image
                </div>
              </div>

              <div className="p-3">
                <h3 className="text-sm font-bold text-terminal-amber group-hover:underline transition-all mb-1 mobile:text-xs">{project.title}</h3>
                <p className="text-xs text-terminal-dim line-clamp-2">{project.description}</p>
              </div>

              {project.tags && (
                <div className="px-3 pb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs text-terminal-dim bg-surface border border-terminal-border rounded-full mobile:text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </a>
        ))}
        <div className="hidden mobile:block flex-shrink-0 w-px" />
      </div>
    </section>
  );
}
