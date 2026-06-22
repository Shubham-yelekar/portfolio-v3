import NotesFilter from "@/components/sections/NotesFilter";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import { NotesScribble } from "../../../components/ui/AppleEffect";
import * as FadeIn from "@/app/lib/fade";
export default async function NotesPage() {
  const posts = getAllContentMeta("notes");
  const livePosts = posts
    .filter((post) => post.status === "live")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const uniqueTags = [...new Set(livePosts.flatMap((posts) => posts.tags))];

  return (
    <Container className="mt-[14dvh] px-2 md:px-4">
      <FadeIn.Container>
        <FadeIn.Item>
          <h2 className="text-heading text-center text-lg md:text-xl">Notes</h2>
        </FadeIn.Item>
        <FadeIn.Item>
          <NotesScribble className={"absolute left-1/2 -translate-x-1/2"} />
        </FadeIn.Item>
        <FadeIn.Item>
          <NotesFilter notes={livePosts} uniqueTags={uniqueTags} />
        </FadeIn.Item>
      </FadeIn.Container>
    </Container>
  );
}
