"use client";
import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { pageAnimation } from "@/app/lib/pageAnimation";

const Projects = () => {
  const router = useTransitionRouter();
  return (
    <Container className="flex flex-col gap-6 md:gap-12">
      <h2 className="text-paragraph! font-libre! px-2 text-center text-2xl md:px-4">
        Selected Projects
      </h2>
      <div className="flex flex-col gap-24">
        <div className="relative flex flex-col gap-4 md:gap-6">
          <div className="aspect-5/3 overflow-clip rounded-2xl">
            <Image
              src="https://ucarecdn.com/6bf9581e-ca0e-4bdb-9369-fe6759cb85db/-/preview/1000x666/"
              width={900}
              height={600}
              alt="thumb"
              className="h-full object-cover"
            />
          </div>
          <div className="flex-start flex flex-col gap-2 px-2 md:flex-row md:px-4">
            <div className="flex-1">
              <h4 className="bold font-libre! text-lg md:text-2xl">
                Toyota Land Cruiser 300
              </h4>
              <h4 className="text-md text-neutral-800! md:text-lg dark:text-neutral-500!">
                Product Page Redesign
              </h4>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-paragraph text-sm md:text-base">
                I led the redesign and development for the Toyota Land Cruiser
                300 product page at <strong>Artificial Reality.</strong>
              </p>
              <Link
                href="/projects/toyota-lc300"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/projects/toyota-lc300", {
                    onTransitionReady: pageAnimation,
                  });
                }}
              >
                <Button className="mt-4 w-fit" variant={"secondary"}>
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 md:gap-6">
          <div className="aspect-5/3 overflow-clip rounded-2xl">
            <Image
              src="https://ucarecdn.com/afbaf1fd-c28a-4488-b7f4-cfcc3c5e4a77/-/preview/1000x666/"
              width={900}
              height={600}
              alt="thumb"
              className="h-full object-cover"
            />
          </div>
          <div className="flex-start flex flex-col gap-2 px-2 md:flex-row md:px-4">
            <div className="flex-1">
              <h4 className="bold font-libre! text-lg md:text-2xl">
                Toyota Taisor Landing page
              </h4>
              <h4 className="text-md text-neutral-800! md:text-lg dark:text-neutral-500!">
                Product Page Redesign
              </h4>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-paragraph text-sm md:text-base">
                Experimented with various designs and interactions using GSAP
                and clip masks<strong>Artificial Reality.</strong>
              </p>
              <Link
                href="/projects/toyota-taisor"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/projects/toyota-taisor", {
                    onTransitionReady: pageAnimation,
                  });
                }}
              >
                <Button className="mt-4 w-fit" variant={"secondary"}>
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/projects"
        onClick={(e) => {
          e.preventDefault();
          router.push("/projects", {
            onTransitionReady: pageAnimation,
          });
        }}
      >
        <Button className="mx-auto mt-4 w-40" variant={"tertiary"}>
          All Projects
        </Button>
      </Link>
    </Container>
  );
};

export default Projects;
