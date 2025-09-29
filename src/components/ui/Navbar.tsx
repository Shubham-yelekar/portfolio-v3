"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import {
  easeInOut,
  hover,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useTransitionRouter } from "next-view-transitions";
const Navbar = () => {
  const router = useTransitionRouter();
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const navLinks = [
    { title: "Projects", url: "/projects" },
    { title: "Notes", url: "/notes" },
    { title: "Lab", url: "/lab" },
  ];
  const [scrolled, setScrolled] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      animate={{
        boxShadow: scrolled ? "var(--card-shadow-2)" : "none",
        width: scrolled ? "220px" : "300px",
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      className="fixed top-4 left-1/2 z-100 flex -translate-x-1/2 items-center justify-between rounded-full border-1 border-white/40 bg-white/40 p-2 backdrop-blur-sm"
    >
      <Link
        href={"/"}
        onClick={(e) => {
          e.preventDefault();
          router.push("/", { onTransitionReady: pageAnimation });
        }}
      >
        <Image
          src="/pictures/cat.jpg"
          width={60}
          height={60}
          className="w-8 rounded-full"
          alt="me"
        />
      </Link>
      <div className="flex items-center">
        {navLinks.map((links, idx) => (
          <Link
            key={idx}
            href={links.url}
            className="relative flex items-center justify-center px-2 py-1 text-sm"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={(e) => {
              e.preventDefault();
              router.push(links.url, { onTransitionReady: pageAnimation });
            }}
          >
            {hovered === idx && (
              <motion.span
                layoutId="hovered-span"
                className="absolute inset-0 -z-1 flex h-full w-full items-center justify-center rounded-full bg-neutral-200"
              ></motion.span>
            )}
            <span className="font-semibold text-neutral-600">
              {links.title}
            </span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};

export default Navbar;
