// components/mdx/InlineCode.tsx
import React from "react";
import clsx from "clsx";

type InlineCodeProps = {
  children: React.ReactNode;
  className?: string;
};

const InlineCode = ({ children, className }: InlineCodeProps) => {
  return (
    <code
      className={clsx(
        "mx-1 bg-neutral-300! px-1.5 py-0.5 font-mono text-blue-600! dark:bg-neutral-800! dark:text-blue-400!",
        "border border-rose-500/20",
        className,
      )}
    >
      {children}
    </code>
  );
};

export default InlineCode;
