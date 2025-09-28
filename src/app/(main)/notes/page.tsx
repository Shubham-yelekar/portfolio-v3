import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";
import Container from "@/components/ui/Container";

export default async function NotesPage() {
  const posts = getAllPostsMeta();

  return (
    <Container className="mt-[14vh] px-4">
      <h1 className="mb-8 text-4xl font-bold">Writings</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          // This would be your <ArticleCard /> component
          <Link
            key={post.slug}
            href={`/notes/${post.slug}`}
            className="block rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {post.summary}
            </p>
            <time className="mt-2 block text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </Link>
        ))}
      </div>
    </Container>
  );
}
