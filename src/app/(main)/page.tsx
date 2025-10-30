import Container from "@/components/ui/Container";

import PageWrapper from "@/components/ui/PageWrapper";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import WavingFlag from "@/components/ui/WavingFlag";
import Breaker from "@/components/ui/Breaker";
import LabComponents from "@/components/sections/LabComponents";
import Blogs from "@/components/sections/Blogs";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <PageWrapper>
      {/* <WavingFlag /> */}
      <Hero />
      <Breaker />
      <Projects />
      <Breaker />
      {/* <LabComponents /> */}
      <Breaker />
      <Blogs />
      <Breaker />
      <About />
    </PageWrapper>
  );
}
