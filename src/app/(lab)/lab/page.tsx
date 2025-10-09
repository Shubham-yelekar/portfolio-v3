import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Container from "@/components/ui/Container";
import { getAllContentMeta } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const page = () => {
  const lab = getAllContentMeta("lab");
  return (
    <PageWrapper>
      <Container className="mt-[14dvh] px-4">
        <h2 className="font-libre! text-center text-3xl font-bold">Lab</h2>

        <div className="mt-12 grid grid-cols-2 justify-center gap-4">
          {lab.map((item) => (
            <Link
              href={`/lab/${item.slug}`}
              key={item.slug}
              className="relative"
            >
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
              <div className="absolute bottom-2 left-2 rounded-lg border border-neutral-200/10 bg-neutral-900/20 backdrop-blur-sm">
                <h4 className="px-2 py-1 text-sm text-neutral-100! md:px-3 md:py-1 md:text-lg">
                  Component
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </PageWrapper>
  );
};

export default page;
