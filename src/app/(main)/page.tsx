import Container from "@/components/ui/Container";
import WavingFlag from "@/components/ui/WavingFlag";
import BlankDiv from "@/components/ui/BlankDiv";
import Button from "@/components/ui/Button";

import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";

import Link from "next/link";
import Breaker from "@/components/ui/Breaker";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-start justify-start">
      <WavingFlag />
      <Container className="mt-[16vh] flex flex-col gap-6 p-3 md:mt-[24vh] md:gap-9 md:p-4">
        <div>
          <div className="card-shadow w-18 overflow-clip rounded-2xl border-4 border-white md:w-20 md:rounded-3xl">
            <img className="w-fit" src="/pictures/cat.jpg" alt="me" />
          </div>
        </div>
        <div>
          <h1 className="text-heading font-sans text-3xl tracking-tight md:text-4xl">
            Hi, I’m
            <span className=""> Shubham</span>,
          </h1>
          <h1 className="font-sans text-3xl tracking-tight md:text-4xl">
            A Front-end <span className="text-heading">Developer</span>
          </h1>
          <h1 className="font-sans text-3xl tracking-tight md:text-4xl">
            <span className="">& Designer,</span> based in Mumbai.
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
        {/* <Breaker /> */}
        <BlankDiv />
      </Container>
    </div>
  );
}
