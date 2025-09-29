import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const page = () => {
  const projects = getAllContentMeta("projects");
  return (
    <PageWrapper>
      <Container className="mt-[14vh] px-4">
        <h2 className="text-center text-3xl font-bold">Works & Projects</h2>

        <div className="mt-12 flex flex-col justify-center gap-32">
          {projects.map((project) => (
            <div key={project.slug} className="relative flex flex-col">
              <div className="">
                <Image
                  src={project.thumbImage}
                  width={400}
                  height={200}
                  className="w-full rounded-xl object-cover shadow-[var(--card-shadow-2)] hover:shadow-[var(--card-shadow]"
                  alt={`${project.slug}-image`}
                />
              </div>
              <div className="flex justify-between rounded-xl p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-libre text-2xl">{project.title}</h3>
                  <p className="">{project.summary}</p>
                </div>
                <div>
                  <Link href={project.slug}>
                    <Button variant={"secondary"}>Button</Button>
                  </Link>
                </div>
              </div>
            </div>
            // <Link
            //   key={project.slug}
            //   href={`/projects/${project.slug}`}
            //   className="flex flex-col gap-8 bg-amber-200"
            // >
            //   <h2 className="text-2xl font-semibold">{project.title}</h2>
            //   <p className="mt-1 text-gray-600 dark:text-gray-400">
            //     {project.summary}
            //   </p>

            //   <div>

            //   </div>
            // </Link>
          ))}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default page;
