import Container from "../ui/Container";

const design = [
  {
    name: "Figma",
    logo: "/various/figma-logo.png",
    desc: "Design & Prototyiping",
  },
  {
    name: "Spline",
    logo: "/various/spline-logo.png",
    desc: "3d Editor",
  },
  {
    name: "Blender",
    logo: "/various/blender.png",
    desc: "3d Design Tool",
  },
  {
    name: "Illustrator",
    logo: "/various/ai-logo.png",
    desc: "Vector Design Tool",
  },
  {
    name: "Photoshop",
    logo: "/various/ps-logo.png",
    desc: "Image Editor",
  },
];

const webDev = [
  {
    name: "JavaScript",
    logo: "/various/js-logo.png",
    desc: "Languages of the web",
  },
  {
    name: "TypeScript",
    logo: "/various/typescript.png",
    desc: "Stricter JavaScript",
  },
  {
    name: "ReactJS",
    logo: "/various/react-logo.png",
    desc: "A JavaScript Library",
  },
  {
    name: "Tailwind & SASS",
    logo: "/various/tailwind-logo.png",
    desc: "CSS Frameworks",
  },
  {
    name: "NextJS",
    logo: "/various/next-logo.svg",
    desc: "React Framework",
  },
  {
    name: "Angular",
    logo: "/various/angular-logo.png",
    desc: "JavaScript Framework",
  },
  {
    name: "Redux",
    logo: "/various/redux-logo.png",
    desc: "State Managment",
  },
  {
    name: "Three.js",
    logo: "/various/threejs.png",
    desc: "3d Javascript Library",
  },
  {
    name: "Git & GitHub",
    logo: "/various/github-logo.png",
    desc: "Version Control",
  },
  {
    name: "Appwrite",
    logo: "/various/appwrite-logo.png",
    desc: "Backend tool",
  },
  {
    name: "Supabase",
    logo: "/various/supabase-logo.png",
    desc: "Backend tool",
  },
];

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
          <p className="mb-1!">Javascript/Typescript</p>
          <p className="mb-1!">React</p>
          <p className="mb-1!">Angular</p>
          <p className="mb-1!">Motion</p>
          <p className="mb-1!">GSAP</p>
          <p className="mb-1!">Webgl</p>
          <p className="mb-1!">Three.js/R3f</p>
        </div>
        <div>
          <h2 className="text-heading text-md mb-3">Design Skills</h2>
          <p className="mb-1!">Figma</p>
          <p className="mb-1!">Blender</p>
          <p className="mb-1!">Photoshop</p>
          <p className="mb-1!">After Effects</p>
          <p className="mb-1!">Lottie</p>
          <p className="mb-1!">Spline 3d</p>
        </div>
      </div>
    </Container>
  );
};

const TechIcons = ({ item }: any) => {
  return <div>{item}</div>;
};

export default About;
