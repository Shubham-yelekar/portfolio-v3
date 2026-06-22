import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";
import Container from "../ui/Container";

import { GoArrowUpRight } from "react-icons/go";
import { PiPenNibFill } from "react-icons/pi";
import NotesItem from "../ui/NotesItem";

const Blogs = () => {
  const posts = getAllContentMeta("notes");
  const livePosts = posts.filter((post) => post.status === "live");
  return (
    <Container text className="flex flex-col gap-6 md:gap-9">
      <div className="flex w-full max-w-xl items-center justify-between px-4">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-lg md:text-xl">Notes</h2>
        </div>

        <Link
          href="/projects"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-100 p-3 text-sm text-[var(--body)] transition-colors duration-150 ease-out select-none hover:bg-neutral-200 hover:text-[var(--heading)] active:scale-[0.97] dark:bg-neutral-900 hover:dark:bg-neutral-800"
        >
          All Notes <GoArrowUpRight size={16} />
        </Link>
      </div>

      <div className="group flex flex-col px-2 md:px-4">
        {livePosts.map((post) => (
          <NotesItem key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
