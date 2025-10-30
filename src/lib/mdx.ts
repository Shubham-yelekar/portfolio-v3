import fs from "fs";
import path from "path";
import matter from "gray-matter";

type ContentType = "notes" | "projects" | "lab";

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
        status: string;
        title: string;
        date: string;
        summary: string;
        thumbImage: string;
        thumbVideo: string;
        tags: string[];
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

export function getAllSlugs(type: ContentType) {
  const dir = path.join(process.cwd(), "src/content", type);
  return fs.readdirSync(dir).filter((name) => {
    const stat = fs.statSync(path.join(dir, name));
    return stat.isDirectory();
  });
}

export interface NotesMeta {
  status: string;
  title: string;
  date: string;
  summary: string;
  thumbImage: string;
  thumbVideo: string;
  tags: string[];
  slug: string;
}
