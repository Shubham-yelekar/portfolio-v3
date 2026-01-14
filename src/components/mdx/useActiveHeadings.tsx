// components/mdx/useActiveHeading.ts
"use client";
import { useEffect, useState } from "react";

export function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px", // tune for your header height
        threshold: [0.1, 0.25, 0.5],
      },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [ids.join(",")]);

  return activeId;
}
