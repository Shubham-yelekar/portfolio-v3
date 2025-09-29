import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const projects = getAllContentMeta("projects");
  return (
    <PageWrapper>
      <Container className="mt-[14vh] px-4">
        <h2 className="text-center text-3xl font-bold">Works & Projects</h2>

        <div className="mt-12 grid grid-cols-2 gap-8">
          {projects.map((project) => (
            // This would be your <ArticleCard /> component
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="flex h-80 flex-col gap-8 bg-amber-200"
            >
              {/* <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {project.summary}
              </p> */}
              <Image
                src={project.thumbImage}
                width={400}
                height={180}
                className="w-full rounded-xl object-cover shadow-[var(--card-shadow-2)] hover:shadow-[var(--card-shadow]"
                alt={`${project.slug}-image`}
              />
            </Link>
          ))}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default page;
