import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";
import LabComponents from "@/components/sections/LabComponents";
import Projects from "@/components/sections/Projects";
import Breaker from "@/components/ui/Breaker";
import About from "../../components/sections/About";

export default function Home() {
  return (
    <>
      {/* <WavingFlag /> */}
      <Hero />
      <Breaker />
      <Projects />
      <Breaker />
      <LabComponents />
      <Breaker />
      <Blogs />
      <Breaker />
      <About />
    </>
  );
}
