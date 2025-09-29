import fs from "fs";
import path from "path";
import matter from "gray-matter";

type ContentType = "notes" | "projects";

const contentDirectory = path.join(process.cwd(), "src", "content");

export function getAllContentMeta(contentType: ContentType) {
  const contentTypeDirectory = path.join(contentDirectory, contentType);
  const allContent = fs.readdirSync(contentTypeDirectory);

  const allContentMeta = allContent.map((contentSlug) => {
    const contentPath = path.join(
      contentTypeDirectory,
      contentSlug,
      "index.mdx",
    );
    const fileContents = fs.readFileSync(contentPath, "utf8");
    const { data } = matter(fileContents);
    return {
      ...(data as {
        title: string;
        date: string;
        summary: string;
        thumbImage: string;
        thumbVideo: string;
      }),
      slug: contentSlug,
    };
  });

  return allContentMeta;
}

export function getContentBySlug(slug: string, contentType: string) {
  const contentTypeDirectory = path.join(contentDirectory, contentType);
  const postPath = path.join(contentTypeDirectory, slug, "index.mdx");
  const fileContents = fs.readFileSync(postPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    meta: data,
    content,
  };
}
