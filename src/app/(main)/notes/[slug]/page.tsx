// app/blog/[slug]/page.tsx
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MdxComponents";
// Import your custom components
import { Callout } from "@/components/mdx/Callout";
import Container from "@/components/ui/Container";

// This object maps your component names to the actual components.
// const components = {
//   Callout,
//   mdxComponents,
//   // You can add any other custom components here
// };

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
  const { slug } = params;
  const { meta, content } = getContentBySlug(slug, "notes");
  console.log(meta);

  try {
    return (
      <Container className="mt-[18vh] px-4 md:mt-[24vh]">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          {/* Article Header */}

          <div className="mb-12 rounded-lg bg-neutral-100 px-2 py-4 dark:bg-neutral-900">
            <h1 className="font-libre! text-4xl font-bold md:px-4">
              {meta.title}
            </h1>
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
