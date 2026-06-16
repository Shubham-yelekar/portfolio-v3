import Container from "../ui/Container";

const About = () => {
  return (
    <Container text={true} className="flex flex-col gap-16 px-4 md:px-4">
      {/* after:absolute after:left-0 after:-z-10 after:h-full after:w-full after:bg-neutral-800 after:content-[''] md:px-4" */}
      <div className="absolute -z-2">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
        />
        {/* Your Content/Components */}
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-2 flex-col gap-3">
          <p>...</p>
          <p>
            I specializing in building user-friendly and visually compelling web
            experiences. With two years of professional experience, my work is
            centered on bridging the gap between design and code.
          </p>

          <p>
            I translate high-fidelity designs from Figma into performant,
            component-based applications using React and Next.js.
          </p>
          <p>
            I'm currently expanding my skill set into creative technologies like
            Three.js and GLSL to build more immersive and engaging interfaces
            for the modern web.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-heading text-md mb-3">Developer Skills</h2>
          <p className="mb-1!">Frontend Development</p>
          <p className="mb-1!">Creative Coding</p>
          <p className="mb-1!">Design Systems</p>
          <p className="mb-1!">Webgl</p>
          <p className="mb-1!">Three.js/R3f</p>
        </div>
        <div>
          <h2 className="text-heading text-md mb-3">Design Skills</h2>
          <p className="mb-1!">UI Design</p>
          <p className="mb-1!">3D Modeling</p>
          <p className="mb-1!">Interaction Design</p>
          <p className="mb-1!">Adobe Suit</p>
          <p className="mb-1!">Lottie/Jitter</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
