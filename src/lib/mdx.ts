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
    console.log("DEBUG PATH:", postPath);
  console.log("EXISTS:", fs.existsSync(postPath));
   if (!fs.existsSync(postPath)) {
    throw new Error(`MDX file missing at ${postPath}`);
  }
  const fileContents = fs.readFileSync(postPath, "utf8");

  const { data, content } = matter(fileContents);
  const headings = extractHeadings(content);

  return {
    meta: data,
    content,
    headings,
  };
}

export function getAllSlugs(type: ContentType) {
  const dir = path.join(process.cwd(), "src/content", type);
  return fs.readdirSync(dir).filter((name) => {
    const stat = fs.statSync(path.join(dir, name));
    return stat.isDirectory();
  });
}

export function extractHeadings(content: string) {
  const headings: { text: string; id: string }[] = [];
  const regex = /^##\s+(.*)$/gm;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ text, id });
  }

  return headings;
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
