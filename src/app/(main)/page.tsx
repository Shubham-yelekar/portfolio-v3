import Container from "@/components/ui/Container";

import PageWrapper from "@/components/ui/PageWrapper";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import WavingFlag from "@/components/ui/WavingFlag";

export default function Home() {
  return (
    <PageWrapper>
      {/* <WavingFlag /> */}
      <Hero />
      <Projects />
    </PageWrapper>
  );
}
