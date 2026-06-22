import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";

import ProjectsFilter from "@/components/sections/ProjectsFilter";
import { ProjectsScribble } from "../../../components/ui/AppleEffect";
import * as FadeIn from "@/app/lib/fade";

const page = () => {
  const projects = getAllContentMeta("projects");

  const liveProjects = projects.filter((item) => item.status === "live");
  const uniqueTags = [
    ...new Set(
      liveProjects.flatMap((project) =>
        Array.isArray(project.tags) ? project.tags : [],
      ),
    ),
  ];

  return (
    <Container className="mt-[14dvh]">
      <FadeIn.Container>
        <FadeIn.Item>
          <h2 className="text-heading text-center text-lg md:text-xl">
            Projects
          </h2>
        </FadeIn.Item>
        <FadeIn.Item>
          <ProjectsScribble className={"absolute left-1/2 -translate-x-1/2"} />
        </FadeIn.Item>
        <FadeIn.Item>
          <ProjectsFilter uniqueTags={uniqueTags} liveProjects={liveProjects} />
        </FadeIn.Item>
      </FadeIn.Container>
    </Container>
  );
};

export default page;
