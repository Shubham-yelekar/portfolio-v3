import Container from "@/components/ui/Container";
import { FaGithubAlt, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import Computer from "../ui/Computer";

const SocialLinks = [
  {
    name: "twitter",
    url: "https://x.com/shubu_y",
    icon: FaXTwitter,
  },
  {
    name: "github",
    url: "https://github.com/Shubham-yelekar",
    icon: FaGithubAlt,
  },
  {
    name: "linked",
    url: "https://www.linkedin.com/in/shubhamyelekar/",
    icon: FaLinkedinIn,
  },
];

const Hero = () => {
  return (
    <Container
      text
      className="relative mt-[10dvh] flex flex-col justify-end gap-8 px-4 md:mt-[12dvh] md:gap-4"
    >
      <Computer />

      <div className="flex flex-col items-center justify-between gap-4">
        <div>
          <h1 className="text-heading text-lg md:text-xl">
            Hi, I'm{" "}
            <span className="cursor-pointer rounded-md bg-orange-400/20 px-1 py-px transition-colors duration-100 hover:bg-orange-300 dark:bg-orange-400/20 hover:dark:bg-orange-400">
              Shubham Yelekar
            </span>
          </h1>
          <h1 className="text-heading text-lg md:text-xl">
            Front-end{" "}
            <span className="cursor-pointer rounded-md bg-blue-400/20 px-1 py-px transition-colors duration-100 hover:bg-blue-300 dark:bg-blue-400/20 hover:dark:bg-blue-400">
              Developer
            </span>{" "}
            driven by motion and UX, blending modern technologies with a strong{" "}
            <span className="cursor-pointer rounded-md bg-green-400/20 px-1 py-px transition-colors duration-100 hover:bg-green-300 dark:bg-green-400/20 hover:dark:bg-green-400">
              Design
            </span>{" "}
            foundation.
          </h1>
        </div>
        <div>
          <p className="text-body">
            I currently work at Artificial Realit, designing and developing
            interfaces for 3D configurators, landing pages, and web
            applications.
          </p>
          <p className="text-body">
            Exploring motion, 3D, and emerging web technologies to create more
            engaging digital experiences.
          </p>
        </div>

        <div className="flex w-full gap-2">
          {SocialLinks.map((item, i) => (
            <a
              className="grid items-center justify-center rounded-xl bg-neutral-100 p-3 text-[var(--body)] transition-colors duration-150 ease-out hover:bg-neutral-200 hover:text-[var(--heading)] dark:bg-neutral-900 hover:dark:bg-neutral-800"
              key={`${item.name}-${i}`}
              href={item.url}
              target="_blank"
            >
              <item.icon className=" " size={16} />
            </a>
          ))}
          <a
            className="flex items-center justify-center gap-2 rounded-xl bg-neutral-100 p-3 text-xs text-[var(--body)] transition-colors duration-150 ease-out hover:bg-neutral-200 hover:text-[var(--heading)] dark:bg-neutral-900 hover:dark:bg-neutral-800"
            href={
              "https://drive.google.com/file/d/1nbV481gyES90t67mM-D4F-gPh5fmCsBu/view?usp=sharing"
            }
            target="_blank"
          >
            <PiReadCvLogoFill size={16} />
            Resume
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
