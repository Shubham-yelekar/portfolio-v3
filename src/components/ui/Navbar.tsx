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
const Navbar = () => {
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
      <Link href={"/"}>
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

export default Navbar;
