import React from "react";
import Container from "../ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";

import Button from "../ui/Button";
import NotesItem from "../ui/NotesItem";

const Blogs = () => {
  const posts = getAllContentMeta("notes");
  const livePosts = posts.filter((post) => post.status === "live");
  return (
    <Container className="flex flex-col gap-6 md:gap-9">
      <h2 className="font-libre! px-2 text-center text-2xl md:px-4">Notes</h2>

      <div className="flex flex-col gap-8 px-2 md:gap-6 md:px-4">
        {livePosts.map((post) => (
          <NotesItem key={post.slug} post={post} />
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
