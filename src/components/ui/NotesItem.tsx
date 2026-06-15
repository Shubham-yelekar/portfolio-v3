import { NotesMeta } from "@/lib/mdx";
import Link from "next/link";
type postProps = {
  post: NotesMeta;
};
const NotesItem = ({ post }: postProps) => {
  return (
    <Link
      href={`/notes/${post.slug}`}
      className="mb-px flex cursor-pointer items-center justify-between rounded-2xl py-2 transition-all duration-300 ease-in-out group-hover:opacity-40 hover:opacity-100! md:gap-4"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <h4 className="text-sm text-neutral-800! md:text-base dark:text-neutral-200!">
          {post.title}
        </h4>
        <p className="m-0! font-mono text-sm">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default NotesItem;
