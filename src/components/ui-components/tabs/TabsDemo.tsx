"use client";
import React from "react";
import { useState } from "react";
import cn from "@/app/lib/cn";
import { Tabs } from "./tabs/Tabs";
import { TabsList } from "./tabslist/TabsList";
import { TabsTrigger } from "./tabsTrigger/TabsTrigger";
import { TabsContent } from "./tabsContent/TabsContent";

// const Items = [
//   {
//     value: "html",
//     label: "HTML",
//     panel:
//       "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
//   },
//   {
//     value: "css",
//     label: "CSS",
//     panel:
//       "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
//   },
//   {
//     value: "javascript",
//     label: "JavaScript",
//     panel:
//       "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
//   },
// ];

const TabsDemo = () => {
  return (
    <div className="max-w-96">
      <Tabs defaultValue="html">
        <TabsList>
          <TabsTrigger value="html">HTML</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
        </TabsList>
        <TabsContent value="html">
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        </TabsContent>
        <TabsContent value="css">
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        </TabsContent>
        <TabsContent value="javascript">
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
