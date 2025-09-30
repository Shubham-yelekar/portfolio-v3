"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import cn from "@/app/lib/cn";
import {
  easeInOut,
  hover,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useTransitionRouter } from "next-view-transitions";
import { ThemeProvider, useTheme } from "next-themes";

const Navbar = () => {
  const router = useTransitionRouter();
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
    console.log(theme);
  };

  return (
    <motion.nav
      animate={{
        boxShadow: scrolled ? "var(--card-shadow-2)" : "none",
        width: scrolled ? "w-6xl" : "w-4xl",
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
          className="trasition-all w-8 rounded-full ring-4 ring-transparent ease-in-out hover:ring-neutral-200"
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
                className="absolute inset-0 -z-1 flex h-full w-full items-center justify-center rounded-full bg-neutral-50 dark:bg-neutral-400"
              ></motion.span>
            )}
            <span className="font-semibold text-neutral-800 text-shadow-md dark:text-neutral-100">
              {links.title}
            </span>
          </Link>
        ))}
      </div>
      <button
        onClick={() => toggeltheme()}
        className="relative h-8 w-8 cursor-pointer overflow-clip rounded-2xl bg-neutral-50"
      >
        <motion.div
          className="pointer-events-none absolute left-1/2 flex -translate-x-1/2 flex-col gap-3"
          animate={{
            y: theme === "light" ? -10 : -40,
          }}
          transition={{ stiffness: 200, damping: 20 }}
        >
          <motion.div
            animate={{ rotate: theme === "light" ? 0 : -90 }}
            transition={{ duration: 0.5 }}
          >
            <FaSun size={18} className="text-neutral-800" />
          </motion.div>

          {/* Moon Icon: Rotates in when theme becomes dark */}
          <motion.div
            animate={{ rotate: theme === "light" ? 90 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <FaMoon size={18} className="text-neutral-800" />
          </motion.div>
        </motion.div>
      </button>
      {/* <button
        className="rounded-2xl bg-white p-2 leading-3"
        onClick={() => setTheme("dark")}
      >
        dark
      </button>
      <button
        className="rounded-2xl bg-white p-2 leading-3"
        onClick={() => setTheme("light")}
      >
        light
      </button> */}
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
