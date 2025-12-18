"use client";
import { useAccordionContext } from "../context";
import AccordionItemContext from "../itemContext";
import clsx from "clsx";

const AccordionItem = ({ value, children, className }: any) => {
  const { openItem } = useAccordionContext();
  const isOpen = openItem === value;
  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={clsx("w-full", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
