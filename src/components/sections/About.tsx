import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";
import Button from "../ui/Button";

const design = [
  {
    name: "Figma",
    logo: "/various/figma-logo.png",
    desc: "Design & Prototyiping",
  },
  {
    name: "Spline",
    logo: "/various/spline-logo.png",
    desc: "3d Editor",
  },
  {
    name: "Blender",
    logo: "/various/blender.png",
    desc: "3d Design Tool",
  },
  {
    name: "Illustrator",
    logo: "/various/ai-logo.png",
    desc: "Vector Design Tool",
  },
  {
    name: "Photoshop",
    logo: "/various/ps-logo.png",
    desc: "Image Editor",
  },
];

const webDev = [
  {
    name: "JavaScript",
    logo: "/various/js-logo.png",
    desc: "Languages of the web",
  },
  {
    name: "TypeScript",
    logo: "/various/typescript.png",
    desc: "Stricter JavaScript",
  },
  {
    name: "ReactJS",
    logo: "/various/react-logo.png",
    desc: "A JavaScript Library",
  },
  {
    name: "Tailwind & SASS",
    logo: "/various/tailwind-logo.png",
    desc: "CSS Frameworks",
  },
  {
    name: "NextJS",
    logo: "/various/next-logo.svg",
    desc: "React Framework",
  },
  {
    name: "Angular",
    logo: "/various/angular-logo.png",
    desc: "JavaScript Framework",
  },
  {
    name: "Redux",
    logo: "/various/redux-logo.png",
    desc: "State Managment",
  },
  {
    name: "Three.js",
    logo: "/various/threejs.png",
    desc: "3d Javascript Library",
  },
  {
    name: "Git & GitHub",
    logo: "/various/github-logo.png",
    desc: "Version Control",
  },
  {
    name: "Appwrite",
    logo: "/various/appwrite-logo.png",
    desc: "Backend tool",
  },
  {
    name: "Supabase",
    logo: "/various/supabase-logo.png",
    desc: "Backend tool",
  },
];

const About = () => {
  return (
    <Container className="flex flex-col gap-8">
      {/* <h2 className="text-paragraph! font-libre! px-2 text-center text-2xl italic md:px-4">
        Notes
      </h2> */}
      <div className="flex gap-3">
        <div className="flex flex-2 flex-col gap-3">
          <p>
            Hey, I’m{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              Shubham Yelekar,
            </span>
          </p>
          <p>
            <span className="text-neutral-900 dark:text-neutral-100">
              Front-end engineer
            </span>{" "}
            who enjoys designing and coding. I focus on creating easy-to-use and
            visually pleasing interfaces.
          </p>

          <p>
            I like using tools like React.js, Next.js, and Figma to bring ideas
            to life.
          </p>
        </div>
        <div className="relative flex flex-1 items-center justify-center overflow-clip rounded-2xl bg-neutral-50 dark:bg-neutral-900">
          <Image src={"/pictures/cat.jpg"} width={300} height={300} alt="cat" />
          <div className="absolute bottom-2 flex gap-2">
            <Link href={"/"} target="_blank">
              <Button
                variant={"primary"}
                className="border border-zinc-200 bg-gradient-to-t from-zinc-700 to-zinc-950 dark:border-zinc-700 dark:from-zinc-700 dark:to-zinc-800"
              >
                <IoMail size={20} />
                <span className="w-full">Email</span>
              </Button>
            </Link>
            <Link href={"/"} target="_blank">
              <Button
                variant={"primary"}
                className="border border-purple-200 bg-gradient-to-t from-purple-400 to-purple-600 dark:border-purple-700 dark:from-purple-700 dark:to-purple-800"
              >
                <PiReadCvLogoFill size={20} />
                <span className="w-full">Resume</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <h6 className="font-libre! text-paragraph! text-xl">Tool set</h6>
        <div className="">
          <div className="mt-8 grid grid-cols-3 gap-4">
            {webDev.map((box, index) => (
              <div
                key={index}
                className="pointer-none flex flex-1 cursor-crosshair gap-4 rounded-xl p-2 transition-all ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                <div className="w-8">
                  <img src={box.logo} alt="" />
                </div>
                <div>
                  <h6 className="md:text text-sm">{box.name}</h6>
                  <p className="md:text-xm text-xs">{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {design.map((box, index) => (
            <div
              key={index}
              className="pointer-none flex flex-1 cursor-crosshair gap-4 rounded-xl p-2 transition-all ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <div className="w-8">
                <img src={box.logo} alt="" />
              </div>
              <div>
                <h6 className="text-sm md:text-base">{box.name}</h6>
                <p className="md:text-xm text-xs">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const TechIcons = ({ item }: any) => {
  return <div>{item}</div>;
};

export default About;
