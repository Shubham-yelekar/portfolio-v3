import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ProjectsScribble } from "../../../components/ui/AppleEffect";

const page = () => {
  const projects = getAllContentMeta("projects");
  const liveProjects = projects.filter((item) => item.status === "live");
  return (
    <PageWrapper>
      <Container className="mt-[14dvh]">
        <h2 className="font-libre! text-center text-3xl">Projects</h2>
        <ProjectsScribble className={"absolute left-1/2 -translate-x-1/2"} />
        <div className="mt-12 grid grid-cols-1 justify-center gap-4 p-2 md:grid-cols-2 md:p-4">
          {liveProjects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="cursor hover group relative flex flex-col rounded-2xl p-2 transition-all duration-500 ease-in-out hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              <div className="h-50 overflow-clip rounded-xl shadow-[var(--card-shadow-2)] hover:shadow-[var(--card-shadow]">
                <Image
                  src={project.thumbImage}
                  width={400}
                  height={200}
                  className="w-full scale-110 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                  alt={`${project.slug}-image`}
                />
              </div>
              <div className="flex flex-col justify-between gap-2 rounded-xl px-2 py-3">
                <h4 className="font-libre! text-xl">{project.title}</h4>
                <p className="text-sm">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default page;
