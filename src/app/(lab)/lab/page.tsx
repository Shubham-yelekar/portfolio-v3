import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const page = () => {
  const lab = getAllContentMeta("lab");
  console.log(lab);
  return (
    <PageWrapper>
      <Container className="mt-[14vh] px-4">
        <h2 className="font-libre! text-center text-3xl font-bold">
          Works & Projects
        </h2>

        <div className="mt-12 grid grid-cols-2 justify-center gap-4">
          {lab.map((item) => (
            <Link
              href={`/lab/${item.slug}`}
              key={item.slug}
              className="cursor hover relative flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-2 transition-all ease-in-out hover:border-neutral-300 hover:shadow-[var(--card-shadow-2)] dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="overflow-clip rounded-xl shadow-[var(--card-shadow-2)] hover:shadow-[var(--card-shadow]">
                <Image
                  src={item.thumbImage}
                  width={400}
                  height={200}
                  className="w-full object-cover"
                  alt={`${item.slug}-image`}
                />
              </div>
              <div className="flex flex-col justify-between rounded-xl px-2 py-3">
                <h4 className="font-libre text-xl">{item.title}</h4>
                <p className="">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default page;
