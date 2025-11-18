// components/mdx/MdxPre.tsx
import React from "react";
import CodeBlockServer from "./CodeBlock.server";

export const MdxPre = ({ children }: any) => {
  // children is <code className="language-js">`...code...`</code>
  const codeString = String(children?.props?.children ?? "");
  const className = children?.props?.className || "";
  const language = className.replace("language-", "").trim();

  return <CodeBlockServer code={codeString} language={language} />;
};
