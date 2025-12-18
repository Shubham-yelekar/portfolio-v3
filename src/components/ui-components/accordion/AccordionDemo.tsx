import {
  AccordionRoot,
  AccordionHeader,
  AccordionTrigger,
  AccordionItem,
  AccordionPanel,
} from ".";

const accordionDemo = () => {
  return (
    <div className="flex w-[60%] flex-col items-center justify-center gap-1 rounded-2xl border border-white/50 bg-neutral-200 p-1.5 dark:border-white/5 dark:bg-neutral-800/20">
      <AccordionRoot>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <AccordionHeader>What is a accordion</AccordionHeader>
          </AccordionTrigger>
          <AccordionPanel>
            An accordion is a UI pattern used to show and hide content.
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
      <AccordionRoot>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <AccordionHeader>How does it work?</AccordionHeader>
          </AccordionTrigger>
          <AccordionPanel>
            Users click or tap on a section header to expand it. Clicking again
            collapses it, keeping the interface tidy.
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
      <AccordionRoot>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <AccordionHeader>Where is it used?</AccordionHeader>
          </AccordionTrigger>
          <AccordionPanel>
            Common in FAQs, settings panels, product descriptions, and anywhere
            you want to group related content.
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    </div>
  );
};

export default accordionDemo;
