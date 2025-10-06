import React from "react";
import Link from "next/link";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-12 flex h-24 items-center justify-center border-t border-neutral-300 bg-neutral-300 dark:border-neutral-900 dark:bg-neutral-950">
      <div className="flex gap-4">
        <Link href={"https://x.com/shubu_y"} target="_blank">
          <BsTwitterX size={16} />
        </Link>
        <Link href={"https://github.com/Shubham-yelekar"} target="_blank">
          <BsGithub size={16} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/shubhamyelekar/"}
          target="_blank"
        >
          <BsLinkedin size={16} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
