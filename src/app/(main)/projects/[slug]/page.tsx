import React from "react";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { YouTubeEmbed, FramedImage } from "@/components/mdx/embeded";
// Import your custom components

import Container from "@/components/ui/Container";

// This object maps your component names to the actual components.

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("projects");
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = params;
  const { meta, content } = getContentBySlug(slug, "projects");
  try {
    return (
      <Container className="mt-[14vh] px-4">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <h1 className="font-libre! px-4 text-4xl font-bold">
              {meta.title}
            </h1>
            <p className="mt-4 px-4 font-mono text-sm text-gray-500">
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
