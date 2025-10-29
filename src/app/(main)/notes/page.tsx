import Link from "next/link";
import { getAllContentMeta } from "@/lib/mdx";
import Container from "@/components/ui/Container";
import PageWrapper from "@/components/ui/PageWrapper";
import { NotesScribble } from "../../../components/ui/AppleEffect";
export default async function NotesPage() {
  const posts = getAllContentMeta("notes");

  return (
    <PageWrapper>
      <Container className="mt-[14dvh]">
        <h2 className="font-libre! text-center text-3xl">Notes</h2>
        <NotesScribble className={"absolute left-1/2 -translate-x-1/2"} />
        <div className="mt-12 flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/notes/${post.slug}`}
              className="flex cursor-pointer gap-1 rounded-2xl border-neutral-600 py-2 transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:px-2 md:gap-4 dark:bg-neutral-950 hover:dark:bg-neutral-900"
            >
              <div className="flex flex-2 flex-col justify-between gap-4 rounded-xl px-2 py-2 md:px-3 md:py-2">
                <div>
                  <h4 className="font-libre! text-md mb-1 text-neutral-800! md:text-lg dark:text-neutral-200!">
                    {post.title}
                  </h4>
                  <p className="text-xs md:text-base">{post.summary}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-mono text-sm">May 2025</p>
                  <div className="h-full w-1 border-r border-neutral-800"></div>
                  <div>
                    {post.tags.map((tag, i) => (
                      <span
                        key={`${tag}+${i}`}
                        className="rounded-lg bg-neutral-300 px-2 py-1 font-mono text-xs capitalize dark:bg-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
