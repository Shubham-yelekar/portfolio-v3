import Container from "@/components/ui/Container";
import WavingFlag from "../ui/WavingFlag";

const Hero = () => {
  return (
    <Container className="relative mt-[30dvh] flex flex-col justify-end gap-4 md:mt-[24dvh] md:gap-6">
      <div className="relative h-16 w-16 overflow-hidden rounded-lg md:rounded-2xl">
        <WavingFlag />
      </div>
      <div className="flex flex-col items-center md:flex-row md:gap-8">
        {/* <MumbaiSvg className="h-fit w-10 rounded-lg shadow-[var(--card-shadow)] md:w-16 md:rounded-xl" /> */}
        <div className="item-center flex flex-col justify-center">
          <h1 className="heading-1 text-heading">Shubham Yelekar, </h1>
          <h2 className="heading-2 text-subheading">
            Crafting Beautiful Interfaces
          </h2>
          <h1 className="heading-2 text-subheading">
            from <span className="text-orange-500">Design</span> ⇛{" "}
            <span className="text-purple-500">Code</span>
          </h1>
        </div>
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
        <h1 className="heading-1 text-heading">Shubham Yelekar, </h1>
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
