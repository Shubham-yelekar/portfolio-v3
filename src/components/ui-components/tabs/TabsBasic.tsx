"use client";
import React from "react";
import { useState } from "react";

const Items = [
  {
    value: "html",
    label: "HTML",
    panel:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    label: "CSS",
    panel:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    label: "JavaScript",
    panel:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const TabsBasic = () => {
  return (
    <div>
      <Tabs items={Items} />
    </div>
  );
};

type ItemType = {
  value: string;
  label: string;
  panel: string;
};

type itemsProps = {
  items: ItemType;
};

const Tabs = ({ items }: any) => {
  const [openTab, setOpenTab] = useState(0);
  return (
    <div className="max-w-96">
      <div className="relative grid cursor-pointer grid-cols-3 rounded-xl border border-neutral-300 bg-neutral-200 p-1 dark:border-neutral-700/20 dark:bg-neutral-800">
        {items.map((item: any, id: number) => (
          <button
            className={`rounded-lg px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white ${openTab === id ? "bg-neutral-50 font-semibold text-neutral-900 shadow dark:bg-neutral-700 dark:text-white" : ""}`}
            key={id}
            onClick={() => setOpenTab(id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="text-paragraph mt-1 rounded-xl border border-neutral-300 bg-neutral-200 p-3 dark:border-neutral-700/20 dark:bg-neutral-800">
        {items[openTab].panel}
      </div>
    </div>
  );
};

export default TabsBasic;
