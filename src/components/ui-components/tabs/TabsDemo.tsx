import Button from "@/components/ui/Button";
import React from "react";
import ModernButton from "../button-collection/ModernButton";

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
  return (
    <div>
      <div>
        {items.map((item: any, id: number) => (
          <ModernButton variant="secondary" key={id}>
            {item.value}
          </ModernButton>
        ))}
      </div>
      <div>panels</div>
    </div>
  );
};

export default TabsDemo;
