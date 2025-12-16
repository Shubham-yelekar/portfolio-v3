"use client";
import clsx from "clsx";
import React, { useState } from "react";

const items = [
  {
    header: "What is an Accordion?",
    panel:
      "An accordion is a UI element that expands and collapses to reveal or hide content, helping keep layouts clean and organized.",
  },
  {
    header: "How Does It Work?",
    panel:
      "Users click or tap on a section header to expand it. Clicking again collapses it, keeping the interface tidy.",
  },
  {
    header: "Where Is It Used?",
    panel:
      "Common in FAQs, settings panels, product descriptions, and anywhere you want to group related content.",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(index);
  };
  return (
    <div className="h-fit w-[60%] gap-1 rounded-2xl border border-white/50 bg-neutral-200 p-1.5 dark:bg-neutral-800">
      {items.map((item, id) => (
        <div key={id} className="mb-2 [&:last-child]:mb-0">
          <button
            className="flex w-full justify-between rounded-xl bg-neutral-50 p-3 dark:bg-neutral-700"
            onClick={() => toggleOpen(id)}
          >
            <div className="text-neutral-800 dark:text-neutral-100">
              {item.header}
            </div>
            <div
              className={clsx(
                "flex",
                openIndex === id ? "rotate-180" : "rotate-0",
              )}
            >
              <span className="rotate-0">🔽</span>
            </div>
          </button>
          {openIndex === id && (
            <div className="overflow-hidden p-3 text-xs">{item.panel}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
