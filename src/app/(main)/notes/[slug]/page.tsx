// app/blog/[slug]/page.tsx
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MdxComponents";

import rehypeSlug from "rehype-slug";
// Import your custom components
import { Callout } from "@/components/mdx/Callout";
import Container from "@/components/ui/Container";
import Image from "next/image";
import TableOfContents from "@/components/mdx/TableOfContents";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slug = getAllSlugs("notes");
  return slug.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { meta, content, headings } = getContentBySlug(slug, "notes");

  try {
    return (
      <Container className="mt-[10dvh] px-2 md:px-4">
        <article className="mx-auto">
          {/* Article Header */}

          <div className="mb-12 rounded-xl bg-neutral-100 px-1 py-1 dark:bg-neutral-900">
            <Image
              className="mt-0! mb-4 aspect-video w-full rounded-lg object-cover"
              src={meta.thumbImage}
              alt={meta.title}
              width={450}
              height={320}
            />
            <h1 className="font-libre! m-0! px-2 text-3xl font-bold md:px-4 md:text-4xl">
              {meta.title}
            </h1>
            <p className="mt-2 px-2 md:px-4">{meta.summary}</p>
            <p className="mt-2 px-2 pb-2 font-mono text-sm text-gray-500 md:px-4">
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
          {/* Article Content */}
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </article>
      </Container>
    );
  } catch (error) {
    console.error("Error fetching the componenets", error);
  }
}
