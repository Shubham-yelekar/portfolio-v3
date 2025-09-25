"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { hover, motion } from "motion/react";
const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Work", url: "/work" },
    { title: "Lab", url: "/lab" },
    { title: "Journal", url: "/journal" },
  ];

  return (
    <Container className="absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white">
      <nav className="flex items-center justify-between p-2">
        <Image
          src="/pictures/cat.jpg"
          width={100}
          height={100}
          className="w-10 rounded-full"
          alt="me"
        />
        <div className="flex items-center">
          {navLinks.map((links, idx) => (
            <Link
              key={idx}
              href={links.url}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 -z-1 flex h-full w-full items-center justify-center rounded-full bg-neutral-100"
                ></motion.span>
              )}
              {links.title}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
