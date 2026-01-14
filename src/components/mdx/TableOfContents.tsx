"use client";
import React from "react";
import { useActiveHeading } from "./useActiveHeadings";
import cn from "@/app/lib/cn";
type Heading = {
  text: string;
  id: string;
};

type TableOfContentsProps = {
  headings: Heading[];
};

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const ids = headings.map((h) => h.id);
  const activeId = useActiveHeading(ids);
  return (
    <nav className="fixed top-1/3 right-3 z-10">
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className="m-1!">
            <a
              href={`#${h.id}`}
              className={cn(
                "block text-sm",
                activeId === h.id
                  ? "font-semibold text-blue-500"
                  : "text-paragraph",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
