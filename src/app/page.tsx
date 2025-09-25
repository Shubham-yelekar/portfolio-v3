import Container from "./components/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="mt-[30vh] flex flex-col gap-9">
        <div>
          <h1 className="text-paragraph font-sans tracking-tight md:text-4xl">
            Hi, I’m
            <span className="text-heading"> Shubham</span>,
          </h1>
          <h1 className="text-paragraph font-sans tracking-tight md:text-4xl">
            A Front-end <span className="text-heading">Developer</span>
          </h1>
          <h1 className="text-paragraph font-sans tracking-tight md:text-4xl">
            <span className="font-libre text-heading italic">& Designer,</span>&
            Based in Mumbai.
          </h1>
        </div>

        <p className="text-paragraph md:text-md max-w-lg text-sm">
          Specializing in creating user-friendly and visually compelling
          interfaces.
        </p>
      </Container>
    </div>
  );
}
