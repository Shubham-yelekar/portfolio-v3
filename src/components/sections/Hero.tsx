import Container from "@/components/ui/Container";
import Link from "next/link";
import Computer from "../ui/Computer";

const Hero = () => {
  return (
    <Container className="relative mt-[18dvh] flex flex-col justify-end gap-4 md:mt-[18dvh] md:gap-12">
      {/* <div className="flex flex-col items-center md:gap-8">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg md:rounded-2xl">
          <WavingFlag />
        </div>
        <div className="item-center flex flex-col justify-center gap-2">
          <h1 className="display text-center font-serif leading-6 text-neutral-900 dark:text-neutral-50">
            Shubham Yelekar
          </h1>
          <h2 className="body-1 text-subheading text-center leading-5">
            Developer / Designer
          </h2>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="display max-w-2xs text-center leading-14">
          Crafting Interfaces for the Web
        </h1>
        <Computer />
      </div>
      <div className="text-subheading body-1 flex w-full justify-center gap-8 select-none">
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
      </div>
      {/* <div>
        <div className="flex gap-2">
          <Link href={"https://x.com/shubu_y"} target="_blank">
            <Button
              className="border border-zinc-200 bg-gradient-to-t from-zinc-700 to-zinc-950 dark:border-zinc-700 dark:from-zinc-700 dark:to-zinc-800"
              variant={"primary"}
            >
              <BsTwitterX />
              <span className="w-full">Twitter/X</span>
            </Button>
          </Link>
          <Link href={"https://github.com/Shubham-yelekar"} target="_blank">
            <Button
              variant={"primary"}
              className="border border-indigo-200 bg-gradient-to-t from-indigo-400 to-indigo-800 dark:border-indigo-800 dark:from-indigo-700 dark:to-indigo-800"
            >
              <BsGithub />
              <span className="w-full">Github</span>
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/shubhamyelekar/"}
            target="_blank"
          >
            <Button
              variant={"primary"}
              className="border border-purple-200 bg-gradient-to-t from-purple-400 to-purple-600 dark:border-purple-700 dark:from-purple-700 dark:to-purple-800"
            >
              <BsLinkedin />
              <span className="w-full">Linkedin</span>
            </Button>
          </Link>
        </div>
      </div> */}
      <div className="flex flex-col gap-4">
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
      </div>
    </Container>
  );
};

export default Hero;
