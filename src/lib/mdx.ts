import fs from "fs";
import path from "path";
import matter from "gray-matter";

type ContentType = "notes" | "projects" | "lab";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

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

export function getAllSlugs(type: ContentType) {
  const dir = path.join(CONTENT_ROOT, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((name) => {
    const stat = fs.statSync(path.join(dir, name));
    return stat.isDirectory();
  });
}

export function getAllContentMeta(type: ContentType) {
  const contentTypeDirectory = path.join(CONTENT_ROOT, type);
  if (!fs.existsSync(contentTypeDirectory)) return [];

  const allContent = fs.readdirSync(contentTypeDirectory);

  const allContentMeta = allContent.map((contentSlug) => {
    const contentPath = path.join(
      contentTypeDirectory,
      contentSlug,
      "index.mdx",
    );
    if (!fs.existsSync(contentPath)) return null;
    const fileContents = fs.readFileSync(contentPath, "utf8");
    const { data } = matter(fileContents);

    // normalize fields and provide safe defaults so callers can rely on shape
    const title = data.title ?? "";
    const date = data.date ?? "";
    const summary = data.summary ?? "";
    const thumbImage = data.thumbImage ?? "";
    const thumbVideo = data.thumbVideo ?? "";
    const status = data.status ?? "draft";
    const tags = Array.isArray(data.tags) ? data.tags : [];

    return {
      status,
      title,
      date,
      summary,
      thumbImage,
      thumbVideo,
      tags,
      slug: contentSlug,
    } as NotesMeta;
  });

  // filter out any nulls (in case of missing index.mdx)
  return allContentMeta.filter(Boolean) as NotesMeta[];
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

export function getContentBySlug(slug: string, type: ContentType) {
  const filePath = path.join(CONTENT_ROOT, type, slug, "index.mdx");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const headings = extractHeadings(typeof content === "string" ? content : "");

  return {
    meta: {
      title: data.title ?? "",
      date: data.date ?? "",
      summary: data.summary ?? "",
      thumbImage: data.thumbImage ?? "",
      thumbVideo: data.thumbVideo ?? "",
      status: data.status ?? "draft",
      tags: Array.isArray(data.tags) ? data.tags : [],
      slug,
    },
    content: typeof content === "string" ? content : "",
    headings,
  };
}
