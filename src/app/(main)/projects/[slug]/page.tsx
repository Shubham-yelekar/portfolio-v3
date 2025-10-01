import React from "react";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";

// Import your custom components
import { Callout } from "@/components/mdx/Callout";
import Container from "@/components/ui/Container";

// This object maps your component names to the actual components.
const components = {
  Callout,
  // You can add any other custom components here
};

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
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">{meta.title}</h1>
            <p className="mt-2 text-gray-500">
              Published on{" "}
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Article Content */}
          <MDXRemote source={content} components={components} />
        </article>
      </Container>
    );
  } catch (error) {
    console.error("Error fetching the componenets", error);
  }
}
