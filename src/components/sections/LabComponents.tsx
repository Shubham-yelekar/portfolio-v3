import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { getAllContentMeta } from "@/lib/mdx";

const LabComponents = () => {
  const lab = getAllContentMeta("lab");
  return (
    <Container className="flex flex-col gap-6 md:gap-9">
      <h2 className="font-libre! px-2 text-center text-2xl md:px-4">
        Laboratory
      </h2>
      <div className="mt-4 grid grid-cols-2 justify-center gap-4 px-2 md:mt-12 md:px-4">
        {lab.map((item) => (
          <Link href={`/lab/${item.slug}`} key={item.slug} className="relative">
            <div className="aspect-7/6 overflow-clip rounded-2xl">
              {item.thumbVideo === "" ? (
                <Image
                  src={item.thumbImage}
                  width={900}
                  height={600}
                  className="h-full object-cover"
                  alt={`${item.slug}-image`}
                />
              ) : (
                <video
                  width="900"
                  height="600"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="none"
                  className="h-full object-cover"
                >
                  <source src={item.thumbVideo} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="absolute bottom-2 left-2 rounded-lg border border-neutral-200/10 bg-neutral-900/40 backdrop-blur-sm">
              <h4 className="px-2 py-1 text-sm text-neutral-100! md:px-3 md:py-1 md:text-lg">
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/projects">
        <Button className="mx-auto mt-4 w-40" variant={"tertiary"}>
          More Components
        </Button>
      </Link>
    </Container>
  );
};

export default LabComponents;
