"use client";

import Link from "next/link";
import React from "react";
import { NotesMeta } from "@/lib/mdx";
import { useState, useMemo } from "react";

import cn from "@/app/lib/cn";
import NotesItem from "../ui/NotesItem";
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
        return [...prevTags, tag];
      }
    });
  };

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return notes;
    }
    // Otherwise, filter based on selected tags
    return notes.filter((note) =>
      selectedTags.every((tag) => note.tags?.includes(tag)),
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
        {filteredProjects.map((post) => (
          <NotesItem key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default NotesFilter;
