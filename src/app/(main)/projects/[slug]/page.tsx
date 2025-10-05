import React from "react";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import Image from "next/image";

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
  const { slug } = await params;
  const { meta, content } = getContentBySlug(slug, "projects");
  console.log(meta.thumbImage);

  try {
    return (
      <Container className="mt-[14vh] px-4 md:mt-[24vh]">
        {/* <Image
          src={meta.thumbImage}
          alt={meta.title}
          width={1000}
          height={1000}
          className="fade-mask absolute -top-50 left-0 z-[-1] w-full opacity-30"
        /> */}
        <article className="mx-auto">
          {/* Article Header */}
          <div className="mb-12 flex flex-col gap-4 border-b-2 border-neutral-300 pb-12 dark:border-neutral-800">
            <h1 className="font-libre! text-4xl md:px-4">{meta.title}</h1>
            <p className="font-mono text-sm text-gray-500 md:px-4">
              Published on{" "}
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="flex gap-4 md:px-4">
              {meta.tags.map((tag: string) => (
                <div
                  className="rounded-2xl bg-neutral-50 px-2 py-1 font-mono text-sm font-semibold text-neutral-700 dark:bg-neutral-800"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
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
