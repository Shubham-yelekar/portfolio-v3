import React from "react";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
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
      <Container className="mt-[10dvh] px-4">
        {/* <Image
          src={meta.thumbImage}
          alt={meta.title}
          width={1000}
          height={1000}
          className="fade-mask absolute -top-50 left-0 z-[-1] w-full opacity-30"
        /> */}
        <Link href="/projects">
          <Button className="my-2" variant={"secondary"}>
            <ChevronLeft />
            Back
          </Button>
        </Link>
        <article>
          {/* Article Header */}
          <div className="mb-12 flex flex-col gap-4 rounded-xl bg-neutral-100 px-1 py-1 dark:bg-neutral-900">
            <Image
              className="mb-1 w-full rounded-xl"
              src={meta.thumbImage}
              alt={meta.title}
              width={450}
              height={320}
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-libre! px-2 text-3xl md:px-4 md:text-4xl">
                {meta.title}
              </h1>
              <p className="px-2 font-mono text-sm text-gray-500 md:px-4">
                Published on{" "}
                {new Date(meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="m-2 flex flex-wrap items-center gap-2 md:gap-4">
                {meta.tags.map((tag: string) => (
                  <div
                    className="rounded-2xl bg-neutral-50 px-4 py-1 font-mono text-sm font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    key={tag}
                  >
                    {tag}
                  </div>
                ))}
              </div>
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
