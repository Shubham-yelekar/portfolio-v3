"use client";
import { useAccordionContext } from "../context";
import { useAccordionItemContext } from "../itemContext";
import clsx from "clsx";

const AccordionTrigger = ({ children, className }: any) => {
  const { toggleItem } = useAccordionContext();
  const { value, isOpen } = useAccordionItemContext();
  return (
    <button
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
      onClick={() => toggleItem(value)}
      className={clsx(
        "w-full",
        "cursor-pointer select-none",
        "focus:outline-none focus-visible:ring-2",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default AccordionTrigger;
