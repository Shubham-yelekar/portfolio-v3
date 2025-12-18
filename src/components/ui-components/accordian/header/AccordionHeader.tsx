"use client";

import clsx from "clsx";
import { useAccordionItemContext } from "../itemContext";
import { FaPlus } from "react-icons/fa6";
const AccordionHeader = ({ children }: any) => {
  const { isOpen } = useAccordionItemContext();
  return (
    <div
      className={
        "group flex w-full items-center justify-between rounded-xl bg-neutral-50 p-3 dark:border dark:border-neutral-50/5 dark:bg-neutral-800"
      }
    >
      <div className={"text-neutral-800 dark:text-neutral-100"}>{children}</div>
      <div className="group-hover:bg-brand group-hover:dark:bg-brand inline-flex aspect-square w-fit items-center rounded-lg bg-neutral-400 px-1 py-1 text-sm whitespace-nowrap text-neutral-100 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_2px_4px_rgba(0,0,0,0.15)] transition-colors duration-300 ease-out dark:bg-neutral-700">
        <span
          className={clsx(
            "transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-45" : "rotate-0",
          )}
        >
          {" "}
          <FaPlus />{" "}
        </span>
      </div>
    </div>
  );
};

export default AccordionHeader;
