// app/blog/[slug]/page.tsx
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MdxComponents";
// Import your custom components
import { Callout } from "@/components/mdx/Callout";
import Container from "@/components/ui/Container";
import Image from "next/image";

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
      <Container className="mt-[10dvh] px-2 md:px-4">
        <article className="prose prose-lg dark:prose-invert mx-auto">
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
            <p className="mt-2 px-2 font-mono text-sm text-gray-500 md:px-4">
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
