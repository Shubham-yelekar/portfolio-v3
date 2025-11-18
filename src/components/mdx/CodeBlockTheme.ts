import type { PrismTheme } from "prism-react-renderer";

export const CodeBlockTheme: PrismTheme = {
  plain: {
    backgroundColor: "transparent",
    color: "#e4e4e7",
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: { color: "#6b7280", fontStyle: "italic" },
    },

    { types: ["punctuation"], style: { color: "#94a3b8" } },

    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol"],
      style: { color: "#fbbf24" },
    },

    { types: ["attr-name", "selector"], style: { color: "#f472b6" } },

    {
      types: ["string", "char", "builtin", "inserted", "attr-value"],
      style: { color: "#34d399" },
    },

    { types: ["operator"], style: { color: "#cbd5e1" } },

    {
      types: ["atrule", "keyword"],
      style: { color: "#c4b5fd", fontWeight: "600" },
    },

    { types: ["function"], style: { color: "#67e8f9" } },

    { types: ["class-name"], style: { color: "#a78bfa" } },

    { types: ["regex"], style: { color: "#fcd34d" } },

    { types: ["deleted"], style: { color: "#f87171" } },

    { types: ["important"], style: { color: "#fb7185" } },
  ],
};
