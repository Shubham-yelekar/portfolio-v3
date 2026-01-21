"use client"
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

const TabsDemo = () => {
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
  const [openTab , setOpenTab] = useState(0)
  return (
    <div className="max-w-96" >
      <div className="bg-neutral-200 p-1 grid grid-cols-3 relative border border-neutral-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ">
     
        {items.map((item: any, id: number) => (
          <button className={`px-3 py-1 rounded-lg ${openTab === id ? "font-semibold bg-neutral-50 dark:bg-neutral-700" : ""}`} key={id} onClick={()=>setOpenTab(id)}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="bg-neutral-200 p-3 border border-neutral-300 rounded-xl mt-1 text-paragraph dark:bg-neutral-800 dark:border-neutral-700 ">
        { items[openTab].panel}
        </div>
    </div>
  );
};

export default TabsDemo;
