"use client";
import clsx from "clsx";
import { useState } from "react";
const items = [
  {
    header: "header-1",
    panel: "Answer panel",
  },
  {
    header: "header-2",
    panel: "Answer panel",
  },
  {
    header: "header-3",
    panel: "Answer panel",
  },
];

const accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(index);
  };
  return (
    <div className="h-fit w-[60%]">
      {items.map((item, id) => (
        <div key={id} className="border border-neutral-200">
          <button
            className="flex w-full justify-between bg-neutral-200 p-2"
            onClick={() => toggleOpen(id)}
          >
            <div>{item.header}</div>
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
            <div className="overflow-hidden p-4">{item.panel}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default accordion;
