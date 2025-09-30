import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";

const Projects = () => {
  return (
    <Container className="flex flex-col gap-6 md:gap-9">
      <h2 className="text-paragraph! font-libre! px-2 text-center text-2xl italic md:px-4">
        Selected Projects
      </h2>
      <div className="flex flex-col gap-24">
        <div className="">
          <div className="mb-4 overflow-clip rounded-2xl">
            <Image
              src={"/pictures/thumb.jpg"}
              width={900}
              height={600}
              alt="thumb"
            />
          </div>
          <div className="flex-start flex flex-col gap-2 px-2 md:flex-row md:px-4">
            <div className="flex-1">
              <h4 className="bold text-lg md:text-2xl">
                Toyota Land Cruiser 300
              </h4>
              <h4 className="text-md text-neutral-800! md:text-lg dark:text-neutral-500!">
                Product Page Redesign
              </h4>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-paragraph text-sm md:text-base">
                I led the redesign and development for the Toyota Land Cruiser
                300 product page at <strong>Artificial Reality.</strong>
              </p>
              <Button className="mt-4 w-fit" variant={"secondary"}>
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
