"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import cn from "@/app/lib/cn";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  AnimatePresence,
  easeInOut,
  hover,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import { ThemeProvider, useTheme } from "next-themes";
import { track } from "@vercel/analytics";
import { IoMenu } from "react-icons/io5";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
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

  const toggeltheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <motion.nav
      animate={{
        boxShadow: scrolled ? "var(--card-shadow-2)" : "none",
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      className="border-px fixed top-4 left-1/2 z-100 flex h-fit w-fit -translate-x-1/2 items-center justify-between gap-3 rounded-full border border-neutral-800 bg-black p-2"
    >
      <Link href={"/"}>
        <Image
          src="/pictures/avatartion.png"
          width={24}
          height={24}
          className="min-w-5 rounded-full transition-all ease-in-out hover:ring-neutral-200"
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
            // onClick={() => (sendGTMEvent({ "nav-item": links.title });track(links.url))}
            onClick={() => track(links.url)}
          >
            {hovered === idx && (
              <motion.span
                layoutId="hovered-span"
                className="absolute inset-0 -z-1 flex h-full w-full items-center justify-center rounded-full bg-neutral-700"
              ></motion.span>
            )}
            <span className="font-medium text-neutral-100">{links.title}</span>
          </Link>
        ))}
        {/* <span className="text-body text-xs text-neutral-400 dark:text-neutral-100">
          Menu
        </span> */}
      </div>
      <button
        onClick={() => {
          sendGTMEvent({ button: "toggle" });
          toggeltheme();
        }}
        className="relative grid h-5 w-5 cursor-pointer overflow-clip rounded-2xl"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              className="grid-area-[1/1]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <IoIosSunny size={18} className="text-neutral-100" />
            </motion.div>
          ) : (
            <motion.div
              className="grid-area-[1/1]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              {" "}
              <IoIosMoon size={18} className="text-neutral-200" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.nav>
  );
};

export default Navbar;
