import NotesFilter from "@/components/sections/NotesFilter";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import { NotesScribble } from "../../../components/ui/AppleEffect";
export default async function NotesPage() {
  const posts = getAllContentMeta("notes");
  const livePosts = posts
    .filter((post) => post.status === "live")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const uniqueTags = [...new Set(livePosts.flatMap((posts) => posts.tags))];

  return (
    <Container className="mt-[14dvh] px-2 md:px-4">
      <h2 className="text-center text-3xl">Notes</h2>
      <NotesScribble className={"absolute left-1/2 -translate-x-1/2"} />
      <NotesFilter notes={livePosts} uniqueTags={uniqueTags} />
    </Container>
  );
}
