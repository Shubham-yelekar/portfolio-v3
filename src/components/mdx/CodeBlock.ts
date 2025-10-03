// src/styles/myCustomTheme.ts

import { useTheme } from "next-themes";
import { PrismTheme } from "prism-react-renderer";

export const codeBlockTheme: PrismTheme = {
  plain: {
    color: "#fffffe", // Light grey text
    backgroundColor: "#16161a", // Dark purple background
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#475d5b", // Grey for comments
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.8,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#ffcc99", // Peach for strings
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#f8f8f2", // White for punctuation
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#79d1a3", // Light green
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#ff8a8a", // Coral for keywords
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#82d8ff", // Sky blue for functions
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#79d1a3", // Light green
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#ff8a8a", // Coral
      },
    },
  ],
};
