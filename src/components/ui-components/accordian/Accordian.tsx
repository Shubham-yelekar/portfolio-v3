"use client";
import clsx from "clsx";
import { useState } from "react";
import ModernButton from "../button-collection/ModernButton";
import { FaPlus } from "react-icons/fa6";

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
    <div className="h-fit w-[60%] gap-1 rounded-2xl border border-white/50 bg-neutral-200 p-1.5 dark:border-white/5 dark:bg-neutral-800/20">
      {items.map((item, id) => (
        <div key={id} className="mb-2 [&:last-child]:mb-0">
          <button
            className="group flex w-full justify-between rounded-xl bg-neutral-50 p-3 dark:border dark:border-neutral-50/5 dark:bg-neutral-800"
            onClick={() => toggleOpen(id)}
          >
            <div className="text-neutral-800 dark:text-neutral-100">
              {item.header}
            </div>

            <div className="group-hover:bg-brand group-hover:dark:bg-brand inline-flex aspect-square w-fit items-center rounded-lg bg-neutral-400 px-1 py-1 text-sm whitespace-nowrap text-neutral-100 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_2px_4px_rgba(0,0,0,0.15)] transition-colors duration-300 ease-out dark:bg-neutral-700">
              <span
                className={clsx(
                  "transition-transform duration-600 ease-out",
                  openIndex === id ? "rotate-45" : "rotate-0",
                )}
              >
                <FaPlus />
              </span>
            </div>
          </button>
          {openIndex === id && (
            <div className="overflow-hidden p-3 text-sm text-neutral-800 dark:text-neutral-400">
              {item.panel}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
