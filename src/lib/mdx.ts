import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  date: string;
  summary: string;
  slug: string;
};

const contentDirectory = path.join(process.cwd(), "src", "content", "notes");
export function getAllPostsMeta(): PostMeta[] {
  const allPosts = fs.readdirSync(contentDirectory);

  const allPostsMeta = allPosts.map((postSlug) => {
    const postPath = path.join(contentDirectory, postSlug, "index.mdx");
    const fileContents = fs.readFileSync(postPath, "utf8");
    const { data } = matter(fileContents);
    return {
      ...(data as { title: string; date: string; summary: string }),
      slug: postSlug,
    };
  });

  return allPostsMeta;
}

export function getPostBySlug(slug: string) {
  const postPath = path.join(contentDirectory, slug, "index.mdx");

  const fileContents = fs.readFileSync(postPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    meta: data,
    content,
  };
}
