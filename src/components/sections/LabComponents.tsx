import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const LabComponents = () => {
  return (
    <Container className="flex flex-col gap-6 md:gap-9">
      <h2 className="text-paragraph! font-libre! px-2 text-center text-2xl md:px-4">
        Laboratory
      </h2>
      <div className="mx-2 grid grid-cols-2 gap-2 md:mx-0 md:gap-4">
        <div className="relative">
          <div className="aspect-square overflow-clip rounded-2xl md:aspect-7/6">
            <Image
              src={"/pictures/comp-1.jpg"}
              width={900}
              height={900}
              alt="thumb"
              className="h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 left-2 rounded-xl bg-neutral-900/20 backdrop-blur-lg">
            <h4 className="px-2 py-1 text-sm text-neutral-100! md:px-3 md:py-1 md:text-lg">
              Component
            </h4>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-7/6 overflow-clip rounded-2xl">
            <Image
              src={"/pictures/comp-2.jpg"}
              width={900}
              height={600}
              alt="thumb"
              className="h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 left-2 rounded-lg border border-neutral-200/10 bg-neutral-900/20 backdrop-blur-sm">
            <h4 className="px-2 py-1 text-sm text-neutral-100! md:px-3 md:py-1 md:text-lg">
              Component
            </h4>
          </div>
        </div>
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
