import Container from "@/components/ui/Container";
import PageWrapper from "@/components/ui/PageWrapper";

const TypographyDesignSystem = () => {
  return (
    <PageWrapper className="bg-background text-off-white min-h-screen">
      <Container className="mx-auto mt-[14dvh] mb-24 max-w-6xl space-y-16">
        {/* Dynamic Spec Catalog Grid */}
        <div className="space-y-12">
          <h1>Heading</h1>
          <h2>Heading</h2>
          <h3>Heading</h3>
          <h4>Heading</h4>
          <h5>Heading</h5>
          <h6>Heading</h6>
          <p>Heading</p>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default TypographyDesignSystem;
