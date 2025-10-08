import React from "react";
import Link from "next/link";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-12 flex min-h-[25vh] items-center justify-center overflow-hidden">
      <div className="z-1 flex gap-4">
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
