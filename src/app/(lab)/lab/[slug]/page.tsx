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
        <article className="mx-auto">
          {/* Article Header */}
          <div className="mb-4 rounded-xl bg-neutral-100 px-4 py-4 dark:bg-neutral-900">
            <div>
              <h4 className="font-libre! mb-2 text-3xl md:text-4xl">
                {meta.title}
              </h4>
              <p className="text-xs md:text-base">{meta.summary}</p>
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
