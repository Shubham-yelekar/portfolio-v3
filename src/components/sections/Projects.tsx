import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import * as FadeIn from "@/app/lib/fade";
import { FaD } from "react-icons/fa6";
const ProjectsList = [
  {
    id: 1,
    slug: "toyota-lc300",
    video: "/archives/lc-300/lc300.mp4",
    title: "Toyota LC 300",
    subheading: "Redesign of landing page & development",
  },
  {
    id: 2,
    slug: "toyota-taisor",
    video: "/archives/taisor/taisor.mp4",
    title: "Toyota Taisor",
    subheading: "Design & development",
  },
];

const cardVariants = {
  initial: {},
  hover: {},
};

const mediaVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section className="flex flex-col items-center gap-8 px-4 md:gap-12">
      <div className="flex w-full max-w-xl justify-between gap-4 px-0 md:px-4">
        <h2 className="text-lg md:text-xl">Projects</h2>

        <Link
          href="/projects"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-100 p-3 text-sm text-[var(--body)] transition-colors duration-150 ease-out select-none hover:bg-neutral-200 hover:text-[var(--heading)] active:scale-[0.97] dark:bg-neutral-900 hover:dark:bg-neutral-800"
        >
          All Projects <GoArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {ProjectsList.map((item, i) => (
          <Link
            href={`/projects/${item.slug}`}
            key={`${item.slug}-${i}`}
            className="group relative mb-8 flex max-w-2xl flex-col items-center gap-4 md:gap-6"
          >
            <div className="aspect-6/4 scale-100 transform overflow-clip rounded-2xl transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-xl">
              <video
                width="600"
                height="600"
                autoPlay
                muted
                playsInline
                loop
                preload="none"
                className="h-full object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="flex-start flex w-full max-w-xl flex-col gap-4 px-4 md:flex-row md:px-4">
              <div className="flex-1">
                <h3 className="text-heading text-md md:text-lg">
                  {item.title}
                </h3>
                <p className="text-body text-body text-sm md:text-base">
                  {item.subheading}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
