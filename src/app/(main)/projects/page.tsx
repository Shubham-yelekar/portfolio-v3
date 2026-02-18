import PageWrapper from "@/components/ui/PageWrapper";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";

import { ProjectsScribble } from "../../../components/ui/AppleEffect";
import ProjectsFilter from "@/components/sections/ProjectsFilter";

const page = () => {
  const projects = getAllContentMeta("projects");

  const liveProjects = projects.filter((item) => item.status === "live");
  const uniqueTags = [
    ...new Set(liveProjects.flatMap((project) => Array.isArray(project.tags) ? project.tags : [])),
  ];

  return (
    <PageWrapper>
      <Container className="mt-[14dvh]">
        <h2 className="font-libre! text-center text-3xl">Projects</h2>
        <ProjectsScribble className={"absolute left-1/2 -translate-x-1/2"} />
        <ProjectsFilter uniqueTags={uniqueTags} liveProjects={liveProjects} />
      </Container>
    </PageWrapper>
  );
};

export default page;
