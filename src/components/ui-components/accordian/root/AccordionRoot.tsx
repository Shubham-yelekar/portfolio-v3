"use client";
import React, { useState } from "react";
import { AccordionContext } from "../context";

const AccordionRoot = ({ children, className }: any) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  function toggleItem(value: string) {
    setOpenItem((prev) => (prev === value ? null : value));
  }

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionRoot;
