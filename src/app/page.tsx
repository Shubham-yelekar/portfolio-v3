import Container from "./components/Container";
import WavingFlag from "./components/WavingFlag";
import BlankDiv from "./components/BlankDiv";
import Button from "./components/Button";

import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-start justify-start">
      <WavingFlag />
      <Container className="mt-[16vh] flex flex-col gap-6 p-3 md:mt-[18vh] md:gap-9 md:p-4">
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
          <div>
            <Button variant={"primary"}>
              <BsTwitterX />
              <span className="w-full">Twitter </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-paragraph text-sm md:text-base">
            Specializing in creating user-friendly and visually compelling
            interfaces.
          </p>
          <p className="text-paragraph text-sm md:text-base">
            My work centers on delivering a seamless user experience, and I
            currently build professional applications at Artificial Reality. I
            love using React.js, Next.js, and Figma to bridge the gap between
            design and code.
          </p>
          <p className="text-paragraph text-sm md:text-base">
            I'm currently exploring the possibilities of Three.js and expanding
            my front-end expertise to build immersive and engaging experiences
            for the modern web.
          </p>
          <p className="text-paragraph font-libre text-sm md:text-base">...</p>
        </div>
        <BlankDiv />
      </Container>
    </div>
  );
}
