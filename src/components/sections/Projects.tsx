"use client";
import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const Projects = () => {
  return (
    <Container className="flex flex-col gap-6 md:gap-12">
      <h2 className="font-libre! px-2 text-center text-2xl md:px-4">
        Selected Projects
      </h2>

      <div className="flex flex-col gap-24 px-2">
        <div className="relative flex flex-col gap-4 md:gap-6">
          <div className="aspect-5/3 overflow-clip rounded-2xl">
            <video
              width="900"
              height="600"
              autoPlay
              muted
              playsInline
              loop
              preload="none"
              className="h-full object-cover"
            >
              <source src="/archives/lc-300/lc300.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-start flex flex-col gap-2 px-2 md:flex-row md:px-4">
            <div className="flex-1">
              <h3 className="bold font-libre! mb-2 text-xl md:text-2xl">
                Toyota Land Cruiser 300
              </h3>
              <h5 className="text-sm text-neutral-800! md:text-lg dark:text-neutral-500!">
                Product Page Redesign
              </h5>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-paragraph text-sm md:text-base">
                I led the redesign and development for the Land Cruiser 300
                product page.
              </p>
              <Link href="/projects/toyota-lc300">
                <Button className="w-fit" variant={"secondary"}>
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-4 md:gap-6">
          <div className="aspect-5/3 overflow-clip rounded-2xl">
            {/* <Image
              src="https://ucarecdn.com/afbaf1fd-c28a-4488-b7f4-cfcc3c5e4a77/-/preview/1000x666/"
              width={900}
              height={600}
              alt="thumb"
              className="h-full object-cover"
            /> */}
            <video
              width="900"
              height="600"
              autoPlay
              muted
              playsInline
              loop
              preload="none"
              className="h-full object-cover"
            >
              <source src="/archives/taisor/taisor.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-start flex flex-col gap-2 px-2 md:flex-row md:px-4">
            <div className="flex-1">
              <h4 className="bold font-libre! text-xl md:text-2xl">
                Toyota Taisor Landing page
              </h4>
              <h5 className="text-md text-neutral-800! md:text-lg dark:text-neutral-500!">
                Product Page Redesign
              </h5>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-paragraph text-sm md:text-base">
                Experimented with various designs and interactions using GSAP
                and clip masks
              </p>
              <Link href="/projects/toyota-taisor">
                <Button className="w-fit" variant={"secondary"}>
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-4 md:gap-6">
          <div className="aspect-5/3 overflow-clip rounded-2xl">
            <video
              width="900"
              height="600"
              autoPlay
              muted
              playsInline
              loop
              preload="none"
              className="h-full object-cover"
            >
              <source
                src="/archives/christmass-2025/christmass-challenge.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="flex-start flex flex-col gap-2 px-2 md:flex-row md:px-4">
            <div className="flex-1">
              <h3 className="bold font-libre! mb-2 text-xl md:text-2xl">
                Cozy Christmass Diorama
              </h3>
              <h5 className="text-sm text-neutral-800! md:text-lg dark:text-neutral-500!">
                Personal / Challenge
              </h5>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-paragraph text-sm md:text-base">
                Parcticipated in Christmass challenge in{" "}
                <strong>Threejs Journey</strong> hosted by{" "}
                <strong>Bruno Simon</strong>.
              </p>
              <Link
                target="_blank"
                href="https://christmass-challenge-2025.netlify.app/"
              >
                <Button className="w-fit" variant={"secondary"}>
                  Visit Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link href="/projects">
        <Button className="mx-auto mt-4 w-40" variant={"tertiary"}>
          All Projects
        </Button>
      </Link>
    </Container>
  );
};

export default Projects;
