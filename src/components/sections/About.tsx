import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMail, IoLocation, IoBriefcase } from "react-icons/io5";
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
    <Container className="flex flex-col gap-16 px-4 md:px-4">
      {/* after:absolute after:left-0 after:-z-10 after:h-full after:w-full after:bg-neutral-800 after:content-[''] md:px-4" */}
      <div className="absolute -z-2">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
        />
        {/* Your Content/Components */}
      </div>
      {/* <h2 className="text-paragraph! font-libre! px-2 text-center text-2xl italic md:px-4">
        Notes
      </h2> */}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <div className="flex max-w-24 flex-1 items-center justify-center overflow-clip rounded-2xl border-4 border-neutral-50 bg-neutral-50 shadow-[var(--card-shadow)] md:max-w-32 dark:bg-neutral-900">
            <Image
              src={"/pictures/cat.jpg"}
              width={300}
              height={300}
              alt="cat"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-libre! text-2xl font-light tracking-tight md:text-3xl">
              Shubham Yelekar
            </h3>
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-neutral-50 p-2 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-50">
                <IoLocation />
              </div>
              <p>Mumbai</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-neutral-50 p-2 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-50">
                <IoBriefcase />
              </div>
              <p>
                Currently working at{" "}
                <Link
                  href={"https://www.artificialreality.in/"}
                  target="_blank"
                  className="text-neutral-900 underline dark:text-neutral-50"
                >
                  Artificial Reality
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-2 flex-col gap-3">
          {/* <p>
            Hey, I’m{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              Shubham Yelekar,
            </span>
          </p> */}
          <p>
            I specializing in building user-friendly and visually compelling web
            experiences. With two years of professional experience, my work is
            centered on bridging the gap between design and code.
          </p>

          <p>
            I translate high-fidelity designs from Figma into performant,
            component-based applications using React and Next.js. I'm currently
            expanding my skill set into creative technologies like Three.js and
            GLSL to build more immersive and engaging interfaces for the modern
            web. I thrive on delivering clean code, intuitive UI, and a seamless
            user experience from start to finish.
          </p>
        </div>
        <div className="flex gap-2">
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
      <div>
        <h6 className="font-libre! text-2xl">Experience</h6>
        <div className="mt-8">
          <div className="">
            <div className="flex justify-between gap-2">
              <div className="flex">
                <h3 className="text-xl">Frontend Developer</h3>
              </div>
              <Link href="/notes/artificial-reality">
                <Button>Read More</Button>
              </Link>
            </div>
            <h3 className="font-libre! text-paragraph! text-lg">
              @ Artificial Reality - May 2023 to Present
            </h3>
            <div className="group relative mt-4 h-auto w-full transition-all duration-500 ease-in-out sm:h-36">
              <div className="absolute top-0 left-0 z-30 aspect-7/5 w-36 overflow-hidden rounded-xl border-2 border-white shadow-2xl transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 dark:border-neutral-500">
                <Image
                  src={"/pictures/cat-3.jpg"}
                  width={180}
                  height={180}
                  alt="cat"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-2 left-4 z-20 aspect-7/5 w-36 rotate-[4deg] overflow-hidden rounded-xl border-2 border-white shadow-2xl transition-all duration-500 group-hover:top-0 group-hover:left-[150px] group-hover:rotate-0 dark:border-neutral-500">
                <Image
                  src={"/pictures/cat-4.jpg"}
                  width={180}
                  height={180}
                  alt="cat"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-3 left-10 z-10 aspect-7/5 w-36 rotate-[6deg] overflow-hidden rounded-xl border-2 border-white shadow-2xl transition-all duration-500 group-hover:top-0 group-hover:left-[300px] group-hover:rotate-0 dark:border-neutral-500">
                <Image
                  src={"/pictures/cat-5.jpg"}
                  width={180}
                  height={180}
                  alt="cat"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-3 left-10 z-5 aspect-7/5 w-36 rotate-[6deg] overflow-hidden rounded-xl border-2 border-white shadow-2xl transition-all duration-500 group-hover:top-0 group-hover:left-[450px] group-hover:rotate-0 dark:border-neutral-500">
                <Image
                  src={"/pictures/cat-6.jpg"}
                  width={180}
                  height={180}
                  alt="cat"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h6 className="font-libre! text-2xl">Developer Tool Set</h6>
        <div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
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
        <h6 className="font-libre! text-paragraph! mt-8 text-2xl">
          Designer Tool Set
        </h6>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
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
