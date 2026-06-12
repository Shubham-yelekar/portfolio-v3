import Container from "@/components/ui/Container";
import { FaGithubAlt, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
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
    <Container className="relative mt-[18dvh] flex flex-col justify-end gap-4 md:mt-[16dvh] md:gap-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <Computer />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-neutral-900 dark:text-neutral-100">
            Hi, I'm{" "}
            <span className="hover:bg-accent cursor-pointer rounded-md bg-neutral-100 px-1 py-px dark:bg-neutral-800 dark:hover:bg-orange-500">
              Shubham Yelekar
            </span>
          </h1>
          <h1 className="text-heading text-2xl">
            I design and develope interfaces for the web.
          </h1>
        </div>
        {/* <div className="flex gap-2">
          {SocialLinks.map((item, i) => (
            <a
              className="grid items-center justify-center rounded-xl bg-neutral-100 p-3 transition-colors duration-150 ease-out hover:bg-neutral-200 dark:hover:bg-neutral-800"
              key={`${item.name}-${i}`}
              href={item.url}
              target="_blank"
            >
              <item.icon size={16} />
            </a>
          ))}
        </div> */}
      </div>
      <div>
        <p className="text-body text-body">
          Drawn to the edges where disciplines collide and new things get made.
        </p>

        <p className="text-body text-body">
          I deploy Cursor ↗ at some of the world's fastest-moving companies.
          Writing on craft, clarity, and what separates good from great.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
