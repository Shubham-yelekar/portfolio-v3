"use client";
import { createContext, useContext } from "react";
import { AccordionItemContextTypes } from "./types";

const AccordionItemContext = createContext<AccordionItemContextTypes | null>(
  null,
);

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error("Accordion components must be used inside AccordionItem");
  }

  return context;
}

export default AccordionItemContext;
