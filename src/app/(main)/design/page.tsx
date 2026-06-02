import Container from "@/components/ui/Container";
import PageWrapper from "@/components/ui/PageWrapper";
import Button from "../../../components/ui/Button";

const TypographyDesignSystem = () => {
  return (
    <PageWrapper className="bg-background text-off-white min-h-screen">
      <Container className="mx-auto mt-[14dvh] mb-24 max-w-6xl space-y-16">
        {/* Dynamic Spec Catalog Grid */}
        <div className="space-y-12">
          <h1 className="heading-1">Heading 1</h1>
          <h2 className="heading-2">Heading 2</h2>
          <p className="body-1">Body 1</p>
          <p className="body-2">Body 2</p>
          <p className="caption-1">Body 1</p>
          <p className="caption-2">Body 2</p>
          <div className="align-start flex gap-3">
            <Button variant={"primary"}>Button</Button>
            <Button variant={"primary"} size={"sm"}>
              Button
            </Button>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default TypographyDesignSystem;
