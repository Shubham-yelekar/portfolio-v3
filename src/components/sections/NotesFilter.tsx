"use client";

import Link from "next/link";
import React from "react";
import { NotesMeta } from "@/lib/mdx";
import { useState, useMemo } from "react";

import cn from "@/app/lib/cn";
interface propType {
  uniqueTags: string[];
  notes: NotesMeta[];
}

const NotesFilter = ({ uniqueTags, notes }: propType) => {
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
      return notes;
    }
    // Otherwise, filter based on selected tags
    return notes.filter((note) =>
      selectedTags.every((tag) => note.tags.includes(tag)),
    );
  }, [notes, selectedTags]);

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
          All notes
        </button>

        {uniqueTags.map((tag, i) => (
          <span
            key={`${tag}`}
            onClick={() => handleTagClick(tag)}
            arai-role="button"
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
      <div className="mt-12 flex flex-col gap-4">
        {notes.map((post) => (
          <Link
            key={post.slug}
            href={`/notes/${post.slug}`}
            className="flex cursor-pointer gap-1 rounded-2xl border-neutral-600 py-2 transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:px-2 md:gap-4 dark:bg-neutral-950 hover:dark:bg-neutral-900"
          >
            <div className="flex flex-2 flex-col justify-between gap-4 rounded-xl px-2 py-2 md:px-3 md:py-2">
              <div>
                <h4 className="font-libre! text-md mb-1 text-neutral-800! md:text-lg dark:text-neutral-200!">
                  {post.title}
                </h4>
                <p className="text-xs md:text-base">{post.summary}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-mono text-sm">May 2025</p>
                <div className="h-full w-1 border-r border-neutral-800"></div>
                <div>
                  {post.tags.map((tag, i) => (
                    <span
                      key={`${tag}+${i}`}
                      className="rounded-lg bg-neutral-300 px-2 py-1 font-mono text-xs capitalize dark:bg-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NotesFilter;
