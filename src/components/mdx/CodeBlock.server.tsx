// components/mdx/CodeBlock.server.tsx
import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import CopyButtonClient from "./CopyButton.client";
import { CodeBlockTheme } from "./CodeBlockTheme";

type Props = {
  code: string;
  language?: string;
  title?: string;
};

// const prismTheme = themes.duotoneDark; // change to any theme from prism-react-renderer
const prismTheme = CodeBlockTheme; // change to any theme from prism-react-renderer

export default function CodeBlockServer({
  code = "",
  language = "",
  title,
}: Props) {
  const trimmed = code.replace(/\n+$/, ""); // remove trailing blank lines

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-neutral-300 bg-neutral-900 dark:border-neutral-700">
      <div className="flex items-center justify-between rounded-t-xl border-b border-neutral-700 bg-neutral-800 px-3 py-2 dark:border-neutral-700">
        <div className="font-mono text-sm text-neutral-200">
          {title ?? (language || "code")}
        </div>
        {/* The copy button is client-only and lightweight */}
        <div>
          <CopyButtonClient code={trimmed} />
        </div>
      </div>

      <Highlight
        theme={prismTheme}
        code={trimmed}
        language={language || "text"}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              "m-0 max-h-[60vh] overflow-auto bg-neutral-950/50 p-4 text-sm leading-5"
            }
            style={style}
            aria-label={`code block ${language}`}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key });
                    return <span key={`${i}-${key}`} {...tokenProps} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
