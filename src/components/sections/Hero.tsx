import React from "react";
import Container from "@/components/ui/Container";
import WavingFlag from "@/components/ui/WavingFlag";
import Button from "@/components/ui/Button";

import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";

import Link from "next/link";
const Hero = () => {
  return (
    <Container className="mt-[30vh] flex flex-col gap-6 md:mt-[24vh] md:gap-9">
      <WavingFlag />
      <div>
        <div className="card-shadow w-14 overflow-clip rounded-2xl border-4 border-white md:w-20 md:rounded-3xl">
          <img className="w-fit" src="/pictures/cat.jpg" alt="me" />
        </div>
      </div>
      <div>
        <h1 className="text-heading font-sans text-4xl tracking-tight md:text-5xl">
          Hi, I’m
          <span className=""> Shubham</span>,
        </h1>
        <h1 className="font-sans text-4xl tracking-tight md:text-5xl">
          A Front-end{" "}
          <span className="font-libre text-neutral-500 italic">Developer</span>
        </h1>
        <h1 className="font-sans text-4xl tracking-tight md:text-5xl">
          <span className="font-libre text-neutral-500 italic">
            & Designer,
          </span>{" "}
          based in Mumbai.
        </h1>
      </div>
      <div>
        <div className="flex gap-3">
          <Link href={"https://x.com/shubu_y"} target="_blank">
            <Button variant={"primary"}>
              <BsTwitterX />
              <span className="w-full">Twitter/X</span>
            </Button>
          </Link>
          <Link href={"https://github.com/Shubham-yelekar"} target="_blank">
            <Button variant={"primary"}>
              <BsGithub />
              <span className="w-full">Github</span>
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/shubhamyelekar/"}
            target="_blank"
          >
            <Button variant={"primary"}>
              <BsLinkedin />
              <span className="w-full">Linkedin</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-paragraph text-sm md:text-base">
          Specializing in creating user-friendly and visually compelling
          interfaces that bridge the gap between design and code.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
