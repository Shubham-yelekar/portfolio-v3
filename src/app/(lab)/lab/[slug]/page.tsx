import React from "react";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";

// Import your custom components
import { mdxComponents } from "@/components/mdx/MdxComponents";
import Container from "@/components/ui/Container";

// This object maps your component names to the actual components.
// const components = {
//   Callout,
//   // You can add any other custom components here
// };

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("lab");
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const { meta, content } = getContentBySlug(slug, "lab");
  try {
    return (
      <Container className="mt-[14dvh] px-4">
        <article className="prose prose-md dark:prose-invert mx-auto">
          {/* Article Header */}
          <div className="mb-12 rounded-lg bg-neutral-100 px-2 py-4 dark:bg-neutral-900">
            <h1 className="font-libre! text-4xl md:px-4">{meta.title}</h1>
            <p className="mt-4 font-mono text-sm text-gray-500 md:px-4">
              Published on{" "}
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Article Content */}
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </Container>
    );
  } catch (error) {
    console.error("Error fetching the componenets", error);
  }
}
