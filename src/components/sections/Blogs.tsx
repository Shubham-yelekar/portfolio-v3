import React from "react";
import Container from "../ui/Container";

import Image from "next/image";
import Button from "../ui/Button";
const Blogs = () => {
  return (
    <Container className="flex flex-col gap-6 md:gap-9">
      <h2 className="text-paragraph! font-libre! px-2 text-center text-2xl italic md:px-4">
        Notes
      </h2>
      <div className="mx-2 grid grid-cols-1 gap-2 md:mx-0 md:gap-4">
        <div className="flex cursor-pointer rounded-2xl border border-neutral-300 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-900 hover:dark:border-neutral-700">
          <div className="w-36 flex-1 overflow-clip rounded-xl">
            <Image
              src={"/pictures/thumb.jpg"}
              width={900}
              height={600}
              alt="thumb"
              className="h-full object-cover"
            />
          </div>
          <div className="flex flex-2 flex-col justify-between gap-4 rounded-xl px-2 py-2 md:px-3 md:py-2">
            <div>
              <h4 className="text-sm text-neutral-800! md:text-lg dark:text-neutral-200!">
                Manu Arora reviewed My Portfolio Website
              </h4>
              <p className="md:text-md text-sm">
                A heartfelt moment when the creator of Aceternity UI — Manu
                Arora, shared his thoughts on my portfolio website.
              </p>
            </div>
            <p className="font-libre text-sm">May 2025</p>
          </div>
        </div>
        <div className="hover:bg-border-50 flex cursor-pointer rounded-2xl border-neutral-200 bg-neutral-50 p-2 dark:bg-neutral-900">
          <div className="w-36 flex-1 overflow-clip rounded-xl">
            <Image
              src={"/pictures/thumb.jpg"}
              width={900}
              height={600}
              alt="thumb"
              className="h-full object-cover"
            />
          </div>
          <div className="flex flex-2 flex-col justify-between gap-4 rounded-xl px-2 py-2 md:px-3 md:py-2">
            <div>
              <h4 className="text-sm text-neutral-800! md:text-lg dark:text-neutral-200!">
                Manu Arora reviewed My Portfolio Website
              </h4>
              <p className="md:text-md text-sm">
                A heartfelt moment when the creator of Aceternity UI — Manu
                Arora, shared his thoughts on my portfolio website.
              </p>
            </div>
            <p className="font-libre text-sm">May 2025</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
