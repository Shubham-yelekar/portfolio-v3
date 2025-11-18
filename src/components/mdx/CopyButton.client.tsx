// components/mdx/CopyButton.client.tsx
"use client";

import React, { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

type Props = {
  code: string;
};

export default function CopyButtonClient({ code }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Copy failed", err);
      // optionally fallback: create hidden textarea, select, execCommand
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy code"
      className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs font-medium text-neutral-300 transition hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-700"
      title="Copy code"
    >
      {copied ? <LuCheck size={16} /> : <LuCopy size={16} />}
      <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
