import React from "react";
import Container from "../ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const Blogs = () => {
  const posts = getAllContentMeta("notes");

  return (
    <Container className="flex flex-col gap-6 md:gap-9">
      <h2 className="font-libre! px-2 text-center text-2xl md:px-4">Notes</h2>
      <div className="flex flex-col gap-2 md:gap-4">
        {posts.map((post) => (
          // This would be your <ArticleCard /> component

          <Link
            key={post.slug}
            href={`/notes/${post.slug}`}
            className="flex cursor-pointer gap-1 rounded-2xl p-2 transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:p-2 md:gap-4 dark:bg-neutral-950 hover:dark:bg-neutral-900"
          >
            <div className="aspect-7/5 w-36 flex-1 overflow-clip rounded-xl">
              <Image
                src={post.thumbImage}
                width={900}
                height={600}
                alt="thumb"
                className="h-full object-cover"
              />
            </div>
            <div className="flex flex-2 flex-col justify-between gap-4 rounded-xl px-2 py-2 md:px-3 md:py-2">
              <div>
                <h4 className="font-libre! text-md mb-1 text-neutral-800! md:text-lg dark:text-neutral-200!">
                  {post.title}
                </h4>
                <p className="text-xs md:text-base">{post.summary}</p>
              </div>
              <p className="text-sm">May 2025</p>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/projects">
        <Button className="mx-auto mt-4 w-40" variant={"tertiary"}>
          All Notes
        </Button>
      </Link>
    </Container>
  );
};

export default Blogs;
