"use client";
import React, { useState } from "react";
import { AccordionContext } from "../context";

type AccordionRootProps = {
  children: React.ReactNode;
  multiple?: boolean;
};

const AccordionRoot = ({ children, multiple = false }: AccordionRootProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<string[]>([]);
  function toggleItem(value: string) {
    if (multiple) {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value],
      );
    } else {
      setOpenItem((prev) => (prev === value ? null : value));
    }
  }

  const isOpen = (value: string) =>
    multiple ? openItems.includes(value) : openItem === value;

  return (
    <AccordionContext.Provider value={{ isOpen, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionRoot;
