import Container from "@/components/ui/Container";
import { FaGithubAlt, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Computer from "../ui/Computer";

const Hero = () => {
  return (
    <Container className="relative mt-[18dvh] flex flex-col justify-end gap-6 md:mt-[16dvh] md:gap-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <Computer />
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="heading-2 text-heading">Shubham Yelekar</h1>
          <p className="body-1 text-paragraph">
            Frontend Developer @ Artificial Reality
          </p>
        </div>
        <div className="flex gap-4">
          <FaLinkedinIn />
          <FaGithubAlt />
          <FaXTwitter />
        </div>
      </div>
      {/* <div className="text-subheading body-1 flex w-full justify-center gap-8 select-none">
        <Link
          href="https://x.com/shubu_y"
          target="_blank"
          className="group relative inline-block overflow-hidden"
        >
          <span className="absolute inset-x-0 bottom-0 -z-5 h-0.5 bg-neutral-200 dark:bg-neutral-800" />
          <span className="absolute inset-x-0 bottom-0 -z-1 h-0.5 origin-left scale-x-0 bg-neutral-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />

          <span className="text-paragraph">X/Twitter</span>
        </Link>
        •
        <Link
          href={"https://github.com/Shubham-yelekar"}
          target="_blank"
          className="group relative inline-block overflow-hidden"
        >
          <span className="absolute inset-x-0 bottom-0 -z-5 h-0.5 bg-neutral-200 dark:bg-neutral-800" />
          <span className="absolute inset-x-0 bottom-0 -z-1 h-0.5 origin-left scale-x-0 bg-neutral-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />

          <span className="text-paragraph">GitHub</span>
        </Link>
        •
        <Link
          href={"https://www.linkedin.com/in/shubhamyelekar/"}
          target="_blank"
          className="group relative inline-block overflow-hidden"
        >
          <span className="absolute inset-x-0 bottom-0 -z-5 h-0.5 bg-neutral-200 dark:bg-neutral-800" />
          <span className="absolute inset-x-0 bottom-0 -z-1 h-0.5 origin-left scale-x-0 bg-neutral-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />

          <span className="text-paragraph">LinkedIn</span>
        </Link>
      </div> */}
      {/* <div className="flex flex-col gap-4">
        <h2 className="text-subheading body-1">
          Based in Mumbai India I love to build fluid, engaging interfaces ,
          animations or 3D elements, to create memorable and delightful
          experiences for the end-user.
        </h2>
        <h2 className="text-subheading body-1">
          I'm currently working at <strong>Artificial Reality</strong> as{" "}
          <strong>Frontend Developer and UI Designer</strong> , building and
          designing interfaces for 3D car configurators, landing pages and
          various web apps.
        </h2>
      </div> */}
    </Container>
  );
};

export default Hero;
