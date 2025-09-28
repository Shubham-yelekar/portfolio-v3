import Container from "@/components/ui/Container";
import WavingFlag from "@/components/ui/WavingFlag";
import BlankDiv from "@/components/ui/BlankDiv";
import Button from "@/components/ui/Button";

import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";

import Link from "next/link";
import Breaker from "@/components/ui/Breaker";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <WavingFlag />
      <Hero />
      <Projects />
    </>
  );
}
