"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NotesMeta } from "@/lib/mdx";
import { useState, useMemo } from "react";

import cn from "@/app/lib/cn";
interface propType {
  uniqueTags: string[];
  liveProjects: NotesMeta[];
}

const ProjectsFilter = ({ uniqueTags, liveProjects }: propType) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags: string[]) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t != tag);
      } else {
        return [...prevTags, tag]; // Add it
      }
    });
  };

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return liveProjects;
    }
    // Otherwise, filter based on selected tags
    return liveProjects.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag)),
    );
  }, [liveProjects, selectedTags]);
  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2 px-2">
        <button
          className={cn(
            "cursor-pointer rounded-lg px-2 py-1 font-mono text-xs capitalize transition-all select-none dark:bg-neutral-800 dark:text-neutral-400 hover:dark:bg-neutral-700",
            selectedTags.length === 0
              ? "bg-neutral-600 text-neutral-200 dark:bg-neutral-300 dark:text-neutral-800 hover:dark:bg-neutral-300"
              : "bg-neutral-300 text-neutral-600 hover:text-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
          )}
          onClick={() => setSelectedTags([])}
        >
          All projects
        </button>

        {uniqueTags.map((tag, i) => (
          <span
            key={`${tag}`}
            onClick={() => handleTagClick(tag)}
            className={cn(
              "hover:bg-neutral-350 cursor-pointer rounded-lg px-2 py-1 font-mono text-xs capitalize transition-all select-none",
              selectedTags.includes(tag)
                ? "bg-neutral-600 text-neutral-200 dark:bg-neutral-300 dark:text-neutral-800 hover:dark:bg-neutral-300"
                : "bg-neutral-300 text-neutral-600 hover:text-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 justify-center gap-4 md:grid-cols-2 md:p-0">
        {filteredProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="cursor hover group relative flex flex-col rounded-2xl p-2 transition-all duration-500 ease-in-out hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <div className="h-50 overflow-clip rounded-xl shadow-[var(--card-shadow-2)] hover:shadow-[var(--card-shadow]">
              <Image
                src={project.thumbImage}
                width={400}
                height={200}
                className="w-full scale-110 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                alt={`${project.slug}-image`}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 rounded-xl px-2 py-3">
              <h4 className="font-libre! text-xl">{project.title}</h4>
              <p className="text-sm">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={`${tag}+${i}`}
                    className="rounded-lg bg-neutral-300 px-2 py-0.5 font-mono text-[10px] capitalize dark:bg-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProjectsFilter;
