"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const LinkHover = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <FlipLink href="#">Bring</FlipLink>
      <FlipLink href="#">Mouse</FlipLink>
      <FlipLink href="#">Over Here</FlipLink>
    </div>
  );
};

const DURATION = 0.3;
const STAGGER = 0.03;

interface LinkType {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: LinkType) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden font-sans text-4xl font-bold -tracking-[2px] whitespace-nowrap uppercase"
      style={{ lineHeight: 0.8 }}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default LinkHover;
