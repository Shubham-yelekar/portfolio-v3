"use client";
import React from "react";
import { useState } from "react";
import cn from "@/app/lib/cn";
import { Tabs } from "./tabs/Tabs";
import { TabsList } from "./tabslist/TabsList";
import { TabsTrigger } from "./tabsTrigger/TabsTrigger";
import { TabsContent } from "./tabsContent/TabsContent";

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
            HyperText Markup Language (HTML) is the standard language used to
            build web documents for display in a browser. It provides the basic
            structure of a webpage.
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
