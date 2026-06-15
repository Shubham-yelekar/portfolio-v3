import { getAllContentMeta } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { PiFlaskFill } from "react-icons/pi";

const LabComponents = () => {
  const lab = getAllContentMeta("lab")
    .filter((item) => item.status === "live")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="flex flex-col items-center gap-8 px-4 md:gap-12">
      <div className="flex w-full max-w-xl items-center justify-between px-4">
        <div className="flex items-center justify-center gap-4">
          <PiFlaskFill size={28} />

          <h2 className="text-lg md:text-xl">Lab</h2>
        </div>

        <Link
          href="/lab"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-100 p-3 text-sm text-[var(--body)] transition-colors duration-150 ease-out select-none hover:bg-neutral-200 hover:text-[var(--heading)] active:scale-[0.97] dark:bg-neutral-900 hover:dark:bg-neutral-800"
        >
          All Components <GoArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {lab.map((item) => (
          <Link
            href={`/lab/${item.slug}`}
            key={item.slug}
            className="group relative mb-8 flex max-w-2xl flex-col items-center gap-4 md:gap-6"
          >
            <div className="aspect-5/4 w-full scale-100 transform overflow-clip rounded-2xl transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-xl">
              {item.thumbVideo === "" ? (
                <Image
                  src={item.thumbImage}
                  width={900}
                  height={900}
                  className="absolute inset-0 h-full object-cover"
                  alt={`${item.slug}-image`}
                />
              ) : (
                <video
                  width="900"
                  height="900"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="none"
                  className="h-full w-full object-cover"
                >
                  <source src={item.thumbVideo} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="flex-start flex w-full max-w-xl flex-col gap-4 px-4 md:flex-row md:px-4">
              <div className="flex-1">
                <h3 className="text-heading md:text-md text-base">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LabComponents;
