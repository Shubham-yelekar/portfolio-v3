import React from "react";
import { NotesMeta } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
type postProps = {
  post: NotesMeta;
};
const NotesItem = ({ post }: postProps) => {
  return (
    <Link
      href={`/notes/${post.slug}`}
      className="flex cursor-pointer gap-1 rounded-2xl border-neutral-600 py-2 transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:px-2 md:gap-4 dark:bg-neutral-950 hover:dark:bg-neutral-900"
    >
      <div className="flex flex-2 flex-col justify-between gap-4 rounded-xl px-2 py-2 md:px-3 md:py-2">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-xl shadow-xl"
            src={post.thumbImage}
            alt={post.thumbImage}
            width={140}
            height={140}
          />
          <div className="">
            <h4 className="font-libre! mb-2 text-lg text-neutral-800! md:text-xl dark:text-neutral-200!">
              {post.title}
            </h4>
            <div className="flex flex-col items-start gap-1 md:flex-row">
              <p className="font-mono text-sm">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="h-full w-1 border-r border-neutral-800"></div>
              <div className="flex gap-2">
                {post.tags?.map((tag, i) => (
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
        </div>
        <p className="text-sm md:text-base">{post.summary}</p>
      </div>
    </Link>
  );
};

export default NotesItem;
