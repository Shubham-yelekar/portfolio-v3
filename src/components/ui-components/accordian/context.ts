import React, { createContext, useContext } from "react";
import { AccordionContextTypes } from "./types";

// Create context
export const AccordionContext = createContext<AccordionContextTypes | null>(
  null,
);

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used inside AccordionRoot");
  }
  return context;
}
