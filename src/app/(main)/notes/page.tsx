import Link from "next/link";
import { getAllContentMeta } from "@/lib/mdx";
import Container from "@/components/ui/Container";
import PageWrapper from "@/components/ui/PageWrapper";
import { NotesScribble } from "../../../components/ui/AppleEffect";
import NotesFilter from "@/components/sections/NotesFilter";
export default async function NotesPage() {
  const posts = getAllContentMeta("notes");
  const livePosts = posts.filter((post) => post.status === "live");
  const uniqueTags = [...new Set(livePosts.flatMap((posts) => posts.tags))];

  return (
    <PageWrapper>
      <Container className="mt-[14dvh] px-2 md:px-4">
        <h2 className="font-libre! text-center text-3xl">Notes</h2>
        <NotesScribble className={"absolute left-1/2 -translate-x-1/2"} />
        <NotesFilter notes={livePosts} uniqueTags={uniqueTags} />
      </Container>
    </PageWrapper>
  );
}
