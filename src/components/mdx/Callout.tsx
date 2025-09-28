// components/mdx/Callout.tsx
import React from "react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "note" | "warning";
}

export const Callout = ({ children, type = "note" }: CalloutProps) => {
  const baseStyle = "px-4 py-3 border rounded-lg";
  const typeStyles = {
    note: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-500/30 dark:text-blue-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-500/30 dark:text-yellow-200",
  };

  return <div className={`${baseStyle} ${typeStyles[type]}`}>{children}</div>;
};
