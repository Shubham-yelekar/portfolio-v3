import Link from "next/link";
import { getAllContentMeta } from "@/lib/mdx";
import Container from "@/components/ui/Container";
import PageWrapper from "@/components/ui/PageWrapper";
import Image from "next/image";

export default async function NotesPage() {
  const posts = getAllContentMeta("notes");

  return (
    <PageWrapper>
      <Container className="mt-[14vh]">
        <h2 className="font-libre! text-center text-3xl">Notes</h2>
        <div className="mt-12 flex flex-col gap-4">
          {posts.map((post) => (
            // This would be your <ArticleCard /> component

            <Link
              key={post.slug}
              href={`/notes/${post.slug}`}
              className="flex cursor-pointer gap-4 rounded-2xl p-2 transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:p-2 dark:bg-neutral-950 dark:hover:bg-neutral-900"
            >
              <div className="w-36 flex-1 overflow-clip rounded-xl">
                <Image
                  src={post.thumbImage}
                  width={900}
                  height={600}
                  alt={`${post.title}-cover-alt`}
                  className="h-full object-cover"
                />
              </div>
              <div className="flex flex-2 flex-col justify-between gap-4 rounded-xl px-2 py-2 md:px-3 md:py-2">
                <div>
                  <h4 className="font-libre! mb-1 text-sm text-neutral-800! md:text-lg dark:text-neutral-200!">
                    {post.title}
                  </h4>
                  <p className="md:text-md text-sm">{post.summary}</p>
                </div>
                <p className="text-sm">May 2025</p>
              </div>
            </Link>

            // <Link
            //   key={post.slug}
            //   href={`/notes/${post.slug}`}
            //   className="block rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            // >
            //   <h2 className="text-2xl font-semibold">{post.title}</h2>
            //   <p className="mt-1 text-gray-600 dark:text-gray-400">
            //     {post.summary}
            //   </p>
            //   <time className="mt-2 block text-sm text-gray-500">
            //     {new Date(post.date).toLocaleDateString("en-US", {
            //       year: "numeric",
            //       month: "long",
            //       day: "numeric",
            //     })}
            //   </time>
            // </Link>
          ))}
        </div>
      </Container>
    </PageWrapper>
  );
}
